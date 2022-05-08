package com.viralvtubers.database.model

import kotlinx.serialization.Contextual
import org.litote.kmongo.Id
import org.litote.kmongo.newId

@kotlinx.serialization.Serializable
data class Follow(
    @Contextual override val _id: Id<Follow> = newId(),
    val currentId: Id<User>,
    val followingId: Id<User>,
) : Model<Follow>
