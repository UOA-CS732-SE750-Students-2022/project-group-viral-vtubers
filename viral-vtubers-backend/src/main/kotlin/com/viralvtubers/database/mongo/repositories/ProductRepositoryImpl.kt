package com.viralvtubers.database.mongo.repositories

import com.viralvtubers.database.model.*
import com.viralvtubers.database.mongo.MongoDatabase
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.toList
import org.bson.conversions.Bson
import org.litote.kmongo.Id
import org.litote.kmongo.`in`
import org.litote.kmongo.coroutine.CoroutineCollection
import org.litote.kmongo.div
import org.litote.kmongo.eq

fun MongoDatabase.asProductRepository(): ProductRepository =
    object : ProductRepository {

        override val col: CoroutineCollection<Product> =
            database.getCollection()

        override fun getProductOfProductVariant(productVariantId: Id<ProductVariant>): Flow<Product> {
            return col.find((Product::variants / ProductVariant::_id) eq productVariantId)
                .toFlow()
        }

        override suspend fun getVariant(
            productId: Id<Product>,
            variantId: Id<ProductVariant>
        ): ProductVariant {
            val product = getById(productId) ?: throw error("product not found")
            return product.variants.find { it._id == variantId } ?: throw error(
                "product variant not found"
            )
        }

        override suspend fun addVariant(
            productId: Id<Product>,
            variant: ProductVariant
        ): List<ProductVariant> {
            val product = getById(productId) ?: throw error("product not found")
            val variants = ArrayList(product.variants)
            variants.add(variant)

            update(
                product.copy(
                    variants = variants
                )
            )

            return variants
        }

        override suspend fun editVariant(
            productId: Id<Product>,
            variant: ProductVariant
        ): List<ProductVariant> {
            val product = getById(productId) ?: throw error("product not found")
            val variants = ArrayList(product.variants)
            variants.removeIf { it._id == variant._id }
            variants.add(variant)

            update(
                product.copy(
                    variants = variants
                )
            )

            return variants
        }

        override suspend fun getProducts(
            vararg filter: Bson,
            sort: Bson
        ): Flow<Product> {
            val result =
                col.find(
                    *filter
                ).sort(sort)
            return result.toFlow()
        }

        override suspend fun getProductOfCategory(
            categoryId: Id<Category>,
            vararg filter: Bson,
            sort: Bson
        ): Flow<Product> {
            val subcategoryIds = asSubcategoryRepository()
                .getByCategoryId(categoryId)
                .map { it._id }.toList()
            val result =
                col.find(
                    Product::subcategory `in` subcategoryIds,
                    *filter
                ).sort(sort)
            return result.toFlow()
        }

        override suspend fun getProductOfSubcategory(
            subcategoryId: Id<Subcategory>,
            vararg filter: Bson,
            sort: Bson
        ): Flow<Product> {
            val result =
                col.find(
                    Product::subcategory eq subcategoryId,
                    *filter
                ).sort(sort)
            return result.toFlow()
        }


        override suspend fun deleteVariant(
            productId: Id<Product>,
            variantId: Id<ProductVariant>
        ): List<ProductVariant> {
            val product = getById(productId) ?: throw error("product not found")
            val variants = ArrayList(product.variants)
            variants.removeIf { it._id == variantId }

            update(
                product.copy(
                    variants = variants
                )
            )

            return variants
        }

        override fun getProductsByUserId(userId: Id<User>): Flow<Product> {
            return col.find(Product::artistId eq userId).toFlow()
        }
    }

data class Page<T>(
    val start: Id<T>?,
    val end: Id<T>?,
    val items: List<T>,
    val hasNext: Boolean,
)
