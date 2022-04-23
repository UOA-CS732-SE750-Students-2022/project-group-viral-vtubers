package com.viralvtubers.graphql.data

import java.util.*

data class Mail(
  val id: String, 
//  val sender: User,
//  val receiver: User,
  val title: String,
  val body: String,
  val date: Date,
  val read: Boolean,
)
