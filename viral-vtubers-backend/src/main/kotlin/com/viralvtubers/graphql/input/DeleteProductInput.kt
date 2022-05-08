package com.viralvtubers.graphql.input

import com.viralvtubers.graphql.data.ID

data class DeleteProductVariant(
    val productId: ID,
    val id: ID,
)

