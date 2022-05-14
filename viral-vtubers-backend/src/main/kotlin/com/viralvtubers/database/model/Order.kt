package com.viralvtubers.database.model

import com.viralvtubers.database.serializer.DateSerializer
import com.viralvtubers.graphql.data.Subcategory
import kotlinx.serialization.Contextual
import org.litote.kmongo.Id
import org.litote.kmongo.newId
import java.util.*

@kotlinx.serialization.Serializable(with = DateSerializer::class)
data class Order(
    @Contextual override val _id: Id<Order> = newId(),
    val subcategoryId: Id<Subcategory>,
    val name: String,
    val description: String,
    val bounty: Double,
    val isDraft: Boolean,
    val isComment: Boolean,
    val image: String,
    val tags: List<Id<User>>,
    val applications: List<Id<User>>,
    val ownerId: Id<User>,
    val artistId: Id<User>?,
    val createdDate: Date,
) : Model<Order>
