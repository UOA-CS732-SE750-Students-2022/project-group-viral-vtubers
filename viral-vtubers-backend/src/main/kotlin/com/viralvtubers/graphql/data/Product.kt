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
    val numLikes: Int,
    val variants: List<ProductVariant>,
    val minPrice: Double,

//  ignored fields
    val subcategoryId: ID,
    val artistId: ID,
    val tags: List<ID>
)

data class ProductVariant(
    val id: ID,
//  val product: Product,
    val name: String,
    val price: Double,
    val file: String,
    val fileTypes: List<String>,

//  ignored fields
    val productId: ID,
)

data class ProductPagination(
    val edges: List<ProductEdge>,
    val pageInfo: PageInfo,
)

data class ProductEdge(
    val cursor: String,
    val node: Product,
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

data class ProductSort(
    val name: SortEnum?,
    val createdDate: SortEnum?,
    val price: SortEnum?,
)

