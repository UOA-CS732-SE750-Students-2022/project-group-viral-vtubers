package com.viralvtubers

import io.ktor.server.application.*

data class Config(
    val mongodbConnectionString: String,
    val mongodbDatabaseName: String,
    val storageBucket: String,
    val development: Boolean,
    val host: String,
    val jwtIssuer: String,
)

fun Application.config() = environment.config.run {
    Config(
        mongodbConnectionString = property("mongodb.connectionString").getString(),
        mongodbDatabaseName = property("mongodb.databaseName").getString(),
        storageBucket = property("gcp.bucket").getString(),
        development = property("ktor.development").getString().toBoolean(),
        host = property("ktor.jwt.host").getString(),
        jwtIssuer = property("ktor.jwt.issuer").getString(),
    )
}
