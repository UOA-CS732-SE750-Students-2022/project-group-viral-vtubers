package com.viralvtubers.database.mongo

import com.mongodb.reactivestreams.client.MongoCollection
import com.viralvtubers.database.Database
import com.viralvtubers.database.model.*
import org.litote.kmongo.reactivestreams.KMongo
import org.litote.kmongo.reactivestreams.getCollection

const val DEFAULT_HOST_NAME = "localhost"
const val DEFAULT_PORT = 27017u
const val DEFAULT_DATABASE_NAME = "virtual-vtubers"
const val DEFAULT_USERNAME = "admin"
const val DEFAULT_PASSWORD = "password"

class MongoDatabase(config: Config = Config()) : Database {
    private val users: MongoCollection<User>
    private val tags: MongoCollection<Tag>
    private val services: MongoCollection<Service>
    private val products: MongoCollection<Product>
    private val categories: MongoCollection<Category>
    private val subcategories: MongoCollection<Subcategory>

    init {
        val connectionString =
            "mongodb://%s:%s@%s%s".format(
                config.username,
                config.password,
                config.host,
                config.port.let { pwd -> ":$pwd" })
        val client = KMongo.createClient(connectionString)
        val database = client.getDatabase(DEFAULT_DATABASE_NAME)
        this.users = database.getCollection()
        this.tags = database.getCollection()
        this.services = database.getCollection()
        this.products = database.getCollection()
        this.categories = database.getCollection()
        this.subcategories = database.getCollection()
    }

    data class Config(
        var host: String = DEFAULT_HOST_NAME,
        var port: UInt = DEFAULT_PORT,
        var username: String = DEFAULT_USERNAME,
        var password: String = DEFAULT_PASSWORD,
        var databaseName: String = DEFAULT_DATABASE_NAME,
    )

}