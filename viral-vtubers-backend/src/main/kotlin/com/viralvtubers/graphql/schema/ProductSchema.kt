package com.viralvtubers.graphql.schema

import com.apurebase.kgraphql.schema.dsl.SchemaBuilder
import com.viralvtubers.graphql.*
import com.viralvtubers.graphql.data.*
import com.viralvtubers.graphql.input.AddProductInput
import com.viralvtubers.graphql.input.EditProductInput

fun SchemaBuilder.productSchema() {
    type<Product> {
        description = "Product"

        property<Subcategory>("subcategory") {
            resolver { product ->
                description = "Get SubCategory of the Product"
                stubSubcategory("fake_subcategory")
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
                stubUser("fake_Ussr")
            }
        }
    }

    type<ProductVariant> {
        description = "Product Variant"

        property<Product>("product") {
            resolver {
                description = "Get the product which variant is a product of"
                stubProduct("fake_product_10")
            }
        }
    }

    type<Category> {
        description = "Category"

        property<List<Subcategory>>("subcategories") {
            resolver { category ->
                description = "Get SubCategories in a Category"
                listOf(
                    stubSubcategory(
                        "fake_subcategory_0"
                    ),
                    stubSubcategory(
                        "fake_subcategory_1"
                    ),
                )
            }
        }

        property<ProductPagination>("products") {
            resolver { category, filter: ProductFilter?, cursor: String?, limit: Int? ->
                description = "Get Products in a Category"
                stubProductPagination(
                    listOf(
                        stubProduct(
                            "fake_product_0"
                        ),
                        stubProduct(
                            "fake_product_1"
                        ),
                    )
                )
            }
        }
    }

    type<Subcategory> {
        description = "Category"

        property<Category>("category") {
            resolver { subcategory ->
                description = "Get Category from a Subcategory"
                stubCategory("fake_category")
            }
        }

        property<ProductPagination>("products") {
            resolver { subcategory, filter: ProductFilter?, cursor: String?, limit: Int? ->
                description = "Get Products in a Subcategory"
                stubProductPagination(
                    listOf(
                        stubProduct(
                            "fake_product_0"
                        ),
                        stubProduct(
                            "fake_product_1"
                        ),
                    )
                )
            }
        }
    }

    query("categories") {
        description = "Get Categories"
        resolver { ->
            listOf(
                stubCategory("fake_category_0"),
                stubCategory("fake_category_1")
            )
        }
    }

    query("category") {
        description = "Get Category"
        resolver { id: ID ->
            stubCategory("fake_category")
        }
    }

    query("subcategory") {
        description = "Get Subcategory"
        resolver { id: ID ->
            stubSubcategory("fake_subcategory")
        }
    }

    mutation("addProduct") {
        description = "Add a product"
        resolver { input: AddProductInput ->
            stubProduct("fake_product")
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
        resolver { input: EditProductInput ->
            stubProduct("fake_service")
        }
    }
}
