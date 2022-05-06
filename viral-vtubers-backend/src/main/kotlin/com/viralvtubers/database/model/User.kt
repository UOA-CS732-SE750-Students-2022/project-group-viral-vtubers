package com.viralvtubers.database.model

import org.bson.codecs.pojo.annotations.BsonId
import org.litote.kmongo.Id

@kotlinx.serialization.Serializable
data class User(
    @BsonId val id: Id<User>,
    val displayName: String,
    val email: String,
    val bio: String,
    val numCompletedCommissions: UInt,
    val numLikes: UInt,
    val status: String,
    val profileImageURI: String,
    val specialises: Array<Id<Tag>>,
    val images: Array<ByteArray>,
    val services: Array<Service>,
    val products: Array<Id<Product>>,
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as User

        if (id != other.id) return false

        return true
    }

    override fun hashCode(): Int {
        return email.hashCode()
    }
}