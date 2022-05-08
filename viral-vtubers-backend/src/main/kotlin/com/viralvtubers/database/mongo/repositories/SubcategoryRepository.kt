package com.viralvtubers.database.mongo.repositories

import com.viralvtubers.database.model.Category
import com.viralvtubers.database.model.Subcategory
import kotlinx.coroutines.flow.Flow
import org.litote.kmongo.Id

interface SubcategoryRepository : Repository<Subcategory> {
    fun getByCategoryId(categoryId: Id<Category>): Flow<Subcategory>
}
