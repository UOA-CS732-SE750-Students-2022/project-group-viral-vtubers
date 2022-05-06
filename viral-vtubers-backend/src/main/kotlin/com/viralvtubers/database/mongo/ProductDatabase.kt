package com.viralvtubers.database.mongo

import com.viralvtubers.database.model.*
import com.viralvtubers.database.mongo.repositories.Page
import kotlinx.coroutines.flow.Flow
import org.litote.kmongo.Id

interface ProductDatabase {
    fun getProducts(productIds: List<Id<Product>>): Flow<Product>

    suspend fun search(
        cursor: String? = null,
        limit: Int? = null,
        search: String? = null,
        subcategoryIds: List<Id<Subcategory>>? = null,
    ): Page<Product>

    fun getProductOfProductVariant(productVariantId: Id<ProductVariant>): Flow<Product>

    suspend fun addProduct(
        name: String,
        artist: Id<User>,
        tags: List<Id<Tag>>,
        description: String,
        subcategoryId: Id<Subcategory>,
        titleImage: String,
        images: List<String>,
        vrm: String,
        numLikes: Int,
    ): Product

    suspend fun editProduct(
        id: Id<Product>,
        name: String? = null,
        description: String? = null,
        subcategoryId: Id<Subcategory>? = null,
        titleImage: String? = null,
        images: List<String>? = null,
        vrm: String? = null,
        numLikes: Int? = null,
    ): Product

    suspend fun deleteProduct(productId: Id<Product>): Product
}

data class EditProductVariant(
    val id: Id<ProductVariant>,
    val name: String? = null,
    val price: Double? = null,
    val files: List<String>? = null,
)
