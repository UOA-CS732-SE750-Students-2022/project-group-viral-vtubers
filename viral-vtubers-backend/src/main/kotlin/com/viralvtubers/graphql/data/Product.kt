package com.viralvtubers.graphql.data

data class Product(
  val id: String, 
  val name: String, 
  val shortDescription: String, 
//  val subCategory: SubCategory,
//  val images: List<String>,
  val vrm: String,
//  val files: List<String>,
  val price: Double,
)
