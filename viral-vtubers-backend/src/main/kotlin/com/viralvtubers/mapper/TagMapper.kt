package com.viralvtubers.mapper

import com.viralvtubers.graphql.data.ID
import com.viralvtubers.graphql.data.Tag
import org.litote.kmongo.util.idValue
import com.viralvtubers.database.model.Tag as TagModel

fun TagModel.toTag() = Tag(
    id = ID(value = id.idValue.toString()),
    name = name,
    backgroundColor = backgroundColor,
    color = color,
)
