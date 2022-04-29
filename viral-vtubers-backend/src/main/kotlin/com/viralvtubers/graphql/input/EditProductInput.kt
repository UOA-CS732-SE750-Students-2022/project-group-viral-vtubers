package com.viralvtubers.graphql.input

import com.viralvtubers.graphql.data.ID

data class EditProductInput(
    val id: ID,
    val name: String?,
    val shortDescription: String?,
    val subcategoryId: ID?,
    val titleImage: String?,
    val images: List<String>?,
    val vrm: String?,
    val files: List<String>?,
    val price: Double?,
    val numLikes: Int?,
)

