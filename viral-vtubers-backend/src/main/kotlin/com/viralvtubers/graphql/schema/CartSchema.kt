package com.viralvtubers.graphql.schema

import com.apurebase.kgraphql.schema.dsl.SchemaBuilder
import com.viralvtubers.graphql.data.*
import com.viralvtubers.graphql.stubCarts
import com.viralvtubers.graphql.stubProduct
import com.viralvtubers.graphql.stubPurchase
import com.viralvtubers.graphql.stubUser

fun SchemaBuilder.cartSchema() {
    type<Cart> {
        description = "Cart"

        property<User>("seller") {
            resolver { cart ->
                description = "Get Seller details of a Cart"
                stubUser("fake_seller")
            }
        }


        property<List<Product>>("items") {
            resolver { cart ->
                description = "Get the itesms in a cart"
                listOf(
                    stubProduct("fake_product_0"),
                    stubProduct("fake_product_1")
                )
            }
        }
    }

    type<Purchase> {
        description = "Purchase"

        property<User>("seller") {
            resolver { purchase ->
                description = "Get Seller details of a Cart"
                stubUser("fake_seller")
            }
        }


        property<List<Product>>("items") {
            resolver { purchase ->
                description = "Get the items in a cart"
                listOf(
                    stubProduct("fake_product_0"),
                    stubProduct("fake_product_1")
                )
            }
        }
    }

    query("carts") {
        description = "Get current Carts"
        resolver { ->
            stubCarts()
        }
    }

    query("purchases") {
        description = "Get past Purchases"
        resolver { ->
            listOf(stubPurchase(), stubPurchase())
        }
    }

    mutation("addToCart") {
        description = "Add item to Cart"
        resolver { id: ID ->
            stubCarts()
        }
    }

    mutation("removeFromCart") {
        description = "Remove item from Cart"
        resolver { id: ID ->
            stubCarts()
        }
    }

    mutation("emptyCart") {
        description = "Empty items from Cart"
        resolver { ->
            Carts(
                0,
                listOf()
            )
        }
    }

    mutation("checkout") {
        description = "Checkout item to Cart"
        resolver { ->
            stubPurchase()
        }
    }
}
