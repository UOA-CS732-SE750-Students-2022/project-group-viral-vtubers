package com.viralvtubers.graphql.data

enum class PriceEnum {
  HOUR, EACH
}

data class Service(
  val id: String, 
  val name: String, 
  val price: Double, 
  val priceType: PriceEnum,
  val description: String
)
