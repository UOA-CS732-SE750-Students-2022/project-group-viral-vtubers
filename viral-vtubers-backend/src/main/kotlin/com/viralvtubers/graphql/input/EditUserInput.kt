package com.viralvtubers.graphql.input

import com.viralvtubers.graphql.data.ID

data class EditUserInput(
    val id: ID,
    val displayName: String?,
    val bio: String?,
    val numCompletedCommissions: Int?,
    val numLikes: Int?,
    val status: String?,
    val profileImageURI: String?,
    val tags: List<ID>?
)
