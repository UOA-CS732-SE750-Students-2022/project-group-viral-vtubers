package com.viralvtubers.database.mongo.repositories

import com.viralvtubers.database.model.*
import kotlinx.coroutines.flow.Flow
import org.bson.conversions.Bson
import org.litote.kmongo.Id

interface ProductRepository : Repository<Product> {
    fun getProductOfProductVariant(productVariantId: Id<ProductVariant>): Flow<Product>

    suspend fun getProducts(
        vararg filter: Bson,
        sort: Bson
    ): Flow<Product>

    suspend fun getProductOfCategory(
        categoryId: Id<Category>,
        vararg filter: Bson,
        sort: Bson
    ): Flow<Product>

    suspend fun getProductOfSubcategory(
        subcategoryId: Id<Subcategory>,
        vararg filter: Bson,
        sort: Bson
    ): Flow<Product>

    suspend fun getVariant(
        productId: Id<Product>,
        variantId: Id<ProductVariant>
    ): ProductVariant

    suspend fun addVariant(
        productId: Id<Product>,
        variant: ProductVariant
    ): List<ProductVariant>

    suspend fun editVariant(
        productId: Id<Product>,
        variant: ProductVariant
    ): List<ProductVariant>

    suspend fun deleteVariant(
        productId: Id<Product>,
        variantId: Id<ProductVariant>
    ): List<ProductVariant>

    fun getProductsByUserId(userId: Id<User>): Flow<Product>

    fun getProductsByUserIdNoDraft(userId: Id<User>): Flow<Product>
}
