package com.viralvtubers.database.mongo.repositories

import com.viralvtubers.database.model.Category
import com.viralvtubers.database.model.Subcategory
import com.viralvtubers.database.mongo.MongoDatabase
import kotlinx.coroutines.flow.Flow
import org.litote.kmongo.Id
import org.litote.kmongo.contains
import org.litote.kmongo.coroutine.CoroutineCollection


fun MongoDatabase.asCategoryRepository(): CategoryRepository =
    object : CategoryRepository {
        override val col: CoroutineCollection<Category> =
            database.getCollection()

        override fun getCategoryOfSubcategory(subcategoryId: Id<Subcategory>): Flow<Category> =
            col.find(Category::subcategoryIds contains subcategoryId).toFlow()

    }
