package com.viralvtubers.graphql.input

import com.viralvtubers.graphql.data.ID

data class EditProductInput(
    val id: ID,
    val name: String?,
    val description: String?,
    val subcategoryId: ID?,
    val titleImage: String?,
    val images: List<String>?,
    val vrm: String?,
    val numLikes: Int?,
    val tags: List<ID>?,
    val variants: List<EditProductVariant>?,
)

data class EditProductVariant(
    val id: ID?,
    val name: String?,
    val price: Double?,
    val files: List<String>?,
)

