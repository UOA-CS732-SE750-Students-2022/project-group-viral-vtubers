package com.viralvtubers.service

import com.viralvtubers.graphql.data.ID
import com.viralvtubers.graphql.data.Tag

interface TagService {
    suspend fun getTagsByIds(ids: List<ID>): List<Tag>
    suspend fun getTagById(id: ID): Tag
}
