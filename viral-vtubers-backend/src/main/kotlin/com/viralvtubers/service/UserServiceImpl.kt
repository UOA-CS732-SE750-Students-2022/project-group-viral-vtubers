package com.viralvtubers.service

import com.viralvtubers.database.mongo.repositories.UserRepository
import com.viralvtubers.graphql.data.ID
import com.viralvtubers.graphql.data.User

class UserServiceImpl(
    private val userRepository: UserRepository,
) : UserService {
    override suspend fun getUserId(userId: ID): User {
        TODO("Not yet implemented")
    }

    override suspend fun getUserIds(userIds: List<ID>): List<User> {
        TODO("Not yet implemented")
    }

    override suspend fun getAllUsers(): List<User> {
        TODO("Not yet implemented")
    }
}
