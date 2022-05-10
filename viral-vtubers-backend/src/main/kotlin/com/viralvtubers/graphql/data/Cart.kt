package com.viralvtubers.graphql.data

import java.util.*

data class Cart(
//  val seller: User,
//  val items: List<Product>,
    val numItems: Int,
    val totalAmount: Double,

//  ignored fields
    val sellerId: ID,
    val items: List<ID>,
    val variants: List<ID>,
)

data class Purchase(
    val id: ID,
//  val seller: User,
//  val items: List<Product>,
    val numItems: Int,
    val totalAmount: Double,
    val placed: Date,

//  ignored fields
    val sellerId: ID,
    val items: List<ID>,
    val variants: List<ID>
)
