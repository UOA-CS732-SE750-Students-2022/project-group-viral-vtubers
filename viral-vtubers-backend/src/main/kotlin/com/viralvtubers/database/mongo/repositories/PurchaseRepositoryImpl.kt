package com.viralvtubers.database.mongo.repositories

import com.viralvtubers.database.model.Purchase
import com.viralvtubers.database.model.User
import com.viralvtubers.database.mongo.MongoDatabase
import kotlinx.coroutines.flow.Flow
import org.litote.kmongo.Id
import org.litote.kmongo.coroutine.CoroutineCollection
import org.litote.kmongo.eq

fun MongoDatabase.asPurchaseRepository(): PurchaseRepository =
    object : PurchaseRepository {
        override val col: CoroutineCollection<Purchase> =
            database.getCollection()

        override fun getPurchasesByUserId(userId: Id<User>): Flow<Purchase> {
            return col.find(Purchase::userId eq userId).toFlow()
        }
    }

