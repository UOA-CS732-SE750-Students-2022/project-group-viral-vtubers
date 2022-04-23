package com.viralvtubers.plugins

import com.apurebase.kgraphql.GraphQL
import com.viralvtubers.config
import com.viralvtubers.database.mongo.MongoDatabase
import com.viralvtubers.graphql.schema.orderSchema
import com.viralvtubers.graphql.schema.productSchema
import com.viralvtubers.graphql.schema.scalarSchema
import com.viralvtubers.graphql.schema.userSchema
import io.ktor.server.application.*

fun Application.configureGraphQL() {
    val config = config()
    val database = MongoDatabase(config.mongodb)

    install(GraphQL) {
        useDefaultPrettyPrinter = true

        playground = config.development

//        context { call ->
//            call.authenticate(requireAdmin = false)?.let {
//                + runBlocking { getUserProfileOrCreate(it.uid) }
//                + it
//            }
//        }

        schema {
            scalarSchema()
            userSchema()
            productSchema()
            orderSchema()
        }
    }
}
