package com.viralvtubers.graphql.data

data class Order(
    val id: ID,
    val name: String,
    val description: String,
//  val tags: List<Tag>,
    val bounty: Double,
    val isDraft: Boolean,
//  val applications: List<User>
)

data class OrderPagination(
    val edges: OrderEdges,
    val pageInfo: PageInfo,
)

data class OrderEdges(
    val cursor: String,
    val node: List<Order>,
)
