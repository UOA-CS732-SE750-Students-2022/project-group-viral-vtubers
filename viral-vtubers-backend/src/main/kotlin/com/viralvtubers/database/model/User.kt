package com.viralvtubers.database.model

data class User (
    val name: String,
    val email: String,
    val password: ByteArray,
    val bio: String,
    val completedCommissions: UInt,
    val specialises: Array<Id<Tag>>,
    val images: Array<ByteArray>,
    val services: Array<Id<Service>>,
    val products: Array<Id<Product>>,
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as User

        if (email != other.email) return false

        return true
    }

    override fun hashCode(): Int {
        return email.hashCode()
    }
}