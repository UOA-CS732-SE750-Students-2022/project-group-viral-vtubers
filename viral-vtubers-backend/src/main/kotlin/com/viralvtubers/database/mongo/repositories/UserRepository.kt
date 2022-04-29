package com.viralvtubers.database.mongo.repositories

import com.mongodb.client.model.Aggregates
import com.mongodb.reactivestreams.client.MongoCollection
import com.mongodb.reactivestreams.client.MongoDatabase
import com.viralvtubers.database.model.User
import com.viralvtubers.database.mongo.UserDatabase
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.reactive.asFlow
import org.litote.kmongo.Id
import org.litote.kmongo.`in`
import org.litote.kmongo.reactivestreams.getCollection

class UserRepository(database: MongoDatabase) : UserDatabase {

    private val users: MongoCollection<User> = database.getCollection()

    override fun getUsers(userIds: Collection<Id<User>>): Flow<User> =
        this.users.find(Aggregates.match(User::id `in` userIds)).asFlow()
}