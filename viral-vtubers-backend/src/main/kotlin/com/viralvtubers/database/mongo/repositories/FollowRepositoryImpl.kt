package com.viralvtubers.database.mongo.repositories

import com.viralvtubers.database.model.Follow
import com.viralvtubers.database.model.User
import com.viralvtubers.database.mongo.MongoDatabase
import kotlinx.coroutines.flow.Flow
import org.litote.kmongo.Id
import org.litote.kmongo.and
import org.litote.kmongo.coroutine.CoroutineCollection
import org.litote.kmongo.eq

fun MongoDatabase.asFollowRepository(): FollowRepository =
    object : FollowRepository {
        override val col: CoroutineCollection<Follow> =
            database.getCollection()

        override fun getFollowing(id: Id<User>): Flow<Follow> {
            return col.find(Follow::currentId eq id).toFlow()
        }

        override fun getFollowers(id: Id<User>): Flow<Follow> {
            return col.find(Follow::followingId eq id).toFlow()
        }

        override suspend fun addFollow(
            id: Id<User>,
            followId: Id<User>
        ): Follow {
            getFollow(id, followId)?.let { return it }

            col.save(
                Follow(
                    currentId = id,
                    followingId = followId,
                )
            )
            return getFollow(id, followId) ?: throw error("follow not found")
        }

        override suspend fun getFollow(
            id: Id<User>,
            followId: Id<User>
        ): Follow? {
            return col.findOne(
                and(
                    Follow::currentId eq id,
                    Follow::followingId eq followId
                )
            )
        }

        override suspend fun deleteFollow(
            id: Id<User>,
            followId: Id<User>
        ): Follow? {
            return col.findOneAndDelete(
                and(
                    Follow::currentId eq id,
                    Follow::followingId eq followId
                )
            )
        }
    }
