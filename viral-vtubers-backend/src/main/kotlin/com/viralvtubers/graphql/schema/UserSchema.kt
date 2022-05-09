package com.viralvtubers.graphql.schema

import com.apurebase.kgraphql.Context
import com.apurebase.kgraphql.schema.dsl.SchemaBuilder
import com.viralvtubers.graphql.data.*
import com.viralvtubers.graphql.input.*
import com.viralvtubers.graphql.stubService
import com.viralvtubers.graphql.stubTag
import com.viralvtubers.service.*
import io.ktor.server.auth.jwt.*

fun SchemaBuilder.userSchema(
    userService: UserService,
    productService: ProductService,
    firebaseService: FirebaseService,
    authService: AuthService,
    mailService: MailService,
) {
    type<User> {
        description = "User"

        property<Boolean>("isFollowing") {
            resolver { user, ctx: Context ->
                description = "Get if current user if following this user"
                val userId = authService.getUserId(ctx)
                userService.isFollowing(userId, user.id)
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
                mailService.getInbox(user.id)
            }
        }

        property<List<Mail>>("sent") {
            resolver { user ->
                description = "Get user sent mails"
                mailService.getSent(user.id)
            }
        }

        property<List<User>>("following") {
            resolver { user ->
                description = "Get users this user is following"
                userService.getFollowing(user.id)
            }
        }

        property<List<User>>("followers") {
            resolver { user ->
                description = "Get users following this user"
                userService.getFollowers(user.id)
            }
        }
    }

    type<Mail> {
        description = "Mail"

        Mail::senderId.ignore()
        Mail::receiverId.ignore()

        property<User>("sender") {
            resolver { mail ->
                description = "Get sender"
                userService.getUserId(mail.senderId)
            }
        }

        property<User>("receiver") {
            resolver { mail ->
                description = "Get receiver"
                userService.getUserId(mail.receiverId)
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

    query("userByName") {
        description = "Get a single user by name"
        resolver { name: String ->
            userService.getUserByName(name)
        }
    }

    query("users") {
        description = "Get all users"
        resolver { ctx: Context, filter: UserFilter?, sort: UserSort?, cursor: String?, limit: Int? ->
            val userId = authService.getUserId(ctx)
            userService.getUsers(userId, filter, sort, cursor, limit)
        }
    }

    query("mail") {
        description = "Get mail"
        resolver { ctx: Context, id: ID ->
            val userId = authService.getUserId(ctx)
            mailService.getMail(userId, id)
        }
    }

    mutation("editSelf") {
        description = "Edit self"
        resolver { ctx: Context, input: EditSelfInput ->
            val userId = authService.getUserId(ctx)
            userService.editSelf(userId, input)
        }
    }

    mutation("addService") {
        description = "Add a service"
        resolver { ctx: Context, input: AddServiceInput ->
            val userId = authService.getUserId(ctx)
            userService.addService(userId, input)
        }
    }

    mutation("editService") {
        description = "Edit a service"
        resolver { ctx: Context, input: EditServiceInput ->
            val userId = authService.getUserId(ctx)
            userService.editService(userId, input)
        }
    }

    mutation("deleteService") {
        description = "Delete a service"
        resolver { ctx: Context, id: ID ->
            val userId = authService.getUserId(ctx)
            userService.deleteService(userId, id)
        }
    }

    mutation("sendMail") {
        description = "Send a mail"
        resolver { ctx: Context, input: SendMailInput ->
            val userId = authService.getUserId(ctx)
            mailService.sendMail(userId, input)
        }
    }

    mutation("editMail") {
        description = "Edit a mail"
        resolver { ctx: Context, input: EditMailInput ->
            val userId = authService.getUserId(ctx)
            mailService.editMail(userId, input)
        }
    }

    mutation("follow") {
        description = "Follow a user"
        resolver { ctx: Context, id: ID, follow: Boolean ->
            val userId = authService.getUserId(ctx)
            userService.follow(userId, id, follow)
        }
    }
}
