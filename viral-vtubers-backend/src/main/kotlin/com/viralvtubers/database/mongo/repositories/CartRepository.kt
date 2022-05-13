package com.viralvtubers.database.mongo.repositories

import com.viralvtubers.database.model.Cart
import com.viralvtubers.database.model.Product
import com.viralvtubers.database.model.ProductVariant
import com.viralvtubers.database.model.User
import kotlinx.coroutines.flow.Flow
import org.litote.kmongo.Id

interface CartRepository : Repository<Cart> {
    fun getCartsByUserId(userId: Id<User>): Flow<Cart>

    fun getCartBySeller(userId: Id<User>, sellerId: Id<User>): Flow<Cart>

    suspend fun removeFromCart(
        userId: Id<User>,
        productId: Id<Product>,
        variantId: Id<ProductVariant>
    )

    suspend fun emptyCart(userId: Id<User>)

    suspend fun emptyCartSeller(userId: Id<User>, sellerId: Id<User>)

    suspend fun getCount(userId: Id<User>): Int
}
