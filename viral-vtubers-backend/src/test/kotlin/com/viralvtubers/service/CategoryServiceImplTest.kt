package com.viralvtubers.service

import com.viralvtubers.database.model.Category
import com.viralvtubers.database.model.Subcategory
import com.viralvtubers.database.mongo.repositories.CategoryRepository
import com.viralvtubers.database.mongo.repositories.SubcategoryRepository
import com.viralvtubers.graphql.data.ID
import io.mockk.MockKAnnotations
import io.mockk.coEvery
import io.mockk.impl.annotations.InjectMockKs
import io.mockk.impl.annotations.MockK
import kotlinx.coroutines.flow.flowOf
import kotlinx.coroutines.runBlocking
import org.bson.types.ObjectId
import org.junit.Before
import org.junit.Test
import org.junit.jupiter.api.assertThrows
import org.litote.kmongo.Id
import org.litote.kmongo.id.toId
import org.litote.kmongo.newId
import org.litote.kmongo.toId
import kotlin.test.assertEquals

class CategoryServiceImplTest {
    @InjectMockKs lateinit var categoryService: CategoryServiceImpl

    @MockK lateinit var categoryRepository: CategoryRepository
    @MockK lateinit var subcategoryRepository: SubcategoryRepository

    @Before fun setup() = MockKAnnotations.init(this)

    @Test
    fun testGetCategoryByIdSuccess() {
        // Prepare
        val ID = "507f1f77bcf86cd799439011"
        val mongoId = ObjectId(ID).toId<Category>()
        val graphqlId = ID(ID)
        val mongoSubcategoryId = newId<Subcategory>()
        val category = Category(name = "Model", subcategoryIds = listOf(mongoSubcategoryId))

        // Expect
        coEvery { categoryRepository.getById(mongoId) } returns category

        // Execute
        val graphqlCategory = runBlocking {
            categoryService.getCategoryById(graphqlId)
        }

        // Assert
        assertEquals(category.name, graphqlCategory.name)
    }

    @Test
    fun testGetCategoryByIdFailureCategoryNotFound() {
        // Prepare
        val ID = "507f1f77bcf86cd799439011"
        val mongoId = ObjectId(ID).toId<Category>()
        val graphqlId = ID(ID)
        val mongoSubcategoryId = newId<Subcategory>()

        // Expect
        coEvery { categoryRepository.getById(mongoId) } returns null

        // Execute
        assertThrows<IllegalStateException> {
            runBlocking {
                categoryService.getCategoryById(graphqlId)
            }
        }
    }

    @Test
    fun testGetCategoryByIdsSuccess() {
        // Prepare
        val ID = listOf("507f1f77bcf86cd799439011")
        val mongoId = ID.map { ObjectId(it).toId<Category>() }
        val graphqlIds = ID.map { ID(it) }

        // Expect
        coEvery { categoryRepository.getByIds(mongoId) } returns
            flowOf(Category(name = "models", subcategoryIds = listOf()))

        // Execute
        val category: com.viralvtubers.graphql.data.Category
        runBlocking {
            category = categoryService.getCategoryByIds(graphqlIds).get(0)
        }
        assertEquals("models", category.name)
    }

    @Test
    fun testGetAllCategoriesSuccess() {
        // Expect
        coEvery { categoryRepository.getAll() } returns
                flowOf(Category(name = "models", subcategoryIds = listOf()))

        // Execute
        val category: com.viralvtubers.graphql.data.Category
        runBlocking {
            category = categoryService.getAllCategories()[0]
        }
        assertEquals("models", category.name)
    }

    @Test
    fun testGetSubcategoryById() {
        val graphQlId = ID("507f1f77bcf86cd799439011")

        // Expect
        coEvery { subcategoryRepository.getById(any()) } returns
                Subcategory(name = "models", categoryId = newId())

        // Execute
        val subcategory: com.viralvtubers.graphql.data.Subcategory
        runBlocking {
            subcategory = categoryService.getSubcategoryById(graphQlId)
        }
        assertEquals("models", subcategory.name)
    }

    @Test
    fun testGetSubcategoryByIdFailure() {
        val graphQlId = ID("507f1f77bcf86cd799439011")

        // Expect
        coEvery { subcategoryRepository.getById(any()) } returns null

        // Execute
        assertThrows<IllegalStateException> {
            runBlocking {
                categoryService.getSubcategoryById(graphQlId)
            }
        }
    }

    @Test
    fun testGetSubcategories() {
        val graphQlId = ID("507f1f77bcf86cd799439011")
        val categoryId: Id<Category> = graphQlId.value.toId()

        // Expect
        coEvery { subcategoryRepository.getByCategoryId(any()) } returns
                flowOf(Subcategory(name = "models", categoryId = categoryId))

        // Execute
        val subcategory: com.viralvtubers.graphql.data.Subcategory
        runBlocking {
            subcategory = categoryService.getSubcategories(graphQlId)[0]
        }
        assertEquals("models", subcategory.name)
    }
}