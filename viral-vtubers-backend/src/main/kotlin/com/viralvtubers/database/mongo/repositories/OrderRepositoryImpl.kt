package com.viralvtubers.database.mongo.repositories

import com.viralvtubers.database.model.Order
import com.viralvtubers.database.mongo.MongoDatabase
import org.litote.kmongo.coroutine.CoroutineCollection

fun MongoDatabase.asOrderRepository(): OrderRepository =
    object : OrderRepository {
        override val col: CoroutineCollection<Order> = database.getCollection()
    }

