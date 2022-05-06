package com.viralvtubers.graphql.input

import com.viralvtubers.graphql.data.ID

data class AddProductInput(
    val name: String,
    val artist: ID,
    val shortDescription: String,
    val subcategoryId: ID,
    val titleImage: String,
    val images: List<String>,
    val vrm: String,
    val numLikes: Int,
    val variants: List<AddProductVariant>,
    val tags: List<ID>,
)

data class AddProductVariant(
    val name: String,
    val price: Double,
    val filename: String,
    val files: List<String>,
)
