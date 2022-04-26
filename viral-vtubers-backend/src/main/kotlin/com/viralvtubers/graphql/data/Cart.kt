package com.viralvtubers.graphql.data

import java.util.*

data class Carts(
    val numItems: Int,
    val carts: List<Cart>,
)

data class Cart(
//  val seller: User,
//  val items: List<Product>,
    val numItems: Int,
    val totalAmount: Double,
)

data class Purchase(
//  val seller: User,
//  val items: List<Product>,
    val numItems: Int,
    val totalAmount: Double,
    val placed: Date,
)
