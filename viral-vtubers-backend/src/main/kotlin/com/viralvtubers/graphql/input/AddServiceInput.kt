package com.viralvtubers.graphql.input

import com.viralvtubers.graphql.data.PriceEnum

data class AddServiceInput(
    val name: String,
    val price: Double,
    val priceType: PriceEnum,
    val description: String
)
