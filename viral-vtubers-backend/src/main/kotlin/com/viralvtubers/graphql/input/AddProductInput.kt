package com.viralvtubers.graphql.input

import com.viralvtubers.graphql.data.ID

data class AddProductInput(
    val name: String,
    val artist: ID,
    val description: String,
    val subcategoryId: ID,
    val titleImage: String,
    val images: List<String>,
    val vrm: String,
    val numLikes: Int,
    val tags: List<ID>,
)

data class AddProductVariant(
    val productId: ID,
    val name: String,
    val price: Double,
    val file: String,
)
