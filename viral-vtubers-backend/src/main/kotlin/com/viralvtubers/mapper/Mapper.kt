package com.viralvtubers.mapper

import com.viralvtubers.graphql.data.ID
import org.bson.types.ObjectId
import org.litote.kmongo.Id
import org.litote.kmongo.id.toId

fun interface Mapper<From, To> {
    fun map(from: From): To
}

fun <T> Id<T>.map(): ID = ID(value = toString())

fun <T> ID.map(): Id<T> = ObjectId(value).toId()
