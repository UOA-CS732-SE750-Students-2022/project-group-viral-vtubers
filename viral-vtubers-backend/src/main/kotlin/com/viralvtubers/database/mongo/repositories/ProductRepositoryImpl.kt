package com.viralvtubers.database.mongo.repositories

import com.viralvtubers.database.model.Product
import com.viralvtubers.database.model.ProductVariant
import com.viralvtubers.database.mongo.MongoDatabase
import kotlinx.coroutines.flow.Flow
import org.litote.kmongo.Id
import org.litote.kmongo.coroutine.CoroutineCollection
import org.litote.kmongo.div
import org.litote.kmongo.eq

fun MongoDatabase.asProductRepository(): ProductRepository =
    object : ProductRepository {

        override val col: CoroutineCollection<Product> =
            database.getCollection()

        override fun getProductOfProductVariant(productVariantId: Id<ProductVariant>): Flow<Product> =
            col.find((Product::variants / ProductVariant::_id) eq productVariantId)
                .toFlow()
    }

data class Page<T>(
    val start: Int,
    val end: Int,
    val items: List<T>,
)
