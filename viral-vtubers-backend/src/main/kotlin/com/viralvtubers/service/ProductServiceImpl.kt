package com.viralvtubers.service

import com.viralvtubers.database.model.ProductVariant
import com.viralvtubers.database.mongo.repositories.ProductRepository
import com.viralvtubers.graphql.data.ID
import com.viralvtubers.graphql.data.Product
import com.viralvtubers.graphql.data.ProductFilter
import com.viralvtubers.graphql.data.ProductPagination
import com.viralvtubers.graphql.input.*
import com.viralvtubers.mapper.map
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.toList
import org.litote.kmongo.newId
import com.viralvtubers.database.model.Product as DataProduct

class ProductServiceImpl(
    private val productRepository: ProductRepository
) : ProductService {
    override suspend fun getProductId(productId: ID): Product {
        return productRepository.getById(productId.map())?.map()
            ?: throw error("product not found")
    }

    override suspend fun getProductIds(productIds: List<ID>): List<Product> {
        return productRepository.getByIds(productIds.map {
            it.map()
        }).map { it.map() }.toList()
    }

    override suspend fun getProductsByUserId(userId: ID): List<Product> {
        return productRepository.getProductsByUserId(userId.map())
            .map { it.map() }.toList()
    }

    override suspend fun getAllProducts(): List<Product> {
        return productRepository.getAll().map { it.map() }.toList()
    }

    override suspend fun getCategorySearch(
        categoryId: ID,
        filter: ProductFilter?,
        cursor: String?,
        limit: Int?
    ): ProductPagination {
        TODO("Not yet implemented")
    }

    override suspend fun getSubcategorySearch(
        subcategoryId: ID,
        filter: ProductFilter?,
        cursor: String?,
        limit: Int?
    ): ProductPagination {
        TODO("Not yet implemented")
    }

    override suspend fun addProduct(input: AddProductInput): Product {
        val product = DataProduct(
            _id = newId(),
            name = input.name,
            artistId = input.artist.map(),
            tags = input.tags.map { it.map() },
            description = input.description,
            titleImage = input.titleImage,
            subcategory = input.subcategoryId.map(),
            images = input.images,
            vrm = input.vrm,
            numLikes = input.numLikes,
            variants = ArrayList(),
        )
        productRepository.add(product)
        return productRepository.getById(product._id)
            ?.map() ?: throw error("product cannot be added")
    }

    override suspend fun editProduct(input: EditProductInput): Product {
        val product = productRepository.getById(input.id.map())
            ?: throw error("product not found")
        val update = DataProduct(
            _id = product._id,
            name = input.name ?: product.name,
            artistId = product.artistId,
            tags = input.tags?.map { it.map() } ?: product.tags,
            description = input.description ?: product.description,
            titleImage = input.titleImage ?: product.titleImage,
            subcategory = input.subcategoryId?.map() ?: product.subcategory,
            images = input.images ?: product.images,
            vrm = input.vrm ?: product.vrm,
            numLikes = input.numLikes ?: product.numLikes,
            variants = ArrayList(),
        )
        return productRepository.update(update)?.map()
            ?: throw error("product not found")
    }

    override suspend fun deleteProduct(productId: ID): Product {
        TODO("Not yet implemented")
    }

    override suspend fun addProductVariant(input: AddProductVariant): Product {
        productRepository.addVariant(
            input.productId.map(),
            ProductVariant(
                productId = input.productId.map(),
                price = input.price,
                name = input.name,
                file = input.file,
            )
        )
        return productRepository.getById(input.productId.map())
            ?.map() ?: throw error("product not found")
    }

    override suspend fun editProductVariant(input: EditProductVariant): Product {
        val variant =
            productRepository.getVariant(input.productId.map(), input.id.map())
        productRepository.editVariant(
            input.productId.map(),
            ProductVariant(
                _id = input.id.map(),
                productId = input.productId.map(),
                price = input.price ?: variant.price,
                name = input.name ?: variant.name,
                file = input.file ?: variant.file,
            )
        )
        return productRepository.getById(input.productId.map())
            ?.map() ?: throw error("product not found")
    }

    override suspend fun deleteProductVariant(input: DeleteProductVariant): Product {
        productRepository.deleteVariant(input.productId.map(), input.id.map())
        return productRepository.getById(input.productId.map())
            ?.map() ?: throw error("product not found")
    }
}
