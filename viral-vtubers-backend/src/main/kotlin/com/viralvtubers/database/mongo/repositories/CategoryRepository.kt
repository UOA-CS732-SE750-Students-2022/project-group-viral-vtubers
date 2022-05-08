package com.viralvtubers.database.mongo.repositories

import com.viralvtubers.database.model.Category
import com.viralvtubers.database.model.Subcategory
import kotlinx.coroutines.flow.Flow
import org.litote.kmongo.Id

interface CategoryRepository : Repository<Category> {
    fun getCategoryOfSubcategory(subcategoryId: Id<Subcategory>): Flow<Category>
    
}
