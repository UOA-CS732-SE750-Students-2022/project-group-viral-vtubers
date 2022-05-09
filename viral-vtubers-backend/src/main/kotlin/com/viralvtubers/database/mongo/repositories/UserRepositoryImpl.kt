package com.viralvtubers.database.mongo.repositories

import com.viralvtubers.database.model.User
import com.viralvtubers.database.mongo.MongoDatabase
import kotlinx.coroutines.flow.Flow
import org.bson.conversions.Bson
import org.litote.kmongo.coroutine.CoroutineCollection
import org.litote.kmongo.eq

fun MongoDatabase.asUserRepository(): UserRepository = object : UserRepository {
    override var col: CoroutineCollection<User> = database.getCollection()

    override suspend fun getByFirebaseUid(uid: String): User? {
        return col.findOne(User::firebaseUid eq uid)
    }

    override suspend fun getUsers(vararg filter: Bson, sort: Bson): Flow<User> {
        val result =
            col.find(
                *filter
            ).sort(sort)
        return result.toFlow()
    }

    override suspend fun getByName(name: String): User? {
        return col.findOne(User::displayName eq name)
    }
}

