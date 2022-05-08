package com.viralvtubers.service

import com.viralvtubers.graphql.data.*
import com.viralvtubers.graphql.input.*
import org.koin.core.component.KoinComponent


interface UserService : KoinComponent {
    suspend fun getUserByFirebaseUid(uid: String): User

    suspend fun getUserId(userId: ID): User

    suspend fun getUserIds(userIds: List<ID>): List<User>

    suspend fun getUsers(
        currentUserId: ID,
        filter: UserFilter?,
        sort: UserSort?,
        cursor: String?,
        limit: Int?
    ): UserPagination

    suspend fun addUser(input: AddUserInput): User

    suspend fun editUser(input: EditUserInput): User

    suspend fun editSelf(userId: ID, input: EditSelfInput): User

    suspend fun addService(userId: ID, input: AddServiceInput): User

    suspend fun editService(userId: ID, input: EditServiceInput): User

    suspend fun deleteService(userId: ID, serviceId: ID): User

    suspend fun isFollowing(userId: ID, followId: ID): Boolean

    suspend fun getFollowing(userId: ID): List<User>

    suspend fun getFollowers(userId: ID): List<User>

    suspend fun follow(userId: ID, followId: ID, follow: Boolean): Boolean
}
