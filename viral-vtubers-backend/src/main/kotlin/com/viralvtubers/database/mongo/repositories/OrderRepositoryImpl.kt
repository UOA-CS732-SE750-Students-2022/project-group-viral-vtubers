package com.viralvtubers.database.mongo.repositories

import com.viralvtubers.database.model.Order
import com.viralvtubers.database.model.User
import com.viralvtubers.database.mongo.MongoDatabase
import kotlinx.coroutines.flow.Flow
import org.bson.conversions.Bson
import org.litote.kmongo.Id
import org.litote.kmongo.coroutine.CoroutineCollection
import org.litote.kmongo.descending
import org.litote.kmongo.eq

fun MongoDatabase.asOrderRepository(): OrderRepository =
    object : OrderRepository {
        override val col: CoroutineCollection<Order> = database.getCollection()

        override suspend fun getOrder(
            vararg filter: Bson,
            sort: Bson
        ): Flow<Order> {
            val result =
                col.find(
                    Order::isDraft eq false,
                    *filter
                ).sort(sort)
            return result.toFlow()
        }

        override suspend fun getOrderByUser(userId: Id<User>): Flow<Order> {
            return col.find(Order::ownerId eq userId)
                .sort(descending(Order::createdDate)).toFlow()
        }
    }

