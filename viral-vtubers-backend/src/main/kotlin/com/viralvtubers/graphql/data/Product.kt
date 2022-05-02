package com.viralvtubers.graphql.data

data class Product(
    val id: ID,
    val name: String,
    val description: String,
//  val subcategory: Subcategory,
    val titleImage: String,
    val images: List<String>,
    val vrm: String,
//  val artist: User,
    val numLikes: UInt,
    val variants: List<ProductVariant>,
)

data class ProductVariant(
    val id: ID,
//    val productId: Product,
    val name: String,
    val price: Double,
    val fileName: String,
    val files: List<String>,
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
