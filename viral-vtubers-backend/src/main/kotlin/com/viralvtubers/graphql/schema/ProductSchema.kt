package com.viralvtubers.graphql.schema

import com.apurebase.kgraphql.schema.dsl.SchemaBuilder
import com.viralvtubers.database.mongo.CategoryDatabase
import com.viralvtubers.database.mongo.ProductDatabase
import com.viralvtubers.database.mongo.SubcategoryDatabase
import com.viralvtubers.database.mongo.UserDatabase
import com.viralvtubers.graphql.data.*
import com.viralvtubers.graphql.input.AddProductInput
import com.viralvtubers.graphql.input.EditProductInput
import com.viralvtubers.graphql.stubProduct
import com.viralvtubers.mapper.map
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.*

@OptIn(FlowPreview::class)
fun SchemaBuilder.productSchema(
    categoryDatabase: CategoryDatabase,
    subcategoryDatabase: SubcategoryDatabase,
    productDatabase: ProductDatabase,
    userDatabase: UserDatabase,
) {
    type<Product> {
        description = "Product"

        property<Subcategory>("subcategory") {
            resolver { product ->
                description = "Get SubCategory of the Product"
                productDatabase.getProducts(listOf(product.id.map()))
                    .flatMapMerge { productDatabase.getProducts(listOf(it.id)) }
                    .map { it.subcategory }
                    .flatMapMerge { subcategoryDatabase.getSubcategories(listOf(it)) }
                    .map { it.map() }
                    .first()
            }
        }

        property<List<String>>("images") {
            resolver { product ->
                description = "Get Images of the Product"
                listOf("fake_0.img", "fake_1.img")
            }
        }

        property<User>("artist") {
            resolver { product ->
                description = "Get the artist who created the Product"
                productDatabase.getProducts(listOf(product.id.map()))
                    .map { it.artist }
                    .flatMapMerge { userDatabase.getUsers(listOf(it)) }
                    .map { it.map() }
                    .first()
            }
        }
    }

    type<ProductVariant> {
        description = "Product Variant"

        property<Product>("product") {
            resolver {
                description = "Get the product which variant is a product of"
                productDatabase.getProductOfProductVariant(it.id.map())
                    .first()
                    .map()
            }
        }
    }

    type<Category> {
        description = "Category"

        property<List<Subcategory>>("subcategories") {
            resolver { category ->
                description = "Get SubCategories in a Category"
                categoryDatabase.getCategoryIds(listOf(category.id.map()))
                    .flatMapMerge { subcategoryDatabase.getSubcategories(it.subcategories) }
                    .map { it.map() }
                    .toList()
            }
        }

        property<ProductPagination>("products") {
            resolver { category, filter: ProductFilter?, cursor: String?, limit: Int? ->
                description = "Get Products in a Category"
                val subcategories = categoryDatabase.getCategoryIds(listOf(category.id.map()))
                    .flatMapMerge { it.subcategories.asFlow() }
                    .toList()
                productDatabase.search(
                    cursor = cursor,
                    limit = limit,
                    subcategoryIds = subcategories,
                    search = filter?.search,
                ).map()
            }
        }
    }

    type<Subcategory> {
        description = "Category"

        property<Category>("category") {
            resolver { subcategory ->
                description = "Get Category from a Subcategory"
                categoryDatabase.getCategoryOfSubcategory(subcategory.id.map())
                    .map { it.map() }
                    .first()
            }
        }

        property<ProductPagination>("products") {
            resolver { subcategory, filter: ProductFilter?, cursor: String?, limit: Int? ->
                description = "Get Products in a Subcategory"
                productDatabase.search(
                    cursor = cursor,
                    limit = limit,
                    search = filter?.search,
                    subcategoryIds = listOf(subcategory.id.map())
                ).map()
            }
        }
    }

    query("categories") {
        description = "Get Categories"
        resolver { ->
            categoryDatabase.getAllCategories()
                .map { it.map() }
                .toList()
        }
    }

    query("category") {
        description = "Get Category"
        resolver { id: ID ->
            categoryDatabase.getCategoryIds(listOf(id.map()))
                .map { it.map() }
                .first()
        }
    }

    query("subcategory") {
        description = "Get Subcategory"
        resolver { id: ID -> subcategoryDatabase.getSubcategories(listOf(id.map())).map { it.map() }.toList() }
    }

    mutation("addProduct") {
        description = "Add a product"
        resolver { input: AddProductInput ->
            productDatabase.addProduct(
                name = input.name,
                artist = input.artist.map(),
                description = input.shortDescription,
                subcategoryId = input.subcategoryId.map(),
                titleImage = input.titleImage,
                images = input.images,
                vrm = input.vrm,
                numLikes = input.numLikes,
                tags = input.tags.map { it.map() },
            ).map()
        }
    }

    mutation("editProduct") {
        description = "Edit a product"
        resolver { input: EditProductInput ->
            stubProduct("fake_service")
        }
    }

    mutation("deleteProduct") {
        description = "Delete a product"
        resolver { input: ID ->
            productDatabase.deleteProduct(input.map()).map()
        }
    }
}
