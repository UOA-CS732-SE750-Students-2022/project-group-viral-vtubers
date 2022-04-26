package com.viralvtubers.graphql.input

import com.viralvtubers.graphql.data.ID

data class EditOrderInput(
    val id: ID,
    val name: String?,
    val description: String?,
    val bounty: Double?,
    val isDraft: Boolean?,
    val tagIds: List<String>?,
)

