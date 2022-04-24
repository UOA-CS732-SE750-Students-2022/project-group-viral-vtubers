package com.viralvtubers.graphql.input

import com.viralvtubers.graphql.data.ID
import com.viralvtubers.graphql.data.PriceEnum

data class EditServiceInput(
    val id: ID,
    val name: String?,
    val price: Double?,
    val priceType: PriceEnum?,
    val description: String?
)
