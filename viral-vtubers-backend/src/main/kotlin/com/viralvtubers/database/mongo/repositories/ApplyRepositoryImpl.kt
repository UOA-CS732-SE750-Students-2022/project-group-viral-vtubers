package com.viralvtubers.database.mongo.repositories

import com.viralvtubers.database.model.Apply
import com.viralvtubers.database.model.User
import com.viralvtubers.database.mongo.MongoDatabase
import kotlinx.coroutines.flow.Flow
import org.litote.kmongo.Id
import org.litote.kmongo.coroutine.CoroutineCollection
import org.litote.kmongo.eq

fun MongoDatabase.asApplyRepository(): ApplyRepository =
    object : ApplyRepository {
        override val col: CoroutineCollection<Apply> = database.getCollection()

        override suspend fun getApplyByUser(userId: Id<User>): Flow<Apply> {
            return col.find(Apply::userId eq userId).toFlow()
        }
    }

