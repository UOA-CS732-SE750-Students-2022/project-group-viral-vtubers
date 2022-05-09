package com.viralvtubers.graphql.schema

import com.apurebase.kgraphql.schema.dsl.SchemaBuilder
import com.viralvtubers.graphql.data.*
import com.viralvtubers.graphql.input.AddOrderInput
import com.viralvtubers.graphql.input.EditOrderInput
import com.viralvtubers.graphql.stubOrder
import com.viralvtubers.graphql.stubOrderPagination
import com.viralvtubers.graphql.stubUser
import com.viralvtubers.service.TagService

fun SchemaBuilder.orderSchema(tagService: TagService) {
    type<Order> {
        description = "Order"

        Order::tags.ignore()

        property<List<Tag>>("tags") {
            resolver { order ->
                description = "Get Tags of the Order"
                tagService.getTagsByIds(order.tags)
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
                stubOrder("fake_order_0"),
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
