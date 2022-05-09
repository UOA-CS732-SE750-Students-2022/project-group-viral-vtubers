package com.viralvtubers.service

import com.viralvtubers.graphql.data.*
import com.viralvtubers.graphql.input.AddOrderInput
import com.viralvtubers.graphql.input.EditOrderInput

interface OrderService {
    suspend fun getOrderSearch(
        filter: OrderFilter?,
        sort: OrderSort?,
        cursor: String?,
        limit: Int?
    ): OrderPagination

    suspend fun getOrder(id: ID): Order

    suspend fun addOrder(userId: ID, order: AddOrderInput): Order

    suspend fun editOrder(userId: ID, order: EditOrderInput): Order

    suspend fun deleteOrder(userId: ID, orderId: ID): Order

    suspend fun applyOrder(userId: ID, orderId: ID): Order
}
