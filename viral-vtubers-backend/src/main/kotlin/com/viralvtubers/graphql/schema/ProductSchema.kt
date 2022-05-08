package com.viralvtubers.graphql.schema

import com.apurebase.kgraphql.schema.dsl.SchemaBuilder
import com.viralvtubers.graphql.data.*
import com.viralvtubers.graphql.input.*
import com.viralvtubers.service.CategoryService
import com.viralvtubers.service.ProductService
import com.viralvtubers.service.UserService
import kotlinx.coroutines.FlowPreview

@OptIn(FlowPreview::class)
fun SchemaBuilder.productSchema(
    productService: ProductService,
    categoryService: CategoryService,
    userService: UserService,
) {
    type<Product> {
        description = "Product"

        Product::subcategoryId.ignore()
        Product::artistId.ignore()

        property<Subcategory>("subcategory") {
            resolver { product ->
                description = "Get SubCategory of the Product"
                categoryService.getSubcategoryById(product.subcategoryId)
            }
        }

        property<User>("artist") {
            resolver { product ->
                description = "Get the artist who created the Product"
                userService.getUserId(product.artistId)
            }
        }
    }

    type<ProductVariant> {
        description = "Product Variant"

        ProductVariant::productId.ignore()

        property<Product>("product") {
            resolver { productVariant ->
                description = "Get the product which variant is a product of"
                productService.getProductId(productVariant.productId)
            }
        }
    }

    type<Category> {
        description = "Category"

        property<List<Subcategory>>("subcategories") {
            resolver { category ->
                description = "Get SubCategories in a Category"
                categoryService.getSubcategories(category.id)
            }
        }

        property<ProductPagination>("products") {
            resolver { category, filter: ProductFilter?, sort: ProductSort?, cursor: String?, limit: Int? ->
                description = "Get Products in a Category"
                productService.getCategorySearch(
                    category.id,
                    filter,
                    sort,
                    cursor,
                    limit
                )
            }
        }
    }

    type<Subcategory> {
        description = "Category"

        Subcategory::categoryId.ignore()

        property<Category>("category") {
            resolver { subcategory ->
                description = "Get Category from a Subcategory"
                categoryService.getCategoryById(subcategory.categoryId)
            }
        }

        property<ProductPagination>("products") {
            resolver { subcategory, filter: ProductFilter?, sort: ProductSort?, cursor: String?, limit: Int? ->
                description = "Get Products in a Subcategory"
                productService.getSubcategorySearch(
                    subcategory.id,
                    filter,
                    sort,
                    cursor,
                    limit
                )
            }
        }
    }
    
    query("categories") {
        description = "Get Categories"
        resolver { ->
            categoryService.getAllCategories()
        }
    }

    query("category") {
        description = "Get Category"
        resolver { id: ID ->
            categoryService.getCategoryById(id)
        }
    }

    query("subcategory") {
        description = "Get Subcategory"
        resolver { id: ID ->
            categoryService.getSubcategoryById(id)
        }
    }

    mutation("addProduct") {
        description = "Add a product"
        resolver { input: AddProductInput ->
            productService.addProduct(input)
        }
    }

    mutation("editProduct") {
        description = "Edit a product"
        resolver { input: EditProductInput ->
            productService.editProduct(input)
        }
    }

    mutation("deleteProduct") {
        description = "Delete a product"
        resolver { id: ID ->
            productService.deleteProduct(id)
        }
    }

    mutation("addProductVariant") {
        description = "Delete a product variant"
        resolver { input: AddProductVariant ->
            productService.addProductVariant(input)
        }
    }

    mutation("editProductVariant") {
        description = "Edit a product variant"
        resolver { input: EditProductVariant ->
            productService.editProductVariant(input)
        }
    }

    mutation("deleteProductVariant") {
        description = "Delete a product variant"
        resolver { input: DeleteProductVariant ->
            productService.deleteProductVariant(input)
        }
    }
}
