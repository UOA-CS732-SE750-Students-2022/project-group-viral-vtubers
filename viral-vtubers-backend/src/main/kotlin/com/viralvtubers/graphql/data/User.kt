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
//  val followers: Collection<ID>,
//  val following: Collection<ID>,

//  ignore fields
    val tags: List<ID>
)


data class UserFilter(
    val search: String?,
)

data class UserSort(
    val name: SortEnum?,
    val numLikes: SortEnum?,
    val numCompletedCommissions: SortEnum?,
)


data class UserPagination(
    val edges: List<UserEdge>,
    val pageInfo: PageInfo,
)

data class UserEdge(
    val cursor: String,
    val node: User,
)
