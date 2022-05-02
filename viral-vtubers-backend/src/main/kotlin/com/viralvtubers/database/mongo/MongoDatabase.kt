package com.viralvtubers.database.mongo

import com.mongodb.reactivestreams.client.MongoDatabase
import org.litote.kmongo.reactivestreams.KMongo

const val DEFAULT_HOST_NAME = "localhost"
const val DEFAULT_PORT = 27017u
const val DEFAULT_DATABASE_NAME = "virtual-vtubers"
const val DEFAULT_USERNAME = "admin"
const val DEFAULT_PASSWORD = "password"

class MongoDatabase(config: Config = Config()) {
    val database: MongoDatabase

    init {
        val connectionString =
            "mongodb://%s:%s@%s%s".format(config.username, config.password, config.host, config.port.let { ":$it" })
        val client = KMongo.createClient(connectionString)
        this.database = client.getDatabase(DEFAULT_DATABASE_NAME)
    }

    fun getInstance(): MongoDatabase {
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
