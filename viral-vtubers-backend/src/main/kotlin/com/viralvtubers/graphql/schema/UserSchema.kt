package com.viralvtubers.graphql.schema

import com.apurebase.kgraphql.Context
import com.apurebase.kgraphql.schema.dsl.SchemaBuilder
import com.viralvtubers.graphql.*
import com.viralvtubers.graphql.data.*
import com.viralvtubers.graphql.input.*
import com.viralvtubers.service.AuthService
import com.viralvtubers.service.FirebaseService
import com.viralvtubers.service.ProductService
import com.viralvtubers.service.UserService
import io.ktor.server.auth.jwt.*

fun SchemaBuilder.userSchema(
    userService: UserService,
    productService: ProductService,
    firebaseService: FirebaseService,
    authService: AuthService,
) {
    type<User> {
        description = "User"

        property<Boolean>("isFollowing") {
            resolver { user ->
                description = "Get if current user if following this user"
                false
            }
        }

        property<List<Tag>>("tags") {
            resolver { user ->
                description = "Get user tags"
                listOf(stubTag("fake_tag_0"), stubTag("fake_tag_1"))
            }
        }

        property<List<Service>>("services") {
            resolver { user ->
                description = "Get user services"
                listOf(
                    stubService("fake_service_0"),
                    stubService("fake_service_1")
                )
            }
        }

        property<List<Product>>("products") {
            resolver { user ->
                description = "Get user products"
                productService.getProductsByUserId(user.id)
            }
        }

        property<List<Mail>>("inbox") {
            resolver { user ->
                description = "Get user inbox"
                listOf(stubMail("fake_mail_0"), stubMail("fake_mail_1"))
            }
        }

        property<List<Mail>>("sent") {
            resolver { user ->
                description = "Get user sent mails"
                listOf(stubMail("fake_mail_0"), stubMail("fake_mail_1"))
            }
        }

        property<List<User>>("following") {
            resolver { user ->
                description = "Get users this user is following"
                listOf(stubUser("fake_user_0"))
            }
        }

        property<List<User>>("followers") {
            resolver { user ->
                description = "Get users following this user"
                listOf(stubUser("fake_user_0"), stubUser("fake_user_1"))
            }
        }
    }

    type<Mail> {
        description = "Mail"
        property<User>("sender") {
            resolver { mail ->
                description = "Get sender"
                stubUser("fake_user")
            }
        }

        property<User>("receiver") {
            resolver { mail ->
                description = "Get receiver"
                stubUser("fake_user")
            }
        }
    }

    mutation("login") {
        description = "Check if the user exist if not create the user"
        resolver { ctx: Context ->
            val uid = ctx.get<JWTPrincipal>()?.subject
                ?: throw error("jwt is empty")
            try {
                userService.getUserByFirebaseUid(uid)
            } catch (e: IllegalStateException) {
                val userRecord = firebaseService.getUser(uid)
                val user = userService.addUser(
                    AddUserInput(
                        firebaseUid = uid,
                        displayName = userRecord.displayName,
                        email = userRecord.email,
                        bio = "",
                        numCompletedCommissions = 0,
                        numLikes = 0,
                        status = "",
                        profileImageURI = "",
                        specialises = ArrayList()
                    )
                )
                firebaseService.setCustomClaims(uid, user.id)
                user
            }
        }
    }

    query("self") {
        description = "Get self"
        resolver { ctx: Context ->
            val userId = authService.getUserId(ctx)
            userService.getUserId(userId)
        }
    }

    query("user") {
        description = "Get a single user"
        resolver { id: ID ->
            userService.getUserId(id)
        }
    }

    query("users") {
        description = "Get all users"
        resolver { cursor: String?, limit: Int? ->
            stubUserPagination(
                listOf(
                    stubUser("fake_user_0"),
                    stubUser("fake_user_1")
                )
            )
        }
    }

    mutation("editSelf") {
        description = "Edit self"
        resolver { input: EditSelfInput ->
            userService.editSelf(input)
        }
    }

    mutation("addService") {
        description = "Add a service"
        resolver { input: AddServiceInput ->
            stubService("fake_service")
        }
    }

    mutation("editService") {
        description = "Edit a service"
        resolver { input: EditServiceInput ->
            stubService("fake_service")
        }
    }

    mutation("sendMail") {
        description = "Send a mail"
        resolver { input: SendMailInput ->
            stubMail("fake_mail")
        }
    }
}
