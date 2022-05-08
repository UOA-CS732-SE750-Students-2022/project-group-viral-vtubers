package com.viralvtubers.database.model

import org.litote.kmongo.Id

interface Model<T> {
    val _id: Id<T>
}
