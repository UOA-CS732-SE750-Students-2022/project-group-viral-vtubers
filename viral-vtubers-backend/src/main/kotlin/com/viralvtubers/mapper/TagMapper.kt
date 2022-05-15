package com.viralvtubers.mapper

import com.viralvtubers.graphql.data.Tag
import com.viralvtubers.database.model.Tag as TagModel

fun TagModel.map() = Tag(
    id = _id.map(),
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
