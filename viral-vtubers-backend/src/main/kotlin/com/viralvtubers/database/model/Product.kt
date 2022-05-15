package com.viralvtubers.database.model

import com.viralvtubers.database.serializer.DateSerializer
import kotlinx.serialization.Contextual
import kotlinx.serialization.Serializable
import org.litote.kmongo.Id
import org.litote.kmongo.newId
import java.util.*


@Serializable
data class Product(
    @Contextual override val _id: @Contextual Id<Product> = newId(),
    val name: String,
    val artistId: @Contextual Id<User>,
    val tags: List<@Contextual Id<Tag>>,
    val description: String,
    val titleImage: String,
    val subcategory: @Contextual Id<Subcategory>,
    val images: List<String>,
    val vrm: String,
    val numLikes: Int,
    val variants: List<ProductVariant>,
    val minPrice: Double,
    val isMature: Boolean,
    val isComment: Boolean,
    val isDraft: Boolean,
    val createdDate: @Serializable(with = DateSerializer::class) Date,
    val modifiedDate: @Serializable(with = DateSerializer::class) Date = Date(),
) : Model<Product>

@Serializable
data class ProductVariant(
    @Contextual override val _id: @Contextual Id<ProductVariant> = newId(),
    val productId: @Contextual Id<Product>,
    val price: Double,
    val name: String,
    val file: String,
    val fileName: String,
    val fileTypes: List<String>,
) : Model<ProductVariant>
