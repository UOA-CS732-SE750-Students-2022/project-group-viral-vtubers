package com.viralvtubers.database.mongo.repositories

import com.viralvtubers.database.model.Order
import kotlinx.coroutines.flow.Flow
import org.bson.conversions.Bson

interface OrderRepository : Repository<Order> {
    suspend fun getOrder(vararg filter: Bson, sort: Bson): Flow<Order>
}
