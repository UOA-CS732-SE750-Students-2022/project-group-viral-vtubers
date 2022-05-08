package com.viralvtubers.graphql.data

data class Order(
    val id: ID,
    val name: String,
    val description: String,
//  val tags: List<Tag>,
    val bounty: Double,
    val isDraft: Boolean,
    val image: String,
//  val applications: List<User>
)

data class OrderPagination(
    val edges: List<OrderEdge>,
    val pageInfo: PageInfo,
)

data class OrderEdge(
    val cursor: String,
    val node: Order,
)
