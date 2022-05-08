package com.viralvtubers.service

import com.viralvtubers.database.mongo.repositories.UserRepository
import com.viralvtubers.graphql.data.ID
import com.viralvtubers.graphql.data.User
import com.viralvtubers.graphql.input.AddUserInput
import com.viralvtubers.graphql.input.EditSelfInput
import com.viralvtubers.graphql.input.EditUserInput
import com.viralvtubers.mapper.map
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.toList
import org.litote.kmongo.newId
import com.viralvtubers.database.model.User as DataUser

class UserServiceImpl(
    private val userRepository: UserRepository,
) : UserService {

    override suspend fun getUserByFirebaseUid(uid: String): User {
        return userRepository.getByFirebaseUid(uid)?.map()
            ?: throw error("user not found")
    }

    override suspend fun getUserId(userId: ID): User {
        return userRepository.getById(userId.map())?.map()
            ?: throw error("user not found")
    }

    override suspend fun getUserIds(userIds: List<ID>): List<User> {
        return userRepository.getByIds(userIds.map { it.map() })
            .map { it.map() }.toList()
    }

    override suspend fun getAllUsers(): List<User> {
        return userRepository.getAll().map { it.map() }.toList()
    }

    override suspend fun addUser(input: AddUserInput): User {
        val user = DataUser(
            _id = newId(),
            firebaseUid = input.firebaseUid,
            displayName = input.displayName,
            email = input.email,
            bio = input.bio,
            numCompletedCommissions = input.numCompletedCommissions,
            numLikes = input.numLikes,
            status = input.status,
            profileImageURI = input.profileImageURI,
            specialises = input.specialises.map { it.map() },
            services = ArrayList()
        )
        userRepository.add(user)
        return userRepository.getById(user._id)
            ?.map() ?: throw error("user cannot be added")
    }

    override suspend fun editUser(input: EditUserInput): User {
        val user = userRepository.getById(input.id.map())
            ?: throw error("user not found")
        val update = DataUser(
            _id = newId(),
            firebaseUid = user.firebaseUid,
            displayName = input.displayName ?: user.displayName,
            email = user.email,
            bio = input.bio ?: user.bio,
            numCompletedCommissions = input.numCompletedCommissions
                ?: user.numCompletedCommissions,
            numLikes = input.numLikes ?: user.numLikes,
            status = input.status ?: user.status,
            profileImageURI = input.status ?: user.status,
            specialises = input.specialises?.map { it.map() }
                ?: user.specialises,
            services = user.services
        )
        userRepository.add(user)
        return userRepository.update(update)?.map()
            ?: throw error("user not found")
    }

    override suspend fun editSelf(input: EditSelfInput): User {
        TODO("Not yet implemented")
    }
}
