package com.viralvtubers.database.mongo

import com.viralvtubers.database.model.Product
import kotlinx.coroutines.flow.Flow
import org.litote.kmongo.Id

interface ProductDatabase {
    fun getProducts(productIds: List<Id<Product>>): Flow<Product>
}