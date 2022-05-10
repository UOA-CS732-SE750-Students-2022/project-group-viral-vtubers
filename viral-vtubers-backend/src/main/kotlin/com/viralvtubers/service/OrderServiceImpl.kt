package com.viralvtubers.service

import com.viralvtubers.database.model.Apply
import com.viralvtubers.database.mongo.repositories.ApplyRepository
import com.viralvtubers.database.mongo.repositories.OrderRepository
import com.viralvtubers.database.mongo.repositories.Page
import com.viralvtubers.graphql.data.*
import com.viralvtubers.graphql.input.AddOrderInput
import com.viralvtubers.graphql.input.EditOrderInput
import com.viralvtubers.mapper.map
import kotlinx.coroutines.flow.*
import org.bson.conversions.Bson
import org.bson.types.ObjectId
import org.litote.kmongo.*
import org.litote.kmongo.id.toId
import java.util.*
import com.viralvtubers.database.model.Order as OrderModel

class OrderServiceImpl(
    private val orderRepository: OrderRepository,
    private val applyRepository: ApplyRepository
) : OrderService {
    override suspend fun getOrderSearch(
        filter: OrderFilter?,
        sort: OrderSort?,
        cursor: String?,
        limit: Int?
    ): OrderPagination {
        val filterBson = getFilterBson(filter)
        val sortBson = getSortBson(sort)

        var orderFlow = orderRepository.getOrder(
            *filterBson.toTypedArray(),
            sort = sortBson,
        ).withIndex()

        if (cursor != null) {
            val before =
                orderFlow.takeWhile { it.value._id.toString() != cursor }

            val last = before.last()

            orderFlow = orderFlow.dropWhile { it.index <= last.index }
        }

        val orders = orderFlow.take(limit ?: 25).map { it.value }.toList()

        return Page(
            start = orders.firstOrNull()?._id,
            end = orders.lastOrNull()?._id,
            items = orders,
            hasNext = orders.size == (limit ?: 25),
        ).map()
    }

    private fun getSortBson(sort: OrderSort?): Bson {
        sort ?: return descending(OrderModel::createdDate)

        sort.name?.let {
            return if (it == SortEnum.ASC) ascending(OrderModel::name)
            else descending(OrderModel::name)
        }

        sort.bounty?.let {
            return if (it == SortEnum.ASC) ascending(OrderModel::bounty)
            else descending(OrderModel::bounty)
        }

        return descending(OrderModel::createdDate)
    }

    private fun getFilterBson(filter: OrderFilter?): List<Bson> {
        filter ?: return ArrayList()

        val filterBson = ArrayList<Bson>()

        filter.search?.let {
            filterBson.add(
                OrderModel::name regex Regex(
                    ".*$it.*",
                    RegexOption.IGNORE_CASE
                )
            )
        }

        filter.minBounty?.let {
            filterBson.add(
                OrderModel::bounty gte it
            )
        }

        filter.maxBounty?.let {
            filterBson.add(
                OrderModel::bounty lte it
            )
        }

        return filterBson
    }

    override suspend fun getOrder(id: ID): Order {
        return orderRepository.getById(id.map())?.map()
            ?: throw Exception("order not found")
    }

    override suspend fun addOrder(userId: ID, order: AddOrderInput): Order {
        val newOrder = OrderModel(
            name = order.name,
            description = order.description,
            bounty = order.bounty,
            isDraft = order.isDraft,
            image = order.image,
            tags = order.tagIds.map { ObjectId(it).toId() },
            applications = ArrayList(),
            ownerId = userId.map(),
            artistId = null,
            createdDate = Date(),
        )

        return orderRepository.add(newOrder).map()
    }

    override suspend fun editOrder(userId: ID, order: EditOrderInput): Order {
        val orderModel = orderRepository.getById(order.id.map())
            ?: throw Exception("order not found")

        orderModel.artistId?.let {
            throw Exception("order has an artist, cannot edit")
        }

        val update = orderModel.copy(
            name = order.name ?: orderModel.name,
            description = order.description ?: orderModel.description,
            bounty = order.bounty ?: orderModel.bounty,
            isDraft = order.isDraft ?: orderModel.isDraft,
            image = order.image ?: orderModel.image,
            tags = order.tagIds?.map { ObjectId(it).toId() } ?: orderModel.tags,
            artistId = order.artistId?.map() ?: orderModel.artistId,
        )

        return orderRepository.update(update)?.map()
            ?: throw Exception("order not found")
    }

    override suspend fun deleteOrder(userId: ID, orderId: ID): Order {
        val orderModel = orderRepository.getById(orderId.map())
            ?: throw Exception("order not found")

        if (orderModel.applications.isNotEmpty()) {
            throw Exception("order has applications")
        }

        return orderRepository.delete(orderId.map())?.map()
            ?: throw Exception("order not found")
    }

    override suspend fun applyOrder(userId: ID, orderId: ID): Order {
        val orderModel = orderRepository.getById(orderId.map())
            ?: throw Exception("order not found")

        val applications = ArrayList(orderModel.applications)

        applications.find { it.map() == userId }?.let {
            throw Exception("user already applied")
        }

        val update = orderModel.copy(
            applications = orderModel.applications + userId.map(),
        )

        applyRepository.add(
            Apply(
                orderId = orderId.map(),
                userId = userId.map(),
            )
        )

        return orderRepository.update(update)?.map()
            ?: throw Exception("order not found")
    }

    override suspend fun getMyOrders(userId: ID): MyOrder {
        val orders =
            orderRepository.getOrderByUser(userId.map()).toList()
                .map { it.map() }

        val group = orders.groupBy({ it.artistId == null }, { it })

        return MyOrder(
            active = group[false] ?: emptyList(),
            past = group[true] ?: emptyList(),
        )
    }

    override suspend fun getMyCommissions(userId: ID): MyCommission {
        val orderIds = applyRepository.getApplyByUser(userId.map()).toList()
            .map { it.orderId }

        val orders = orderRepository.getByIds(orderIds).toList()
        return MyCommission(
            pending = orders.filter { it.artistId == null }.map { it.map() },
            won = orders.filter { it.artistId?.map() == userId }
                .map { it.map() },
            lost = orders.filter { it.artistId?.map() ?: userId != userId }
                .map { it.map() },
        )
    }
}
