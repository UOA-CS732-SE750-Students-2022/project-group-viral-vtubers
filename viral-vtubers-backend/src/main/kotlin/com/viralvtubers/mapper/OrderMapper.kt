package com.viralvtubers.mapper

import com.viralvtubers.database.mongo.repositories.Page
import com.viralvtubers.graphql.data.*
import com.viralvtubers.database.model.Order as OrderModel

fun OrderModel.map() = Order(
    id = _id.map(),
    subcategoryId = subcategoryId.map(),
    name = name,
    description = description,
    bounty = bounty,
    isDraft = isDraft,
    isComment = isComment,
    image = image,
    ownerId = ownerId.map(),
    artistId = artistId?.map(),
    tags = tags.map { it.map() },
    applications = applications.map { it.map() }
)

fun Page<OrderModel>.map() = OrderPagination(
    edges = items.map {
        OrderEdge(
            cursor = it._id.toString(),
            node = it.map()
        )
    }.toList(),
    pageInfo = PageInfo(
        startCursor = start?.toString() ?: "",
        endCursor = end?.toString() ?: "",
        hasNextPage = hasNext,
    ),
)
