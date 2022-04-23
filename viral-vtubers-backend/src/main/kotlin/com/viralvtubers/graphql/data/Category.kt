package com.viralvtubers.graphql.data

data class Category(
  val id: String, 
  val name: String, 
  val subCategories: List<SubCategory>,
  val products: List<Product>
)

data class SubCategory(
  val id: String, 
  val parent: Category,
  val name: String, 
  val products: List<Product>
)
