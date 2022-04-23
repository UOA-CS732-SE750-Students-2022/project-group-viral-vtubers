package com.viralvtubers.graphql.data

data class User(
    val id: String,
    val displayName: String,
    val email: String,
    val bio: String,
    val completedCommissions: Int,
    val likes: Int,
//    val tags: List<Tag>,
    val profileImageURI: String,
//    val services: List<Service>,
//    val products: List<Product>,
//    val inbox: List<Mail>,
//    val sent: List<Mail>,
)
