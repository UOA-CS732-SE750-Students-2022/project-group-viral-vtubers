package com.viralvtubers.mapper

import com.viralvtubers.graphql.data.ID
import com.viralvtubers.graphql.data.Order
import org.litote.kmongo.util.idValue
import com.viralvtubers.database.model.Order as OrderModel

fun OrderModel.map() = Order(
    id = ID(value = _id.idValue.toString()),
    name = name,
    description = description,
    bounty = bounty,
    isDraft = isDraft,
    image = image,
    tags = tags.map { it.map() },
    applications = applications.map { it.map() }
)
