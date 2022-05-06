package com.viralvtubers.database.model

import kotlinx.serialization.Contextual
import org.bson.codecs.pojo.annotations.BsonId
import org.litote.kmongo.Id

@kotlinx.serialization.Serializable
data class Product(
    @Contextual val id: Id<Product>,
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
)

@kotlinx.serialization.Serializable
data class ProductVariant(
    @BsonId val id: Id<ProductVariant>,
    val price: Double,
    val name: String,
    val filename: String,
    val files: List<String>,
)
