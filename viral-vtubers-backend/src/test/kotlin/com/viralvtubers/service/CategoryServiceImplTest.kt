package com.viralvtubers.service

import com.viralvtubers.database.mongo.repositories.CategoryRepository
import com.viralvtubers.database.mongo.repositories.SubcategoryRepository
import io.mockk.MockKAnnotations
import io.mockk.impl.annotations.InjectMockKs
import io.mockk.impl.annotations.MockK
import org.junit.Before

class CategoryServiceImplTest {
    @InjectMockKs lateinit var categoryService: CategoryServiceImpl

    @MockK lateinit var categoryRepository: CategoryRepository
    @MockK lateinit var subcategoryRepository: SubcategoryRepository

    @Before fun setup() = MockKAnnotations.init(this)

//    @Test
//    fun testGetCategoryByIdSuccess() {
//        // Prepare
//        val mongoId = newId<Category>()
//        val graphqlId = ID("123")
//        val mongoSubcategoryId = newId<Subcategory>()
//        val category = Category(name = "Model", subcategoryIds = listOf(mongoSubcategoryId))
//
//        // Expect
//        coEvery { categoryRepository.getById(mongoId) } returns category
//
//        // Execute
//        val graphqlCategory = runBlocking {
//            categoryService.getCategoryById(graphqlId)
//        }
//
//        // Assert
//        assertEquals(category._id, graphqlCategory.id.value.idValue)
//    }
}