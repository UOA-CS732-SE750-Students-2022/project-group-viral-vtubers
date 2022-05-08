package com.viralvtubers.mapper

import com.viralvtubers.graphql.data.ID
import com.viralvtubers.graphql.data.Tag
import org.litote.kmongo.util.idValue
import com.viralvtubers.database.model.Tag as TagModel

fun TagModel.map() = Tag(
    id = ID(value = _id.idValue.toString()),
    name = name,
    backgroundColor = backgroundColor,
    color = color,
)

fun Tag.map() = TagModel(
    _id = id.map(),
    name,
    backgroundColor,
    color
)
