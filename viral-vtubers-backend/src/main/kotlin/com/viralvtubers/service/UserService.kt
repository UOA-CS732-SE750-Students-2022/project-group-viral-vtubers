package com.viralvtubers.service

import com.viralvtubers.graphql.data.ID
import com.viralvtubers.graphql.data.User
import com.viralvtubers.graphql.input.AddUserInput
import com.viralvtubers.graphql.input.EditSelfInput
import com.viralvtubers.graphql.input.EditUserInput
import org.koin.core.component.KoinComponent


interface UserService : KoinComponent {
    suspend fun getUserByFirebaseUid(uid: String): User

    suspend fun getUserId(userId: ID): User

    suspend fun getUserIds(userIds: List<ID>): List<User>

    suspend fun getAllUsers(): List<User>

    suspend fun addUser(input: AddUserInput): User

    suspend fun editUser(input: EditUserInput): User

    suspend fun editSelf(input: EditSelfInput): User
}
