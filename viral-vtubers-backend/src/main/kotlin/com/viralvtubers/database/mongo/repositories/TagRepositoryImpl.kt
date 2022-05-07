package com.viralvtubers.database.mongo.repositories

import com.viralvtubers.database.model.Tag
import com.viralvtubers.database.mongo.MongoDatabase
import org.litote.kmongo.coroutine.CoroutineCollection

fun MongoDatabase.asTagRepository(): TagRepository = object : TagRepository {
    override val col: CoroutineCollection<Tag> = database.getCollection()
}

