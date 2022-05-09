package com.viralvtubers.database.model

import com.viralvtubers.database.serializer.DateSerializer
import kotlinx.serialization.Contextual
import org.litote.kmongo.Id
import org.litote.kmongo.newId
import java.util.*

@kotlinx.serialization.Serializable(with = DateSerializer::class)
data class Mail(
    @Contextual override val _id: Id<Product> = newId(),
    val senderId: Id<User>,
    val receiverId: Id<User>,
    val title: String,
    val body: String,
    val date: Date,
    val isRead: Boolean,
) : Model<Product>
