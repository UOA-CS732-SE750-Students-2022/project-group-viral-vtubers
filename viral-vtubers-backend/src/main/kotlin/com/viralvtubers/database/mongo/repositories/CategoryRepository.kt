package com.viralvtubers.database.mongo.repositories

import com.mongodb.client.model.Aggregates.match
import com.mongodb.reactivestreams.client.MongoCollection
import com.mongodb.reactivestreams.client.MongoDatabase
import com.viralvtubers.database.model.Category
import com.viralvtubers.database.mongo.CategoryDatabase
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.reactive.asFlow
import org.litote.kmongo.Id
import org.litote.kmongo.`in`
import org.litote.kmongo.reactivestreams.getCollection

class CategoryRepository(database: MongoDatabase) : CategoryDatabase {

    private val categories: MongoCollection<Category> = database.getCollection()

    override fun getCategoryIds(categoryIds: Collection<Id<Category>>): Flow<Category> =
        this.categories.find(match(Category::id `in` categoryIds)).asFlow()
}