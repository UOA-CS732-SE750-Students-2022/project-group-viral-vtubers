package com.viralvtubers.graphql.input

data class SendMailInput(
    val receiverUserId: String,
    val title: String,
    val body: String,
)
