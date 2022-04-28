package com.viralvtubers.plugins

import io.ktor.client.*
import io.ktor.client.request.*
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.plugins.autohead.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.client.engine.cio.*
import io.ktor.client.statement.*
import org.litote.kmongo.json

val client = HttpClient(CIO)

fun Application.configureRouting() {
    install(AutoHeadResponse)

    routing {
        get("/") {
            call.respondText("Hello World!")
        }
        get(".well-known/jwks.json") {
            var response = client.get("https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com")
            call.respondText(response.bodyAsText(), ContentType.Application.Json, HttpStatusCode.OK)
        }
    }
}
