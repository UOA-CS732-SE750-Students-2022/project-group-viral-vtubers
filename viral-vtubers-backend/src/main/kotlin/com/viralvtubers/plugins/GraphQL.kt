package com.viralvtubers.plugins

import com.apurebase.kgraphql.GraphQL
import com.viralvtubers.config
import com.viralvtubers.database.mongo.MongoDatabase
import com.viralvtubers.graphql.schema.*
import io.ktor.server.application.*
import io.ktor.server.auth.*
import io.ktor.server.auth.jwt.*

fun Application.configureGraphQL() {
    val config = config()
    val database = MongoDatabase(config.mongodb)

    install(GraphQL) {
        useDefaultPrettyPrinter = true

        playground = config.development

        wrap {
            authenticate(optional = true, build = it)
        }
        context { call ->
            call.authentication.principal<JWTPrincipal>()?.let {
                +it
            }
        }

        schema {
            scalarSchema()
            userSchema()
            productSchema()
            orderSchema()
            cartSchema()
        }
    }
}
