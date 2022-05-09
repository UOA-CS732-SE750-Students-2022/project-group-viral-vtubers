package com.viralvtubers.service

import com.viralvtubers.database.mongo.repositories.OrderRepository
import com.viralvtubers.graphql.data.*
import com.viralvtubers.graphql.input.AddOrderInput
import com.viralvtubers.graphql.input.EditOrderInput
import com.viralvtubers.mapper.map
import org.bson.types.ObjectId
import org.litote.kmongo.id.toId
import java.util.*
import com.viralvtubers.database.model.Order as OrderModel

class OrderServiceImpl(
    private val orderRepository: OrderRepository
) : OrderService {
    override suspend fun getOrderSearch(
        filter: OrderFilter?,
        sort: OrderSort?,
        cursor: String?,
        limit: Int?
    ): ProductPagination {
        TODO("Not yet implemented")
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
            createdDate = Date(),
        )

        return orderRepository.add(newOrder).map()
    }

    override suspend fun editOrder(userId: ID, order: EditOrderInput): Order {
        val orderModel = orderRepository.getById(order.id.map())
            ?: throw Exception("order not found")

        val update = orderModel.copy(
            name = order.name ?: orderModel.name,
            description = order.description ?: orderModel.description,
            bounty = order.bounty ?: orderModel.bounty,
            isDraft = order.isDraft ?: orderModel.isDraft,
            image = order.image ?: orderModel.image,
            tags = order.tagIds?.map { ObjectId(it).toId() } ?: orderModel.tags,
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

        return orderRepository.update(update)?.map()
            ?: throw Exception("order not found")
    }

}
