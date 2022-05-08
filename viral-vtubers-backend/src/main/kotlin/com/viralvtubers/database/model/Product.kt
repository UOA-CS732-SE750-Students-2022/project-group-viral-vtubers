package com.viralvtubers.database.model

import kotlinx.serialization.Contextual
import org.litote.kmongo.Id
import org.litote.kmongo.newId

@kotlinx.serialization.Serializable
data class Product(
    @Contextual override val _id: Id<Product> = newId(),
    val name: String,
    val artistId: Id<User>,
    val tags: List<@Contextual Id<Tag>>,
    val description: String,
    val titleImage: String,
    val subcategory: Id<Subcategory>,
    val images: List<String>,
    val vrm: String,
    val numLikes: Int,
    val variants: List<ProductVariant>,
) : Model<Product>

@kotlinx.serialization.Serializable
data class ProductVariant(
    @Contextual override val _id: Id<ProductVariant> = newId(),
    val productId: Id<Product>,
    val price: Double,
    val name: String,
    val file: String,
) : Model<ProductVariant>
