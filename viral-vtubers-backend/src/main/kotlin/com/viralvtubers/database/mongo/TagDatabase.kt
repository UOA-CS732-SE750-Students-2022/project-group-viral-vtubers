package com.viralvtubers.database.mongo

import com.viralvtubers.database.model.Tag
import kotlinx.coroutines.flow.Flow
import org.litote.kmongo.Id

interface TagDatabase {
    fun getTags(tagIds: Collection<Id<Tag>>): Flow<Tag>
}