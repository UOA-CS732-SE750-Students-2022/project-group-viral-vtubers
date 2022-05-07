package com.viralvtubers.database.model

import kotlinx.serialization.Contextual
import org.litote.kmongo.Id
import org.litote.kmongo.newId

@kotlinx.serialization.Serializable
data class Tag(
    @Contextual override val _id: Id<Tag> = newId(),
    val name: String,
    val backgroundColor: String,
    val color: String,
) : Model<Tag>
