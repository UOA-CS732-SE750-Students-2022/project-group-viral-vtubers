package com.viralvtubers.database.mongo.repositories

import com.mongodb.client.model.Aggregates.match
import com.mongodb.reactivestreams.client.MongoCollection
import com.viralvtubers.database.model.Product
import com.viralvtubers.database.mongo.MongoDatabase
import com.viralvtubers.database.mongo.ProductDatabase
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.reactive.asFlow
import org.litote.kmongo.Id
import org.litote.kmongo.`in`
import org.litote.kmongo.reactivestreams.getCollection

fun MongoDatabase.asProductDatabase(): ProductDatabase = object : ProductDatabase {

    private val products: MongoCollection<Product> = database.getCollection()

    override fun getProducts(productIds: List<Id<Product>>): Flow<Product> =
        products.find(match(Product::id `in` productIds)).asFlow()

}