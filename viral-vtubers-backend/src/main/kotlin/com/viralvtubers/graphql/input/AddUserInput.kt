package com.viralvtubers.graphql.input

import com.viralvtubers.graphql.data.ID

data class AddUserInput(
    val firebaseUid: String,
    val displayName: String,
    val email: String,
    val bio: String,
    val numCompletedCommissions: Int,
    val numLikes: Int,
    val status: String,
    val profileImageURI: String,
    val tags: List<ID>,
)
