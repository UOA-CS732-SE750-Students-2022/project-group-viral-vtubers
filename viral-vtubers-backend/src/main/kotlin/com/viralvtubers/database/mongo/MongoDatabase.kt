package com.viralvtubers.database.mongo

import com.viralvtubers.database.mongo.repositories.asCategoryRepository
import com.viralvtubers.database.mongo.repositories.asSubcategoryRepository
import kotlinx.coroutines.runBlocking
import org.litote.kmongo.coroutine.CoroutineDatabase
import org.litote.kmongo.coroutine.coroutine
import org.litote.kmongo.reactivestreams.KMongo

const val DEFAULT_HOST_NAME = "localhost"
const val DEFAULT_PORT = 27017u
const val DEFAULT_DATABASE_NAME = "viral-vtubers"
const val DEFAULT_USERNAME = "admin"
const val DEFAULT_PASSWORD = "password"

class MongoDatabase(config: Config = Config()) {
    val database: CoroutineDatabase

    init {
        val connectionString =
            "mongodb://%s:%s@%s%s".format(
                config.username,
                config.password,
                config.host,
                config.port.let { ":$it" })
        val client = KMongo.createClient(connectionString).coroutine
        this.database = client.getDatabase(DEFAULT_DATABASE_NAME)

        runBlocking {
            initCategories(
                asCategoryRepository(),
                asSubcategoryRepository()
            )
        }
    }

    fun getInstance(): CoroutineDatabase {
        return database
    }


    data class Config(
        var host: String = DEFAULT_HOST_NAME,
        var port: UInt = DEFAULT_PORT,
        var username: String = DEFAULT_USERNAME,
        var password: String = DEFAULT_PASSWORD,
        var databaseName: String = DEFAULT_DATABASE_NAME,
    )

}
