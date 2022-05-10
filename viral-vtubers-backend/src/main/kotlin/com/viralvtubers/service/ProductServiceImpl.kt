package com.viralvtubers.service

import com.viralvtubers.database.model.Like
import com.viralvtubers.database.model.ProductVariant
import com.viralvtubers.database.mongo.repositories.LikeRepository
import com.viralvtubers.database.mongo.repositories.Page
import com.viralvtubers.database.mongo.repositories.ProductRepository
import com.viralvtubers.graphql.data.*
import com.viralvtubers.graphql.input.*
import com.viralvtubers.mapper.map
import kotlinx.coroutines.flow.*
import org.bson.conversions.Bson
import org.litote.kmongo.*
import java.util.*
import com.viralvtubers.database.model.Product as DataProduct


class ProductServiceImpl(
    private val productRepository: ProductRepository,
    private val likeRepository: LikeRepository
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
        sort: ProductSort?,
        cursor: String?,
        limit: Int?
    ): ProductPagination {
        val filterBson = getFilterBson(filter)
        val sortBson = getSortBson(sort)

        var productFlow = productRepository.getProductOfCategory(
            categoryId.map(),
            *filterBson.toTypedArray(),
            sort = sortBson,
        ).withIndex()

        if (cursor != null) {
            val before =
                productFlow.takeWhile { it.value._id.toString() != cursor }

            val last = before.last()

            productFlow = productFlow.dropWhile { it.index < last.index }
        }

        val products = productFlow.take(limit ?: 25).map { it.value }.toList()

        return Page(
            start = products.firstOrNull()?._id,
            end = products.lastOrNull()?._id,
            items = products,
            hasNext = products.size == (limit ?: 25),
        ).map()
    }

    override suspend fun getProductVariant(
        productId: ID,
        variantId: ID
    ): com.viralvtubers.graphql.data.ProductVariant {
        val product = productRepository.getById(productId.map()) ?: throw error(
            "product not found"
        )

        return product.variants.firstOrNull { it._id.map() == variantId }?.map()
            ?: throw error("variant not found")
    }

    override suspend fun getSubcategorySearch(
        subcategoryId: ID,
        filter: ProductFilter?,
        sort: ProductSort?,
        cursor: String?,
        limit: Int?
    ): ProductPagination {
        val filterBson = getFilterBson(filter)
        val sortBson = getSortBson(sort)

        var productFlow = productRepository.getProductOfSubcategory(
            subcategoryId.map(),
            *filterBson.toTypedArray(),
            sort = sortBson,
        ).withIndex()

        if (cursor != null) {
            val before =
                productFlow.takeWhile { it.value._id.toString() != cursor }

            val last = before.last()

            productFlow = productFlow.dropWhile { it.index <= last.index }
        }

        val products = productFlow.take(limit ?: 25).map { it.value }.toList()

        return Page(
            start = products.firstOrNull()?._id,
            end = products.lastOrNull()?._id,
            items = products,
            hasNext = products.size == (limit ?: 25),
        ).map()
    }

    private fun getSortBson(sort: ProductSort?): Bson {
        sort ?: return descending(DataProduct::createdDate)

        sort.name?.let {
            return if (it == SortEnum.ASC) ascending(DataProduct::name)
            else descending(DataProduct::name)
        }

        sort.createdDate?.let {
            return if (it == SortEnum.ASC) ascending(DataProduct::createdDate)
            else descending(DataProduct::createdDate)
        }

        sort.price?.let {
            return if (it == SortEnum.ASC) ascending(DataProduct::minPrice)
            else descending(DataProduct::minPrice)
        }
        return descending(DataProduct::createdDate)
    }

    private fun getFilterBson(filter: ProductFilter?): List<Bson> {
        filter ?: return ArrayList()

        val filterBson = ArrayList<Bson>()

        filter.search?.let {
            filterBson.add(
                DataProduct::name regex Regex(
                    ".*$it.*",
                    RegexOption.IGNORE_CASE
                )
            )
        }

        filter.ageRestriction?.let {
            if (it == AgeRestrictionEnum.NSFW_ONLY) {
                filterBson.add(
                    DataProduct::isMature eq true
                )
            } else if (it == AgeRestrictionEnum.SFW_ONLY) {
                filterBson.add(
                    DataProduct::isMature eq false
                )
            } else {
                // do nothing
            }
        }

        filter.other?.let {
            // TODO
        }

        filter.minPrice?.let {
            filterBson.add(
                DataProduct::minPrice gte it
            )
        }

        filter.maxPrice?.let {
            filterBson.add(
                DataProduct::minPrice lte it
            )
        }


        return filterBson
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
            numLikes = 0,
            variants = ArrayList(),
            isMature = input.isMature,
            minPrice = 0.0,
            createdDate = Date(),
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
            numLikes = product.numLikes,
            variants = ArrayList(),
            isMature = product.isMature,
            minPrice = product.minPrice,
            createdDate = product.createdDate,
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
                fileTypes = input.fileTypes,
            )
        )

        val product = productRepository.getById(input.productId.map())
            ?.map() ?: throw error("product not found")

        updateProductMinPrice(product.id)
        return product
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
                fileTypes = input.fileTypes ?: variant.fileTypes,
            )
        )
        val product = productRepository.getById(input.productId.map())
            ?.map() ?: throw error("product not found")

        updateProductMinPrice(product.id)
        return product
    }

    override suspend fun deleteProductVariant(input: DeleteProductVariant): Product {
        productRepository.deleteVariant(input.productId.map(), input.id.map())
        val product = productRepository.getById(input.productId.map())
            ?.map() ?: throw error("product not found")

        updateProductMinPrice(product.id)
        return product
    }

    private suspend fun updateProductMinPrice(productId: ID) {
        // Update the product min price after modifying variant list
        val product = productRepository.getById(productId.map())
            ?: throw error("product not found")

        val minPrice = product.variants.maxOf { it.price }

        val update = product.copy(minPrice = minPrice)

        productRepository.update(update)?.map()
            ?: throw error("product not found")
    }

    override suspend fun checkIsLiked(productId: ID, userId: ID): Boolean {
        return likeRepository.findByUserAndProduct(
            userId.map(),
            productId.map()
        ) != null
    }

    override suspend fun getNumLikes(productId: ID): Int {
        return likeRepository.findByProduct(productId.map()).count()
    }

    override suspend fun getNumLikesByUser(userId: ID): Int {
        return likeRepository.findByUser(userId.map()).count()
    }

    override suspend fun getLikedProduct(userId: ID): List<Product> {
        val productIds = likeRepository.findByUser(userId.map()).toList()
            .map { it.productId }
        return productRepository.getByIds(productIds).toList().map { it.map() }
    }

    override suspend fun likeProduct(productId: ID, userId: ID): Product {
        val product = getProductId(productId)
        likeRepository.add(
            Like(
                currentId = userId.map(),
                productId = productId.map(),
                artistId = product.artistId.map(),
                createdDate = Date(),
            )
        )

        val productData = productRepository.getById(productId.map())
            ?: throw error("product not found")
        val update = productData.copy(numLikes = productData.numLikes + 1)
        return productRepository.update(update)?.map()
            ?: throw error("product not found")

        return getProductId(productId)
    }

    override suspend fun unlikeProduct(productId: ID, userId: ID): Product {
        val like =
            likeRepository.findByUserAndProduct(userId.map(), productId.map())
                ?: throw error("like not found")
        likeRepository.delete(like._id)

        val productData = productRepository.getById(productId.map())
            ?: throw error("product not found")
        val update = productData.copy(numLikes = productData.numLikes - 1)
        return productRepository.update(update)?.map()
            ?: throw error("product not found")

        return getProductId(productId)
    }
}
