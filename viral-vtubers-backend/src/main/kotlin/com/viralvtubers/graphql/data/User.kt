package com.viralvtubers.graphql.data

data class User(
    val id: ID,
    val displayName: String,
    val email: String,
    val bio: String,
    val status: String,
    val numCompletedCommissions: Int,
    val numLikes: Int,
//  val isFollowing: Boolean,
//  val tags: List<Tag>,
    val profileImageURI: String,
//  val services: List<Service>,
//  val products: List<Product>,
//  val inbox: List<Mail>,
//  val sent: List<Mail>,
//    val followers: Collection<ID>,
//    val following: Collection<ID>,
)

data class UserPagination(
    val edges: UserEdges,
    val pageInfo: PageInfo,
)

data class UserEdges(
    val cursor: String,
    val node: List<User>,
)
