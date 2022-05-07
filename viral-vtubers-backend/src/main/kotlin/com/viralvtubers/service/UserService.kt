package com.viralvtubers.service

import com.viralvtubers.graphql.data.ID
import com.viralvtubers.graphql.data.User
import org.koin.core.component.KoinComponent


interface UserService : KoinComponent {
    suspend fun getUserId(userId: ID): User

    suspend fun getUserIds(userIds: List<ID>): List<User>

    suspend fun getAllUsers(): List<User>
}
