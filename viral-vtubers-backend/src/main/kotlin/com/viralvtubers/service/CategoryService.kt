package com.viralvtubers.service

import com.viralvtubers.graphql.data.Category
import com.viralvtubers.graphql.data.ID
import com.viralvtubers.graphql.data.Subcategory
import org.koin.core.component.KoinComponent

interface CategoryService : KoinComponent {
    suspend fun getCategoryById(categoryId: ID): Category

    suspend fun getCategoryByIds(categoryIds: List<ID>): List<Category>

    suspend fun getAllCategories(): List<Category>

    suspend fun getSubcategoryById(subcategoryId: ID): Subcategory

    suspend fun getSubcategories(categoryId: ID): List<Subcategory>
}
