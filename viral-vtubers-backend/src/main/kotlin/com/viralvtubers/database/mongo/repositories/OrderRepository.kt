package com.viralvtubers.database.mongo.repositories

import com.viralvtubers.database.model.Order
import com.viralvtubers.database.model.User
import kotlinx.coroutines.flow.Flow
import org.bson.conversions.Bson
import org.litote.kmongo.Id

interface OrderRepository : Repository<Order> {
    suspend fun getOrder(vararg filter: Bson, sort: Bson): Flow<Order>

    suspend fun getOrderByUser(userId: Id<User>): Flow<Order>
}
