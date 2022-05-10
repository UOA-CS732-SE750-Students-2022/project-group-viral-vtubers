package com.viralvtubers.database.model

import com.viralvtubers.database.serializer.DateSerializer
import kotlinx.serialization.Contextual
import org.litote.kmongo.Id
import org.litote.kmongo.newId
import java.util.*

@kotlinx.serialization.Serializable(with = DateSerializer::class)
data class Like(
    @Contextual override val _id: Id<Like> = newId(),
    val currentId: Id<User>,
    val productId: Id<Product>,
    val artistId: Id<User>,
    val createdDate: Date,
) : Model<Like>
