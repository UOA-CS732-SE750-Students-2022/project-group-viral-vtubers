package com.viralvtubers.database.mongo.repositories

import com.viralvtubers.database.model.Order
import com.viralvtubers.database.mongo.MongoDatabase
import kotlinx.coroutines.flow.Flow
import org.bson.conversions.Bson
import org.litote.kmongo.coroutine.CoroutineCollection

fun MongoDatabase.asOrderRepository(): OrderRepository =
    object : OrderRepository {
        override val col: CoroutineCollection<Order> = database.getCollection()

        override suspend fun getOrder(
            vararg filter: Bson,
            sort: Bson
        ): Flow<Order> {
            val result =
                col.find(
                    *filter
                ).sort(sort)
            return result.toFlow()
        }
    }

