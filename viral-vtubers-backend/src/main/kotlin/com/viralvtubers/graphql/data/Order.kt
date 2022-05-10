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
//  val owner: User,
//  val artist: User?,

//  ignore fields
    val ownerId: ID,
    val artistId: ID?,

    val tags: List<ID>,
    val applications: List<ID>
)

data class MyOrder(
    val active: List<Order>,
    val past: List<Order>
)

data class MyCommission(
    val pending: List<Order>,
    val won: List<Order>,
    val lost: List<Order>,
)

data class OrderPagination(
    val edges: List<OrderEdge>,
    val pageInfo: PageInfo,
)

data class OrderEdge(
    val cursor: String,
    val node: Order,
)

data class OrderFilter(
    val search: String?,
    val minBounty: Double?,
    val maxBounty: Double?
)

data class OrderSort(
    val name: SortEnum?,
    val createdDate: SortEnum?,
    val bounty: SortEnum?,
)
