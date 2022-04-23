package com.viralvtubers

import com.viralvtubers.database.mongo.MongoDBConfig
import io.ktor.server.application.*

data class Config(
    val mongodb: MongoDBConfig,
    val development: Boolean,
)

fun Application.config() = environment.config.run {
    Config(
        mongodb = MongoDBConfig(
            host = property("mongodb.host").getString(),
            port = property("mongodb.port").getString().toUInt(),
            username = property("mongodb.username").getString(),
            password = property("mongodb.password").getString(),
            databaseName = property("mongodb.databaseName").getString(),
        ),
        development = property("ktor.development").getString().toBoolean(),
    )
}
