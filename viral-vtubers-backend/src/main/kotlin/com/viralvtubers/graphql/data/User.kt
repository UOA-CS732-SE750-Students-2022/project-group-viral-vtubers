package com.viralvtubers.graphql.data

data class User(
    val id: ID,
    val displayName: String,
    val email: String,
    val bio: String,
    val completedCommissions: Int,
    val likes: Int,
//  val following: Boolean,
//  val tags: List<Tag>,
    val profileImageURI: String,
//  val services: List<Service>,
//  val products: List<Product>,
//  val inbox: List<Mail>,
//  val sent: List<Mail>,
)

data class UserPagination(
    val edges: UserEdges,
    val pageInfo: PageInfo,
)

data class UserEdges(
    val cursor: String,
    val node: List<User>,
)
