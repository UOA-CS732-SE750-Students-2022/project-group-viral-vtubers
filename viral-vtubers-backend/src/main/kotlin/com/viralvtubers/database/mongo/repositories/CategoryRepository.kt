package com.viralvtubers.database.mongo.repositories

import com.mongodb.client.model.Aggregates.match
import com.mongodb.reactivestreams.client.MongoCollection
import com.viralvtubers.database.model.Category
import com.viralvtubers.database.model.Subcategory
import com.viralvtubers.database.mongo.CategoryDatabase
import com.viralvtubers.database.mongo.MongoDatabase
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.reactive.asFlow
import org.litote.kmongo.Id
import org.litote.kmongo.contains
import org.litote.kmongo.`in`
import org.litote.kmongo.reactivestreams.getCollection

fun MongoDatabase.asCategoryDatabase(): CategoryDatabase = object : CategoryDatabase {

    private val categories: MongoCollection<Category> = database.getCollection()

    override fun getCategoryIds(categoryIds: List<Id<Category>>): Flow<Category> =
        categories.find(match(Category::id `in` categoryIds)).asFlow()

    override fun getAllCategories(): Flow<Category> = categories.find().asFlow()


    override fun getCategoryOfSubcategory(subcategoryId: Id<Subcategory>): Flow<Category> =
        categories.find(Category::subcategories contains subcategoryId).asFlow()

}