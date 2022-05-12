package com.viralvtubers.service

import com.viralvtubers.graphql.data.*
import com.viralvtubers.graphql.input.*
import org.koin.core.component.KoinComponent


interface ProductService : KoinComponent {
    suspend fun getProductId(productId: ID): Product

    suspend fun getProductVariant(productId: ID, variantId: ID): ProductVariant

    suspend fun getProductIds(productIds: List<ID>): List<Product>

    suspend fun getProductsByUserId(userId: ID): List<Product>

    suspend fun getAllProducts(): List<Product>

    suspend fun getSearch(
        filter: ProductFilter?,
        sort: ProductSort?,
        cursor: String?,
        limit: Int?
    ): ProductPagination

    suspend fun getCategorySearch(
        categoryId: ID,
        filter: ProductFilter?,
        sort: ProductSort?,
        cursor: String?,
        limit: Int?
    ): ProductPagination

    suspend fun getSubcategorySearch(
        subcategoryId: ID,
        filter: ProductFilter?,
        sort: ProductSort?,
        cursor: String?,
        limit: Int?
    ): ProductPagination

    suspend fun addProduct(input: AddProductInput): Product

    suspend fun editProduct(input: EditProductInput): Product

    suspend fun deleteProduct(productId: ID): Product

    suspend fun addProductVariant(input: AddProductVariant): Product

    suspend fun editProductVariant(input: EditProductVariant): Product

    suspend fun deleteProductVariant(input: DeleteProductVariant): Product

    suspend fun checkIsLiked(productId: ID, userId: ID): Boolean

    suspend fun getNumLikes(productId: ID): Int

    suspend fun getNumLikesByUser(userId: ID): Int

    suspend fun getLikedProduct(userId: ID): List<Product>

    suspend fun likeProduct(productId: ID, userId: ID): Product

    suspend fun unlikeProduct(productId: ID, userId: ID): Product
}
