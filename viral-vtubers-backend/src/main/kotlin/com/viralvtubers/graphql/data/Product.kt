package com.viralvtubers.graphql.data

data class Product(
    val id: ID,
    val name: String,
    val shortDescription: String,
//  val subCategory: SubCategory,
//  val images: List<String>,
    val vrm: String,
//  val files: List<String>,
    val price: Double,
)

data class ProductPagination(
    val edges: ProductEdges,
    val pageInfo: PageInfo,
)

data class ProductEdges(
    val cursor: String,
    val node: List<Product>,
)
