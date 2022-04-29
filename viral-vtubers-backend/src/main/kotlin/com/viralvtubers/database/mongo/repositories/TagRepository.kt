package com.viralvtubers.database.mongo.repositories

import com.mongodb.client.model.Aggregates.match
import com.mongodb.reactivestreams.client.MongoCollection
import com.mongodb.reactivestreams.client.MongoDatabase
import com.viralvtubers.database.model.Tag
import com.viralvtubers.database.mongo.TagDatabase
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.reactive.asFlow
import org.litote.kmongo.Id
import org.litote.kmongo.`in`
import org.litote.kmongo.reactivestreams.getCollection

class TagRepository(database: MongoDatabase) : TagDatabase {

    private val tags: MongoCollection<Tag> = database.getCollection()

    override fun getTags(tagIds: Collection<Id<Tag>>): Flow<Tag> = this.tags.find(match(Tag::id `in` tagIds)).asFlow()
}