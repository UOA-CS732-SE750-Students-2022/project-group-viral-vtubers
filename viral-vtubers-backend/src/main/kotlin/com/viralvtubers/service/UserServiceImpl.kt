package com.viralvtubers.service

import com.viralvtubers.database.mongo.repositories.*
import com.viralvtubers.graphql.data.*
import com.viralvtubers.graphql.input.*
import com.viralvtubers.mapper.map
import kotlinx.coroutines.flow.*
import org.bson.conversions.Bson
import org.litote.kmongo.*
import com.viralvtubers.database.model.Service as DataService
import com.viralvtubers.database.model.User as DataUser

class UserServiceImpl(
    private val userRepository: UserRepository,
    private val followRepository: FollowRepository,
    private val mailRepository: MailRepository,
    private val cartRepository: CartRepository
) : UserService {

    override suspend fun getUserByFirebaseUid(uid: String): User {
        return userRepository.getByFirebaseUid(uid)?.map()
            ?: throw error("user not found")
    }

    override suspend fun getUserId(userId: ID): User {
        return userRepository.getById(userId.map())?.map()
            ?: throw error("user not found")
    }

    override suspend fun getUserByName(name: String): User {
        return userRepository.getByName(name)?.map()
            ?: throw error("user not found")
    }

    override suspend fun getUserIds(userIds: List<ID>): List<User> {
        return userRepository.getByIds(userIds.map { it.map() })
            .map { it.map() }.toList()
    }

    override suspend fun getUsers(
        currentUserId: ID,
        filter: UserFilter?,
        sort: UserSort?,
        cursor: String?,
        limit: Int?
    ): UserPagination {
        val filterBson = getFilterBson(currentUserId.map(), filter)
        val sortBson = getSortBson(sort)

        var userFlow = userRepository.getUsers(
            *filterBson.toTypedArray(),
            sort = sortBson,
        ).withIndex()

        if (cursor != null) {
            val before =
                userFlow.takeWhile { it.value._id.toString() != cursor }

            val last = before.last()

            userFlow = userFlow.dropWhile { it.index <= last.index }
        }

        val users = userFlow.take(limit ?: 25).map { it.value }.toList()

        return Page(
            start = users.firstOrNull()?._id,
            end = users.lastOrNull()?._id,
            items = users,
            hasNext = users.size == (limit ?: 25),
        ).map()

    }

    private fun getSortBson(sort: UserSort?): Bson {
        sort ?: return descending(DataUser::displayName)

        sort.name?.let {
            return if (it == SortEnum.ASC) ascending(DataUser::displayName)
            else descending(DataUser::displayName)
        }

        sort.numCompletedCommissions?.let {
            return if (it == SortEnum.ASC) ascending(DataUser::numCompletedCommissions)
            else descending(DataUser::numCompletedCommissions)
        }

        sort.numLikes?.let {
            return if (it == SortEnum.ASC) ascending(DataUser::numLikes)
            else descending(DataUser::numLikes)
        }

        return descending(DataUser::displayName)
    }

    private fun getFilterBson(
        userId: Id<DataUser>,
        filter: UserFilter?
    ): List<Bson> {
        filter ?: return java.util.ArrayList()

        val filterBson = java.util.ArrayList<Bson>()
        filterBson.add(DataUser::_id ne userId) // remove self

        filter.search?.let {
            filterBson.add(
                DataUser::displayName regex Regex(
                    ".*$it.*",
                    RegexOption.IGNORE_CASE
                )
            )
        }

        return filterBson
    }

    override suspend fun addUser(input: AddUserInput): User {
        val user = DataUser(
            _id = newId(),
            firebaseUid = input.firebaseUid,
            displayName = input.displayName,
            email = input.email,
            bio = input.bio,
            numCompletedCommissions = input.numCompletedCommissions,
            status = input.status,
            profileImageURI = input.profileImageURI,
            tags = input.tags.map { it.map() },
            services = ArrayList(),
            numLikes = 0
        )
        userRepository.add(user)
        return userRepository.getById(user._id)
            ?.map() ?: throw error("user cannot be added")
    }

    override suspend fun editUser(input: EditUserInput): User {
        val user = userRepository.getById(input.id.map())
            ?: throw error("user not found")
        val update = DataUser(
            _id = user._id,
            firebaseUid = user.firebaseUid,
            displayName = input.displayName ?: user.displayName,
            email = user.email,
            bio = input.bio ?: user.bio,
            numCompletedCommissions = input.numCompletedCommissions
                ?: user.numCompletedCommissions,
            status = input.status ?: user.status,
            profileImageURI = input.profileImageURI ?: user.profileImageURI,
            tags = input.tags?.map { it.map() }
                ?: user.tags,
            services = user.services,
            numLikes = user.numLikes
        )
        return userRepository.update(update)?.map()
            ?: throw error("user not found")
    }

    override suspend fun editSelf(userId: ID, input: EditSelfInput): User {
        val user = userRepository.getById(userId.map())
            ?: throw error("self not found")
        val update = user.copy(
            displayName = input.displayName ?: user.displayName,
            bio = input.bio ?: user.bio,
            status = input.status ?: user.status,
            profileImageURI = input.profileImageURI ?: user.profileImageURI,
        )
        return userRepository.update(update)?.map()
            ?: throw error("self not found")
    }

    override suspend fun addService(
        userId: ID,
        input: AddServiceInput
    ): User {
        val user = userRepository.getById(userId.map())
            ?: throw error("self not found")

        val services = ArrayList(user.services)
        services.add(
            DataService(
                name = input.name,
                priceValue = input.price,
                pricePerUnit = input.priceType.map(),
                description = input.description
            )
        )

        val update = user.copy(services = services)
        return userRepository.update(update)?.map()
            ?: throw error("self not found")
    }

    override suspend fun editService(
        userId: ID,
        input: EditServiceInput
    ): User {
        val user = userRepository.getById(userId.map())
            ?: throw error("self not found")

        val services = ArrayList(user.services)
        val index = services.indexOfFirst { it._id.map() == input.id }
        val service = services[index]

        val updatedService = service.copy(
            name = input.name ?: service.name,
            priceValue = input.price ?: service.priceValue,
            pricePerUnit = input.priceType?.map() ?: service.pricePerUnit,
            description = input.description ?: service.description
        )

        services[index] = updatedService

        val update = user.copy(services = services)
        return userRepository.update(update)?.map()
            ?: throw error("self not found")
    }

    override suspend fun deleteService(userId: ID, serviceId: ID): User {
        val user = userRepository.getById(userId.map())
            ?: throw error("self not found")

        val services = ArrayList(user.services)
        val index = services.indexOfFirst { it._id.map() == serviceId }
        services.removeAt(index)

        val update = user.copy(services = services)
        return userRepository.update(update)?.map()
            ?: throw error("self not found")

    }

    override suspend fun isFollowing(userId: ID, followId: ID): Boolean {
        followRepository.getFollow(userId.map(), followId.map())?.let {
            return true
        }
        return false
    }

    override suspend fun getFollowing(userId: ID): List<User> {
        val userIds = followRepository.getFollowing(userId.map()).toList()
            .map { it.followingId }

        return userRepository.getByIds(userIds).toList().map { it.map() }
    }

    override suspend fun getFollowers(userId: ID): List<User> {
        val userIds = followRepository.getFollowers(userId.map()).toList()
            .map { it.currentId }

        return userRepository.getByIds(userIds).toList().map { it.map() }
    }

    override suspend fun follow(
        userId: ID,
        followId: ID,
        follow: Boolean
    ): User {
        if (follow) {
            followRepository.addFollow(userId.map(), followId.map())
        } else {
            followRepository.deleteFollow(userId.map(), followId.map())
        }
        return userRepository.getById(followId.map())?.map()
            ?: throw error("user not found")
    }

    override suspend fun getNotification(userId: ID): Notification {
        return Notification(
            numCart = cartRepository.getCount(userId.map()),
            numMail = mailRepository.getCount(userId.map()),
        )
    }
}
