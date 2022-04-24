package com.viralvtubers.graphql.data

data class Category(
    val id: ID,
    val name: String,
//  val subcategory: List<Subcategory>,
//  val products: List<Product>
)

data class Subcategory(
    val id: ID,
//  val category: Category,
    val name: String,
//  val products: List<Product>
)
