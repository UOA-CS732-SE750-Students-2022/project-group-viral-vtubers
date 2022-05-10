package com.viralvtubers.database.mongo.repositories

import com.viralvtubers.database.model.Like
import com.viralvtubers.database.model.Product
import com.viralvtubers.database.model.User
import kotlinx.coroutines.flow.Flow
import org.litote.kmongo.Id

interface LikeRepository : Repository<Like> {
    fun findByUser(userId: Id<User>): Flow<Like>

    fun findByProduct(productId: Id<Product>): Flow<Like>

    fun findByArtist(artistId: Id<User>): Flow<Like>

    suspend fun findByUserAndProduct(
        userId: Id<User>,
        productId: Id<Product>
    ): Like?
}
