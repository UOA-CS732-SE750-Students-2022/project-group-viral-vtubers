package com.viralvtubers.database.model

import org.bson.codecs.pojo.annotations.BsonId
import org.litote.kmongo.Id
import org.litote.kmongo.newId

data class Tag(
    @BsonId val id: Id<Tag> = newId(),
    val name: String,
    val backgroundColor: String,
    val color: String,
)
