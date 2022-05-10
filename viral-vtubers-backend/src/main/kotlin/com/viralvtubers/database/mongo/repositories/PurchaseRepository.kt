package com.viralvtubers.database.mongo.repositories

import com.viralvtubers.database.model.Purchase
import com.viralvtubers.database.model.User
import kotlinx.coroutines.flow.Flow
import org.litote.kmongo.Id

interface PurchaseRepository : Repository<Purchase> {
    fun getPurchasesByUserId(userId: Id<User>): Flow<Purchase>
}
