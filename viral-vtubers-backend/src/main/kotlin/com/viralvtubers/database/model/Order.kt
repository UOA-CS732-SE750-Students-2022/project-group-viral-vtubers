package com.viralvtubers.database.model

import com.viralvtubers.database.serializer.DateSerializer
import kotlinx.serialization.Contextual
import kotlinx.serialization.Serializable
import org.litote.kmongo.Id
import org.litote.kmongo.newId
import java.util.*

@Serializable
data class Order(
    @Contextual override val _id: Id<Order> = newId(),
    val subcategoryId: @Contextual Id<Subcategory>,
    val name: String,
    val description: String,
    val bounty: Double,
    val isDraft: Boolean,
    val isComment: Boolean,
    val image: String,
    val tags: List<@Contextual Id<User>>,
    val applications: List<@Contextual Id<User>>,
    val ownerId: @Contextual Id<User>,
    val artistId: @Contextual Id<User>?,
    val createdDate: @Serializable(with = DateSerializer::class) Date,
) : Model<Order>
