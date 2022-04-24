package com.viralvtubers.graphql.data

import java.util.*

data class Carts(
    val totalItemCount: Int,
    val carts: List<Cart>,
)

data class Cart(
//  val seller: User,
//  val items: List<Product>,
    val totalItemCount: Int,
    val totalAmount: Double,
)

data class Purchase(
//  val seller: User,
//  val items: List<Product>,
    val totalItemCount: Int,
    val totalAmount: Double,
    val placed: Date,
)
