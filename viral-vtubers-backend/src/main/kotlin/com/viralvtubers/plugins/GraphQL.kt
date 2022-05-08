package com.viralvtubers.plugins

import com.apurebase.kgraphql.GraphQL
import com.viralvtubers.config
import com.viralvtubers.database.mongo.MongoDatabase
import com.viralvtubers.database.mongo.repositories.asCategoryRepository
import com.viralvtubers.database.mongo.repositories.asProductRepository
import com.viralvtubers.database.mongo.repositories.asSubcategoryRepository
import com.viralvtubers.database.mongo.repositories.asUserRepository
import com.viralvtubers.graphql.schema.*
import com.viralvtubers.service.*
import io.ktor.server.application.*
import io.ktor.server.auth.*
import io.ktor.server.auth.jwt.*

fun Application.configureGraphQL() {
    val config = config()
    val database = MongoDatabase(config.mongodb)
    val categoryService = CategoryServiceImpl(
        database.asCategoryRepository(),
        database.asSubcategoryRepository()
    )
    val productService = ProductServiceImpl(database.asProductRepository())
    val userService = UserServiceImpl(database.asUserRepository())
    val firebaseService = FirebaseServiceImpl()
    val authService = AuthServiceImpl()

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
            userSchema(
                userService = userService,
                firebaseService = firebaseService,
                authService = authService,
            )
            productSchema(
                categoryService = categoryService,
                productService = productService,
                userService = userService,
            )
            orderSchema()
            cartSchema()
        }
    }
}
