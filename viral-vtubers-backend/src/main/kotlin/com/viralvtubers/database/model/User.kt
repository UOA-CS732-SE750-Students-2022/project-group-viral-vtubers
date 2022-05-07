package com.viralvtubers.database.model

import kotlinx.serialization.Contextual
import org.litote.kmongo.Id
import org.litote.kmongo.newId

@kotlinx.serialization.Serializable
data class User(
    @Contextual override val _id: Id<User> = newId(),
    val displayName: String,
    val email: String,
    val bio: String,
    val numCompletedCommissions: Int,
    val numLikes: Int,
    val status: String,
    val profileImageURI: String,
    val specialises: Array<Id<Tag>>,
    val images: Array<ByteArray>,
    val services: Array<Service>,
    val products: Array<Id<Product>>,
) : Model<User> {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as User

        if (_id != other._id) return false

        return true
    }

    override fun hashCode(): Int {
        return email.hashCode()
    }
}
