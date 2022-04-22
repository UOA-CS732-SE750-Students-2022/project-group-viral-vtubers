package com.viralvtubers

import com.viralvtubers.database.mongo.MongoDatabase
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import com.viralvtubers.plugins.*

fun main() {
    val database = MongoDatabase()

    embeddedServer(Netty, port = 8080, host = "0.0.0.0") {
        configureRouting()
        configureSecurity()
        configureHTTP()
    }.start(wait = true)
}
