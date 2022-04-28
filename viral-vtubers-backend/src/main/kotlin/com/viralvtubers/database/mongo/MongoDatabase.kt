package com.viralvtubers.database.mongo

import com.mongodb.client.model.Aggregates.match
import com.mongodb.reactivestreams.client.MongoCollection
import com.viralvtubers.database.Database
import com.viralvtubers.database.model.*
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.reactive.asFlow
import org.litote.kmongo.Id
import org.litote.kmongo.`in`
import org.litote.kmongo.reactivestreams.KMongo
import org.litote.kmongo.reactivestreams.getCollection

const val DEFAULT_HOST_NAME = "localhost"
const val DEFAULT_PORT = 27017u
const val DEFAULT_DATABASE_NAME = "virtual-vtubers"
const val DEFAULT_USERNAME = "admin"
const val DEFAULT_PASSWORD = "password"

class MongoDatabase(config: Config = Config()) : Database {
    private val database: com.mongodb.reactivestreams.client.MongoDatabase

    private val users: MongoCollection<User>
    private val tags: MongoCollection<Tag>
    private val products: MongoCollection<Product>
    private val categories: MongoCollection<Category>
    private val subcategories: MongoCollection<Subcategory>

    init {
        val connectionString =
            "mongodb://%s:%s@%s%s".format(config.username, config.password, config.host, config.port.let { ":$it" })
        val client = KMongo.createClient(connectionString)
        this.database = client.getDatabase(DEFAULT_DATABASE_NAME)
        this.users = database.getCollection()
        this.tags = database.getCollection()
        this.products = database.getCollection()
        this.categories = database.getCollection()
        this.subcategories = database.getCollection()
    }

    override fun getUsers(userIds: Collection<Id<User>>): Flow<User> = this.users.find(match(User::id `in` userIds)).asFlow()

    override fun getTags(tagIds: Collection<Id<Tag>>): Flow<Tag> = this.tags.find(match(Tag::id `in` tagIds)).asFlow()

    override fun getProducts(productIds: Collection<Id<Product>>): Flow<Product> =
        this.products.find(match(Product::id `in` productIds)).asFlow()

    override fun getCategoryIds(categoryIds: Collection<Id<Category>>): Flow<Category> =
        this.categories.find(match(Category::id `in` categoryIds)).asFlow()

    override fun getSubcategories(subcategoryIds: Collection<Id<Subcategory>>): Flow<Subcategory> =
        this.subcategories.find(match(Subcategory::id `in` subcategoryIds)).asFlow()

    data class Config(
        var host: String = DEFAULT_HOST_NAME,
        var port: UInt = DEFAULT_PORT,
        var username: String = DEFAULT_USERNAME,
        var password: String = DEFAULT_PASSWORD,
        var databaseName: String = DEFAULT_DATABASE_NAME,
    )

}