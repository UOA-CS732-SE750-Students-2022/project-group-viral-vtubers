package com.viralvtubers.database.mongo.repositories

import com.viralvtubers.database.model.User
import com.viralvtubers.database.mongo.MongoDatabase
import org.litote.kmongo.coroutine.CoroutineCollection
import org.litote.kmongo.eq

fun MongoDatabase.asUserRepository(): UserRepository = object : UserRepository {
    override var col: CoroutineCollection<User> = database.getCollection()

    override suspend fun getByFirebaseUid(uid: String): User? {
        return col.findOne(User::firebaseUid eq uid)
    }
}

