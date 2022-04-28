package com.viralvtubers.database.model

import org.bson.codecs.pojo.annotations.BsonId
import org.litote.kmongo.Id

data class Product (
    @BsonId val id: Id<Product>,
    val name: String,
    val tags: Array<Id<Tag>>,
    val description: String,
    val subcategory: Id<Subcategory>,
    val images: Array<ByteArray>,
    val vrmString: String,
    val files: Array<String>,
    val price: Float,
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as Product

        if (id != other.id) return false

        return true
    }

    override fun hashCode(): Int {
        return id.hashCode()
    }
}
