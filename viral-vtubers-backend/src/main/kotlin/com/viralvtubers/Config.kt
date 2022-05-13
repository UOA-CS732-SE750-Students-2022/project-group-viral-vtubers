package com.viralvtubers

import com.viralvtubers.database.mongo.*
import io.ktor.server.application.*

data class Config(
    val mongodb: MongoDatabase.Config,
    val storageBucket: String,
    val development: Boolean,
)

fun Application.config() = environment.config.run {
    Config(
        mongodb = MongoDatabase.Config(
            host = propertyOrNull("mongodb.host")?.getString()
                ?: DEFAULT_HOST_NAME,
            port = propertyOrNull("mongodb.port")?.getString()?.toUInt()
                ?: DEFAULT_PORT,
            username = propertyOrNull("mongodb.username")?.getString()
                ?: DEFAULT_USERNAME,
            password = propertyOrNull("mongodb.password")?.getString()
                ?: DEFAULT_PASSWORD,
            databaseName = propertyOrNull("mongodb.databaseName")?.getString()
                ?: DEFAULT_DATABASE_NAME,
        ),
        storageBucket = property("gcp.bucket").getString(),
        development = property("ktor.development").getString().toBoolean(),
    )
}
