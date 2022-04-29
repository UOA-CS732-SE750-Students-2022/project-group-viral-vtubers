package com.viralvtubers.database.mongo.repositories

import com.mongodb.reactivestreams.client.MongoCollection
import com.mongodb.reactivestreams.client.MongoDatabase
import com.viralvtubers.database.model.Subcategory
import com.viralvtubers.database.mongo.SubcategoryDatabase
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.reactive.asFlow
import org.litote.kmongo.Id
import org.litote.kmongo.`in`
import org.litote.kmongo.match
import org.litote.kmongo.reactivestreams.getCollection

class SubcategoryRepository(database: MongoDatabase) : SubcategoryDatabase {
    private val subcategories: MongoCollection<Subcategory> = database.getCollection()

    override fun getSubcategories(subcategoryIds: Collection<Id<Subcategory>>): Flow<Subcategory> =
        this.subcategories.find(match(Subcategory::id `in` subcategoryIds)).asFlow()
}