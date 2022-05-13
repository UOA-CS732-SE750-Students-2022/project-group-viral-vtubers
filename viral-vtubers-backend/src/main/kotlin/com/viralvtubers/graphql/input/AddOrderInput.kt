package com.viralvtubers.graphql.input

import com.viralvtubers.graphql.data.ID

data class AddOrderInput(
    val id: ID,
    val subcategoryId: ID,
    val name: String,
    val description: String,
    val bounty: Double,
    val isDraft: Boolean,
    val tagIds: List<String>,
    val image: String,
)

