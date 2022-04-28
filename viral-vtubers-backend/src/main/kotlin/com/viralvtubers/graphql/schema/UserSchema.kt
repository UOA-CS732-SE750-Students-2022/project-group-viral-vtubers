package com.viralvtubers.graphql.schema

import com.apurebase.kgraphql.Context
import com.apurebase.kgraphql.schema.dsl.SchemaBuilder
import com.viralvtubers.graphql.*
import com.viralvtubers.graphql.data.*
import com.viralvtubers.graphql.input.AddServiceInput
import com.viralvtubers.graphql.input.EditSelfInput
import com.viralvtubers.graphql.input.EditServiceInput
import com.viralvtubers.graphql.input.SendMailInput
import io.ktor.server.auth.jwt.*

fun SchemaBuilder.userSchema() {
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
                description = "Get user listed products"
                listOf(
                    stubProduct("fake_service_0"),
                    stubProduct("fake_service_1")
                )
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
            println(ctx.get<JWTPrincipal>()?.subject)
            stubUser("fake_self")
        }
    }

    query("self") {
        description = "Get self"
        resolver { ->
            stubUser("fake_self")
        }
    }

    query("user") {
        description = "Get a single user"
        resolver { id: ID ->
            stubUser(id.value)
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
            stubUser("fake_self")
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
