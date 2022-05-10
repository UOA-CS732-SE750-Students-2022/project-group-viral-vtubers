package com.viralvtubers.database.model

import kotlinx.serialization.Contextual
import org.litote.kmongo.Id
import org.litote.kmongo.newId

@kotlinx.serialization.Serializable
data class Apply(
    @Contextual override val _id: Id<Apply> = newId(),
    val userId: Id<User>,
    val orderId: Id<Order>
) : Model<Apply>
