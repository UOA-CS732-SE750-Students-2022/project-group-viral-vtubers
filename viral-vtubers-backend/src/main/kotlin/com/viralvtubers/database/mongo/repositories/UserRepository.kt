package com.viralvtubers.database.mongo.repositories

import com.viralvtubers.database.model.User

interface UserRepository : Repository<User> {
    suspend fun getByFirebaseUid(uid: String): User?
}
