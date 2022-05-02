package com.viralvtubers.database.mongo

import com.viralvtubers.database.model.Category
import kotlinx.coroutines.flow.Flow
import org.litote.kmongo.Id

interface CategoryDatabase {
    fun getCategoryIds(categoryIds: List<Id<Category>>): Flow<Category>

    fun getAllCategories(): Flow<Category>

}