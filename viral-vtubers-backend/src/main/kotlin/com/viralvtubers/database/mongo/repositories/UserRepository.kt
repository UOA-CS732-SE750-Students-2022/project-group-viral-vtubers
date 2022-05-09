package com.viralvtubers.database.mongo.repositories

import com.viralvtubers.database.model.User
import kotlinx.coroutines.flow.Flow
import org.bson.conversions.Bson

interface UserRepository : Repository<User> {
    suspend fun getByFirebaseUid(uid: String): User?

    suspend fun getUsers(
        vararg filter: Bson,
        sort: Bson
    ): Flow<User>

    suspend fun getByName(name: String): User?
}
