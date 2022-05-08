package com.viralvtubers.database.mongo.repositories

import com.viralvtubers.database.model.Product
import com.viralvtubers.database.model.ProductVariant
import com.viralvtubers.database.model.User
import kotlinx.coroutines.flow.Flow
import org.litote.kmongo.Id

interface ProductRepository : Repository<Product> {
    fun getProductOfProductVariant(productVariantId: Id<ProductVariant>): Flow<Product>

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
}
