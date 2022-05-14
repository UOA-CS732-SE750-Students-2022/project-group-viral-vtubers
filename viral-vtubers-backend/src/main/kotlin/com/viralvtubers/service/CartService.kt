package com.viralvtubers.service

import com.viralvtubers.graphql.data.Cart
import com.viralvtubers.graphql.data.ID
import com.viralvtubers.graphql.data.Purchase

interface CartService {
    suspend fun getCarts(userId: ID): List<Cart>

    suspend fun getPurchases(userId: ID): List<Purchase>

    suspend fun getSales(userId: ID): List<Purchase>

    suspend fun addToCart(userId: ID, productId: ID, variantId: ID): List<Cart>

    suspend fun removeFromCart(
        userId: ID,
        productId: ID,
        variantId: ID
    ): List<Cart>

    suspend fun emptyCart(userId: ID, serviceId: ID?): List<Cart>

    suspend fun checkout(userId: ID, serviceId: ID?): List<Cart>

    suspend fun checkIsPurchased(
        userId: ID,
        productId: ID,
        variantId: ID
    ): Boolean

    suspend fun checkIsCart(userId: ID, productId: ID, variantId: ID): Boolean
}
