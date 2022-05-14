package com.viralvtubers.service

import com.viralvtubers.database.model.PurchaseItem
import com.viralvtubers.database.mongo.repositories.CartRepository
import com.viralvtubers.database.mongo.repositories.ProductRepository
import com.viralvtubers.database.mongo.repositories.PurchaseRepository
import com.viralvtubers.graphql.data.Cart
import com.viralvtubers.graphql.data.ID
import com.viralvtubers.graphql.data.Purchase
import com.viralvtubers.mapper.map
import kotlinx.coroutines.flow.toList
import java.util.*
import com.viralvtubers.database.model.Cart as CartModel

class CartServiceImpl(
    private val cartRepository: CartRepository,
    private val purchaseRepository: PurchaseRepository,
    private val productRepository: ProductRepository
) : CartService {
    override suspend fun getCarts(userId: ID): List<Cart> {
        val carts = cartRepository.getCartsByUserId(userId.map()).toList()
        val groups = carts.groupBy({ it.sellerId }, { it })
        val variants = carts.groupBy({ it.productId }, { it.variantId })

        return groups.map { (sellerId, carts) ->
            val products =
                productRepository.getByIds(carts.map { it.productId }).toList()

            val totalAmount = products.sumOf() { product ->
                val variant = variants[product._id]?.first()?.map()

                product.variants.find { it._id.map() == variant }?.price
                    ?: 0.0
            }
            Cart(
                sellerId = sellerId.map(),
                numItems = carts.size,
                items = carts.map { it.productId.map() },
                variants = carts.map { it.variantId.map() },
                totalAmount = totalAmount
            )
        }
    }

    override suspend fun getPurchases(userId: ID): List<Purchase> {
        return purchaseRepository.getPurchasesByUserId(userId.map())
            .toList()
            .map { it.map() }
    }

    override suspend fun getSales(userId: ID): List<Purchase> {
        return purchaseRepository.getSalesByUserId(userId.map())
            .toList()
            .map { it.map() }
    }

    override suspend fun addToCart(
        userId: ID,
        productId: ID,
        variantId: ID
    ): List<Cart> {
        val product =
            productRepository.getById(productId.map()) ?: throw error(
                "product not found"
            )
        cartRepository.add(
            CartModel(
                userId = userId.map(),
                sellerId = product.artistId,
                productId = productId.map(),
                variantId = variantId.map()
            )
        )
        return getCarts(userId)
    }

    override suspend fun removeFromCart(
        userId: ID,
        productId: ID,
        variantId: ID
    ): List<Cart> {
        cartRepository.removeFromCart(
            userId.map(),
            productId.map(),
            variantId.map()
        )
        return getCarts(userId)
    }

    override suspend fun emptyCart(userId: ID, sellerId: ID?): List<Cart> {
        if (sellerId == null) {
            cartRepository.emptyCart(userId.map())
            return getCarts(userId)
        }

        cartRepository.emptyCartSeller(userId.map(), sellerId.map())
        return getCarts(userId)
    }

    override suspend fun checkout(userId: ID, sellerId: ID?): List<Cart> {
        if (sellerId == null) {
            val carts = getCarts(userId)

            carts.forEach { cart ->
                val carts = cartRepository.getCartBySeller(
                    userId.map(),
                    cart.sellerId.map()
                )
                    .toList()
                val variants = carts.groupBy({ it.productId }, { it.variantId })
                val products =
                    productRepository.getByIds(carts.map { it.productId })
                        .toList()
                val totalAmount = products.sumOf() { product ->
                    val variant = variants[product._id]?.first()?.map()

                    product.variants.find { it._id.map() == variant }?.price
                        ?: 0.0
                }

                purchaseRepository.add(
                    com.viralvtubers.database.model.Purchase(
                        userId = userId.map(),
                        sellerId = cart.sellerId.map(),
                        products = cart.items.mapIndexed { index, productId ->
                            PurchaseItem(
                                productId = productId.map(),
                                variantId = cart.variants[index].map()
                            )
                        },
                        totalAmount = totalAmount,
                        createdDate = Date(),
                    )
                )
            }

            cartRepository.emptyCart(userId.map())
            return getCarts(userId)
        }

        val carts = cartRepository.getCartBySeller(userId.map(), sellerId.map())
            .toList()
        val variants = carts.groupBy({ it.productId }, { it.variantId })

        val products =
            productRepository.getByIds(carts.map { it.productId }).toList()

        val totalAmount = products.sumOf() { product ->
            val variant = variants[product._id]?.first()?.map()

            product.variants.find { it._id.map() == variant }?.price
                ?: 0.0
        }

        purchaseRepository.add(
            com.viralvtubers.database.model.Purchase(
                userId = userId.map(),
                sellerId = sellerId.map(),
                products = carts.map {
                    PurchaseItem(
                        productId = it.productId,
                        variantId = it.variantId
                    )
                },
                totalAmount = totalAmount,
                createdDate = Date(),
            )
        )

        cartRepository.emptyCartSeller(userId.map(), sellerId.map())
        return getCarts(userId)
    }

    override suspend fun checkIsPurchased(
        userId: ID,
        productId: ID,
        variantId: ID
    ): Boolean {
        return purchaseRepository.getPurchasesByUserId(userId.map())
            .toList()
            .find { purchase ->
                purchase.products.find { it.productId.map() == productId && it.variantId.map() == variantId } != null
            } != null
    }

    override suspend fun checkIsCart(
        userId: ID,
        productId: ID,
        variantId: ID
    ): Boolean {
        return cartRepository.getCartsByUserId(userId.map())
            .toList()
            .find {
                it.productId.map() == productId && it.variantId.map() == variantId
            } != null
    }
}
