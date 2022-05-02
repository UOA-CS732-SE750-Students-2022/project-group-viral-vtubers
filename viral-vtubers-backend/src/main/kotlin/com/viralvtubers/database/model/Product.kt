package com.viralvtubers.database.model

import org.bson.codecs.pojo.annotations.BsonId
import org.litote.kmongo.Id

data class Product(
    @BsonId val id: Id<Product>,
    val name: String,
    val artist: Id<User>,
    val tags: List<Id<Tag>>,
    val description: String,
    val titleImage: String,
    val subcategory: Id<Subcategory>,
    val images: List<String>,
    val vrm: String,
    val numLikes: UInt,
    val variants: List<ProductVariant>,
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

data class ProductVariant(
    @BsonId val id: Id<ProductVariant>,
    val price: Double,
    val name: String,
    val filename: String,
    val files: List<String>,
)
