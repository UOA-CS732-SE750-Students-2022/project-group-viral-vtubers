package com.viralvtubers.database.mongo.repositories

import com.viralvtubers.database.model.Category
import com.viralvtubers.database.model.Subcategory
import com.viralvtubers.database.mongo.MongoDatabase
import kotlinx.coroutines.flow.Flow
import org.litote.kmongo.Id
import org.litote.kmongo.coroutine.CoroutineCollection
import org.litote.kmongo.eq

fun MongoDatabase.asSubcategoryRepository(): SubcategoryRepository =
    object : SubcategoryRepository {
        override val col: CoroutineCollection<Subcategory> =
            database.getCollection()

        override fun getByCategoryId(categoryId: Id<Category>): Flow<Subcategory> =
            col.find(Subcategory::categoryId eq categoryId).toFlow()

    }
