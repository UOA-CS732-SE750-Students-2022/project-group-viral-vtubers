package com.viralvtubers.graphql.data

enum class PriceEnum {
  HOUR, EACH, POA
}

data class Service(
  val id: ID,
  val name: String,
  val price: Double,
  val priceType: PriceEnum,
  val description: String
)
