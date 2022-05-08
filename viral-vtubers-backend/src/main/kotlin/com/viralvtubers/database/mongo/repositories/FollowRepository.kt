package com.viralvtubers.database.mongo.repositories

import com.viralvtubers.database.model.Follow
import com.viralvtubers.database.model.User
import kotlinx.coroutines.flow.Flow
import org.litote.kmongo.Id

interface FollowRepository : Repository<Follow> {
    fun getFollowing(id: Id<User>): Flow<Follow>

    fun getFollowers(id: Id<User>): Flow<Follow>

    suspend fun getFollow(id: Id<User>, followId: Id<User>): Follow?

    suspend fun addFollow(id: Id<User>, followId: Id<User>): Follow?

    suspend fun deleteFollow(id: Id<User>, followId: Id<User>): Follow?
}
