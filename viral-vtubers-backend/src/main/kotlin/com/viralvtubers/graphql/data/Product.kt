package com.viralvtubers.graphql.data

data class Product(
    val id: ID,
    val name: String,
    val shortDescription: String,
//  val subcategory: Subcategory,
    val titleImage: String,
//  val images: List<String>,
    val vrm: String,
//  val files: List<String>,
    val price: Double,
    val numLikes: Int,
)

data class ProductPagination(
    val edges: ProductEdges,
    val pageInfo: PageInfo,
)

data class ProductEdges(
    val cursor: String,
    val node: List<Product>,
)

enum class AgeRestrictionEnum {
    SFW_ONLY, ALL, NSFW_ONLY
}

enum class OtherFiltersEnum {
    ANIME,
}

data class ProductFilter(
    val search: String?,
    val ageRestriction: AgeRestrictionEnum?,
    val other: OtherFiltersEnum?,
    val minPrice: Double?,
    val maxPrice: Double?
)
