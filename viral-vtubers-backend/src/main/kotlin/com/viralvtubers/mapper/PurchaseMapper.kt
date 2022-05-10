package com.viralvtubers.mapper

import com.viralvtubers.database.model.Purchase as DataPurchase
import com.viralvtubers.graphql.data.Purchase as GraphQLPurchase

fun DataPurchase.map() = GraphQLPurchase(
    id = _id.map(),
    numItems = products.size,
    placed = createdDate,
    sellerId = sellerId.map(),
    items = products.map { it.productId.map() },
    variants = products.map { it.variantId.map() },
    totalAmount = totalAmount,
)
