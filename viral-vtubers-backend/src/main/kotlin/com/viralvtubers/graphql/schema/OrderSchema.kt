package com.viralvtubers.graphql.schema

import com.apurebase.kgraphql.Context
import com.apurebase.kgraphql.schema.dsl.SchemaBuilder
import com.viralvtubers.graphql.data.*
import com.viralvtubers.graphql.input.AddOrderInput
import com.viralvtubers.graphql.input.EditOrderInput
import com.viralvtubers.service.AuthService
import com.viralvtubers.service.OrderService
import com.viralvtubers.service.TagService
import com.viralvtubers.service.UserService

fun SchemaBuilder.orderSchema(
    orderService: OrderService,
    tagService: TagService,
    userService: UserService,
    authService: AuthService,
) {
    type<Order> {
        description = "Order"

        Order::tags.ignore()
        Order::applications.ignore()
        Order::ownerId.ignore()
        Order::artistId.ignore()

        property<User>("owner") {
            resolver { order ->
                description = "Get owner of the Order"
                userService.getUserId(order.ownerId)
            }
        }

        property<User?>("artist") {
            resolver { order ->
                description = "Get owner of the Order"
                order.artistId?.let {
                    userService.getUserId(order.ownerId)
                }
            }
        }

        property<List<Tag>>("tags") {
            resolver { order ->
                description = "Get Tags of the Order"
                tagService.getTagsByIds(order.tags)
            }
        }

        property<List<User>>("applications") {
            resolver { order ->
                description = "Get User applications of the Order"
                userService.getUserIds(order.applications)
            }
        }
    }

    query("orders") {
        description = "Get all Orders"
        resolver { filter: OrderFilter?, sort: OrderSort?, cursor: String?, limit: Int? ->
            orderService.getOrderSearch(filter, sort, cursor, limit)
        }
    }

    query("order") {
        description = "Get an Order by Id"
        resolver { id: ID ->
            orderService.getOrder(id)
        }
    }

    mutation("addOrder") {
        description = "Add an Order"
        resolver { ctx: Context, input: AddOrderInput ->
            val userId = authService.getUserId(ctx)
            orderService.addOrder(userId, input)
        }
    }

    mutation("editOrder") {
        description = "Edit an Order"
        resolver { ctx: Context, input: EditOrderInput ->
            val userId = authService.getUserId(ctx)
            orderService.editOrder(userId, input)
        }
    }

    mutation("deleteOrder") {
        description = "Edit an Order"
        resolver { ctx: Context, id: ID ->
            val userId = authService.getUserId(ctx)
            orderService.deleteOrder(userId, id)
        }
    }

    mutation("applyOrder") {
        description = "Apply to an Order"
        resolver { ctx: Context, id: ID ->
            val userId = authService.getUserId(ctx)
            orderService.applyOrder(userId, id)
        }
    }
}
