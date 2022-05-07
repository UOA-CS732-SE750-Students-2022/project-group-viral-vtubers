package com.viralvtubers.database.mongo.repositories

import com.viralvtubers.database.model.User
import com.viralvtubers.database.mongo.MongoDatabase
import org.litote.kmongo.coroutine.CoroutineCollection

fun MongoDatabase.asUserRepository(): UserRepository = object : UserRepository {
    override var col: CoroutineCollection<User> = database.getCollection()
}

