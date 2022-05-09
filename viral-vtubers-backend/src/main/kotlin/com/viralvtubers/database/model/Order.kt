package com.viralvtubers.database.model

import com.viralvtubers.database.serializer.DateSerializer
import kotlinx.serialization.Contextual
import org.litote.kmongo.Id
import org.litote.kmongo.newId
import java.util.*

@kotlinx.serialization.Serializable(with = DateSerializer::class)
data class Order(
    @Contextual override val _id: Id<Product> = newId(),
    val name: String,
    val description: String,
    val bounty: Double,
    val isDraft: Boolean,
    val image: String,
    val tags: List<Id<User>>,
    val applications: List<Id<User>>,
    val createdDate: Date,
) : Model<Product>
