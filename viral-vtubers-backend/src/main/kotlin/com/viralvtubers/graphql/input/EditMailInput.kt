package com.viralvtubers.graphql.input

import com.viralvtubers.graphql.data.ID

data class EditMailInput(
    val id: ID,
    val isRead: Boolean?,
)
