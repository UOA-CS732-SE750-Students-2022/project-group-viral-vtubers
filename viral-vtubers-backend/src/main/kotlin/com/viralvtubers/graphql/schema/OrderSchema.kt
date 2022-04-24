package com.viralvtubers.graphql.schema

import com.apurebase.kgraphql.schema.dsl.SchemaBuilder
import com.viralvtubers.graphql.data.*
import com.viralvtubers.graphql.input.AddOrderInput
import com.viralvtubers.graphql.input.EditOrderInput
import com.viralvtubers.graphql.stubOrder
import com.viralvtubers.graphql.stubOrderPagination
import com.viralvtubers.graphql.stubTag
import com.viralvtubers.graphql.stubUser

fun SchemaBuilder.orderSchema() {
    type<Order> {
        description = "Order"

        property<List<Tag>>("tags") {
            resolver { order ->
                description = "Get Tags of the Order"
                listOf(stubTag("fake_tag_0"), stubTag("fake_tag_1"))
            }
        }

        property<List<User>>("applications") {
            resolver { order ->
                description = "Get User applications of the Order"
                listOf(stubUser("fake_user_0"), stubUser("fake_user_1"))
            }
        }
    }

    query("orders") {
        description = "Get all Orders"
        resolver { filter: ProductFilter?, cursor: String?, limit: Int? ->
            stubOrderPagination(
                listOf(
                    stubOrder("fake_order_0"),
                    stubOrder("fake_order_1")
                )
            )
        }
    }

    query("order") {
        description = "Get an Order by Id"
        resolver { id: ID ->
            stubOrder("fake_order")
        }
    }

    mutation("addOrder") {
        description = "Add an Order"
        resolver { input: AddOrderInput ->
            stubOrder("fake_order")
        }
    }

    mutation("editOrder") {
        description = "Edit an Order"
        resolver { input: EditOrderInput ->
            stubOrder("fake_order")
        }
    }

    mutation("applyOrder") {
        description = "Apply to an Order"
        resolver { id: ID ->
            stubOrder("fake_order")
        }
    }
}
