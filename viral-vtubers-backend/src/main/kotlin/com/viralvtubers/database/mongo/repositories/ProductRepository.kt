package com.viralvtubers.database.mongo.repositories

import com.mongodb.client.model.Aggregates.match
import com.mongodb.reactivestreams.client.MongoCollection
import com.viralvtubers.database.model.*
import com.viralvtubers.database.mongo.MongoDatabase
import com.viralvtubers.database.mongo.ProductDatabase
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.reactive.asFlow
import org.bson.conversions.Bson
import org.litote.kmongo.*
import org.litote.kmongo.coroutine.toList
import org.litote.kmongo.reactivestreams.getCollection

fun MongoDatabase.asProductDatabase(): ProductDatabase = object : ProductDatabase {

    private val products: MongoCollection<Product> = database.getCollection()

    override fun getProducts(productIds: List<Id<Product>>): Flow<Product> =
        products.find(match(Product::id `in` productIds)).asFlow()

    override suspend fun search(
        cursor: String?,
        limit: Int?,
        search: String?,
        subcategoryIds: List<Id<Subcategory>>?
    ): Page<Product> {
        val commands = mutableListOf<Bson>()
        val matches = mutableListOf<Bson>()

        subcategoryIds?.let { matches.add(Product::subcategory `in` it) }
        search?.let { matches.add(Product::name regex it) }
        if (matches.size > 0) {
            commands.add(and(matches))
        }

        val offset = cursor?.toInt()
        offset?.let { commands.add(skip(it)) }
        limit?.let { commands.add(limit(it)) }

        val result = products.aggregate(commands).toList()
        val start = offset ?: 0

        return Page(start = start, end = start + result.size, items = result)
    }

    override fun getProductOfProductVariant(productVariantId: Id<ProductVariant>): Flow<Product> =
        products.find((Product::variants / ProductVariant::id) eq productVariantId).asFlow()

    override suspend fun addProduct(
        name: String,
        artist: Id<User>,
        tags: List<Id<Tag>>,
        description: String,
        subcategoryId: Id<Subcategory>,
        titleImage: String,
        images: List<String>,
        vrm: String,
        numLikes: Int,
    ): Product {
        val product = Product(
            id = newId(),
            name = name,
            artist = artist,
            tags = tags,
            description = description,
            subcategory = subcategoryId,
            titleImage = titleImage,
            images = images,
            vrm = vrm,
            numLikes = numLikes.toUInt(),
            variants = listOf(),
        )
        val id = products.insertOne(product)
            .asFlow()
            .first()
        return products.find(Product::id eq product.id).asFlow().first()
    }

    override suspend fun editProduct(
        id: Id<Product>,
        name: String?,
        description: String?,
        subcategoryId: Id<Subcategory>?,
        titleImage: String?,
        images: List<String>?,
        vrm: String?,
        numLikes: Int?,
    ): Product {
        val commands = mutableListOf<Bson>()

        commands.add(Product::id eq id)


        name?.let { commands.add(set(Product::name setTo it)) }
        description?.let { commands.add(set(Product::description setTo it)) }
        titleImage?.let { commands.add(set(Product::titleImage setTo it)) }
        images?.let { commands.add(set(Product::images setTo it)) }
        vrm?.let { commands.add(set(Product::vrm setTo it)) }
        numLikes?.let { commands.add(set(Product::numLikes setTo it.toUInt())) }

        return products.aggregate(commands).asFlow().first()
    }


    override suspend fun deleteProduct(productId: Id<Product>): Product =
        products.findOneAndDelete(Product::id eq productId).asFlow().first()


}

data class Page<T>(
    val start: Int,
    val end: Int,
    val items: List<T>,
)
