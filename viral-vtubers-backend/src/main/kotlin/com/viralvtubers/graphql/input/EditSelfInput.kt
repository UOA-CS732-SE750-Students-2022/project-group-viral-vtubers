package com.viralvtubers.graphql.input

data class EditSelfInput(
    val displayName: String?,
    val bio: String?,
    val profileImageURI: String?,
    val tagIds: List<String>?,
)
