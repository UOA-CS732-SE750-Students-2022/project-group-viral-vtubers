package com.viralvtubers.graphql.input

import com.viralvtubers.graphql.data.ID

data class AddProductInput(
    val id: ID,
    val name: String,
    val shortDescription: String,
    val subcategoryId: ID,
    val titleImage: String,
    val images: List<String>,
    val vrm: String,
    val files: List<String>,
    val price: Double,
    val numLikes: Int,
    val variants: List<AddProductVariant>,
)

data class AddProductVariant(
    val id: ID,
    val name: String,
    val price: Double,
    val files: List<String>,
)
