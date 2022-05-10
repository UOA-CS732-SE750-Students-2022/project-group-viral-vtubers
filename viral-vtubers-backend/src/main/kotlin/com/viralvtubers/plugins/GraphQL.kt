package com.viralvtubers.plugins

import com.apurebase.kgraphql.GraphQL
import com.viralvtubers.config
import com.viralvtubers.database.mongo.MongoDatabase
import com.viralvtubers.database.mongo.repositories.*
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
    val userService = UserServiceImpl(
        database.asUserRepository(),
        database.asFollowRepository(),
    )
    val tagService = TagServiceImpl(database.asTagRepository())
    val firebaseService = FirebaseServiceImpl()
    val authService = AuthServiceImpl()
    val mailService = MailServiceImpl(
        database.asMailRepository(),
        database.asUserRepository()
    )
    val orderService = OrderServiceImpl(database.asOrderRepository())
    val cartService = CartServiceImpl(
        database.asCartRepository(),
        database.asPurchaseRepository(),
        database.asProductRepository()
    )

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
                productService = productService,
                firebaseService = firebaseService,
                authService = authService,
                mailService = mailService,
                tagService = tagService,
            )
            productSchema(
                categoryService = categoryService,
                productService = productService,
                userService = userService,
                tagService = tagService,
            )
            orderSchema(
                orderService = orderService,
                tagService = tagService,
                userService = userService,
                authService = authService,
            )
            cartSchema(
                cartService = cartService,
                authService = authService,
                userService = userService,
                productService = productService,
            )
        }
    }
}
