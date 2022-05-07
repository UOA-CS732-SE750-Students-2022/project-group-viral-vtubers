package com.viralvtubers.database.mongo.repositories

import com.viralvtubers.database.model.Product
import com.viralvtubers.database.model.ProductVariant
import kotlinx.coroutines.flow.Flow
import org.litote.kmongo.Id

interface ProductRepository : Repository<Product> {
    fun getProductOfProductVariant(productVariantId: Id<ProductVariant>): Flow<Product>
}
