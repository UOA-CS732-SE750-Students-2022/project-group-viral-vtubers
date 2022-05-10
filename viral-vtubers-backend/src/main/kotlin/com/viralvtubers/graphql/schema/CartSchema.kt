package com.viralvtubers.graphql.schema

import com.apurebase.kgraphql.Context
import com.apurebase.kgraphql.schema.dsl.SchemaBuilder
import com.viralvtubers.graphql.data.*
import com.viralvtubers.service.AuthService
import com.viralvtubers.service.CartService
import com.viralvtubers.service.ProductService
import com.viralvtubers.service.UserService

fun SchemaBuilder.cartSchema(
    userService: UserService,
    cartService: CartService,
    authService: AuthService,
    productService: ProductService
) {
    type<Cart> {
        description = "Cart"

        Cart::sellerId.ignore()
        Cart::items.ignore()
        Cart::variants.ignore()

        property<User>("seller") {
            resolver { cart ->
                description = "Get Seller details of a Cart"
                userService.getUserId(cart.sellerId)
            }
        }


        property<List<ProductVariant>>("items") {
            resolver { cart ->
                description = "Get the items in a cart"
                cart.items.mapIndexed { index, item ->
                    productService.getProductVariant(
                        item,
                        cart.variants[index]
                    )
                }
            }
        }
    }
    type<Purchase> {
        description = "Purchase"

        property<User>("seller") {
            resolver { purchase ->
                description = "Get Seller details of a Cart"
                userService.getUserId(purchase.sellerId)
            }
        }


        property<List<ProductVariant>>("items") {
            resolver { purchase ->
                description = "Get the items in a cart"
                purchase.items.mapIndexed { index, item ->
                    productService.getProductVariant(
                        item,
                        purchase.variants[index]
                    )
                }
            }
        }
    }

    query("carts") {
        description = "Get current Carts"
        resolver { ctx: Context ->
            val userId = authService.getUserId(ctx)
            cartService.getCarts(userId)
        }
    }

    query("purchases") {
        description = "Get past Purchases"
        resolver { ctx: Context ->
            val userId = authService.getUserId(ctx)
            cartService.getPurchases(userId)
        }
    }

    mutation("addToCart") {
        description = "Add item to Cart"
        resolver { ctx: Context, productId: ID, variantId: ID ->
            val userId = authService.getUserId(ctx)
            cartService.addToCart(userId, productId, variantId)
        }
    }

    mutation("removeFromCart") {
        description = "Remove item from Cart"
        resolver { ctx: Context, productId: ID, variantId: ID ->
            val userId = authService.getUserId(ctx)
            cartService.removeFromCart(userId, productId, variantId)
        }
    }

    mutation("emptyCart") {
        description = "Empty items from Cart"
        resolver { ctx: Context, sellerId: ID? ->
            val userId = authService.getUserId(ctx)
            cartService.emptyCart(userId, sellerId)
        }
    }

    mutation("checkout") {
        description = "Checkout item to Cart"
        resolver { ctx: Context, sellerId: ID? ->
            val userId = authService.getUserId(ctx)
            cartService.checkout(userId, sellerId)
        }
    }
}
