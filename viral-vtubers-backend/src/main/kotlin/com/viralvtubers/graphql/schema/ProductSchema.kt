package com.viralvtubers.graphql.schema

import com.apurebase.kgraphql.schema.dsl.SchemaBuilder
import com.viralvtubers.graphql.*
import com.viralvtubers.graphql.data.*

fun SchemaBuilder.productSchema() {
    type<User> {
        description = "User"
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

    query("user") {
        description = "Get a single user"
        resolver { id: String ->
            stubUser(id)
        }
    }

    query("users") {
        description = "Get all users"
        resolver { ->
            listOf(stubUser("fake_user_0"), stubUser("fake_user_1"))
        }
    }
}
