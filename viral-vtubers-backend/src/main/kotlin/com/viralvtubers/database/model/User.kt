package com.viralvtubers.database.model

import kotlinx.serialization.Contextual
import org.litote.kmongo.Id
import org.litote.kmongo.newId

@kotlinx.serialization.Serializable
data class User(
    @Contextual override val _id: Id<User> = newId(),
    val firebaseUid: String,
    val displayName: String,
    val email: String,
    val bio: String,
    val numCompletedCommissions: Int,
    val numLikes: Int,
    val status: String,
    val profileImageURI: String,
    val specialises: List<Id<Tag>>,
    val services: List<Service>,
) : Model<User>
