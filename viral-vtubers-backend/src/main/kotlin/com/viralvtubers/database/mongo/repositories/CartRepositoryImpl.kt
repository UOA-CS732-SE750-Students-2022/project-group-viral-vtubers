package com.viralvtubers.database.mongo.repositories

import com.viralvtubers.database.model.Cart
import com.viralvtubers.database.model.Product
import com.viralvtubers.database.model.ProductVariant
import com.viralvtubers.database.model.User
import com.viralvtubers.database.mongo.MongoDatabase
import kotlinx.coroutines.flow.Flow
import org.litote.kmongo.Id
import org.litote.kmongo.coroutine.CoroutineCollection
import org.litote.kmongo.eq

fun MongoDatabase.asCartRepository(): CartRepository = object : CartRepository {
    override val col: CoroutineCollection<Cart> = database.getCollection()

    override fun getCartsByUserId(userId: Id<User>): Flow<Cart> {
        return col.find(Cart::userId eq userId).toFlow()
    }

    override fun getCartBySeller(
        userId: Id<User>,
        sellerId: Id<User>
    ): Flow<Cart> {
        return col.find(Cart::userId eq userId, Cart::sellerId eq sellerId)
            .toFlow()
    }

    override suspend fun removeFromCart(
        userId: Id<User>,
        productId: Id<Product>,
        variantId: Id<ProductVariant>
    ) {
        col.deleteOne(
            Cart::userId eq userId,
            Cart::productId eq productId,
            Cart::variantId eq variantId
        )
    }

    override suspend fun emptyCart(userId: Id<User>) {
        col.deleteMany(Cart::userId eq userId)
    }

    override suspend fun emptyCartSeller(userId: Id<User>, sellerId: Id<User>) {
        col.deleteMany(Cart::userId eq userId, Cart::sellerId eq sellerId)
    }

    override suspend fun getCount(userId: Id<User>): Int {
        return col.countDocuments(Cart::userId eq userId).toInt()
    }
}

