package com.viralvtubers.graphql.input

import com.viralvtubers.graphql.data.ID

data class AddOrderInput(
    val id: ID,
    val name: String,
    val description: String,
    val bounty: Double,
    val draft: Boolean,
    val tagIds: List<String>,
)

