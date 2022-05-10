package com.viralvtubers.database.mongo.repositories

import com.viralvtubers.database.model.Like
import com.viralvtubers.database.model.Product
import com.viralvtubers.database.model.User
import com.viralvtubers.database.mongo.MongoDatabase
import kotlinx.coroutines.flow.Flow
import org.litote.kmongo.Id
import org.litote.kmongo.coroutine.CoroutineCollection
import org.litote.kmongo.descending
import org.litote.kmongo.eq

fun MongoDatabase.asLikeRepository(): LikeRepository =
    object : LikeRepository {
        override val col: CoroutineCollection<Like> = database.getCollection()

        override fun findByUser(userId: Id<User>): Flow<Like> {
            return col.find(Like::currentId eq userId)
                .sort(descending(Like::createdDate)).toFlow()
        }

        override fun findByProduct(productId: Id<Product>): Flow<Like> {
            return col.find(Like::productId eq productId)
                .sort(descending(Like::createdDate)).toFlow()
        }

        override fun findByArtist(artistId: Id<User>): Flow<Like> {
            return col.find(Like::artistId eq artistId)
                .sort(descending(Like::createdDate)).toFlow()
        }

        override suspend fun findByUserAndProduct(
            userId: Id<User>,
            productId: Id<Product>
        ): Like? {
            return col.findOne(
                Like::currentId eq userId,
                Like::productId eq productId
            )
        }
    }

