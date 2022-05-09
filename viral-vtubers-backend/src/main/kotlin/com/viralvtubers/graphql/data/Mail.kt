package com.viralvtubers.graphql.data

import java.util.*

data class Mail(
    val id: ID,
//  val sender: User,
//  val receiver: User,
    val title: String,
    val body: String,
    val date: Date,
    val isRead: Boolean,

//  ignored fields
    val senderId: ID,
    val receiverId: ID,
)
