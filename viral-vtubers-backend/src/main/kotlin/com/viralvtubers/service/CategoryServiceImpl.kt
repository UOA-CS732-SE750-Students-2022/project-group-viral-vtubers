package com.viralvtubers.service

import com.viralvtubers.database.mongo.repositories.CategoryRepository
import com.viralvtubers.database.mongo.repositories.SubcategoryRepository
import com.viralvtubers.graphql.data.Category
import com.viralvtubers.graphql.data.ID
import com.viralvtubers.graphql.data.Subcategory
import com.viralvtubers.mapper.map
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.toList

class CategoryServiceImpl(
    private val categoryRepository: CategoryRepository,
    private val subcategoryRepository: SubcategoryRepository
) : CategoryService {
    override suspend fun getCategoryById(categoryId: ID): Category {
        return categoryRepository.getById(categoryId.map())?.map()
            ?: throw error("category not found")
    }

    override suspend fun getCategoryByIds(categoryIds: List<ID>): List<Category> {
        return categoryRepository.getByIds(categoryIds.map { it.map() })
            .map { it.map() }.toList()
    }

    override suspend fun getAllCategories(): List<Category> {
        return categoryRepository.getAll().map { it.map() }.toList()
    }

    override suspend fun getSubcategoryById(subcategoryId: ID): Subcategory {
        return subcategoryRepository.getById(subcategoryId.map())?.map()
            ?: throw error("subcategory not found")
    }

    override suspend fun getSubcategories(categoryId: ID): List<Subcategory> {
        return subcategoryRepository.getByCategoryId(categoryId.map())
            .map { it.map() }.toList()
    }
}
