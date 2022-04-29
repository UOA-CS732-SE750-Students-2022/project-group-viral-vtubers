package com.viralvtubers.database.mongo

import com.viralvtubers.database.model.Category
import kotlinx.coroutines.flow.Flow
import org.litote.kmongo.Id

interface CategoryDatabase {
    fun getCategoryIds(categoryIds: Collection<Id<Category>>): Flow<Category>
}