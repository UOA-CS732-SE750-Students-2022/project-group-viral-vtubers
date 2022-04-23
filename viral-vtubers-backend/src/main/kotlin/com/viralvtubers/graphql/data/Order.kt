package com.viralvtubers.graphql.data

data class Order(
  val id: String, 
  val name: String, 
  val description: String,
  val tags: List<Tag>,
  val bounty: Double,
  val applications: List<User>
)
