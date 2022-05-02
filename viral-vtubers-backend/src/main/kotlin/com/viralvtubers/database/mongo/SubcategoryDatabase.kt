package com.viralvtubers.database.mongo

import com.viralvtubers.database.model.Subcategory
import kotlinx.coroutines.flow.Flow
import org.litote.kmongo.Id

interface SubcategoryDatabase {
    fun getSubcategories(subcategoryIds: List<Id<Subcategory>>): Flow<Subcategory>
}