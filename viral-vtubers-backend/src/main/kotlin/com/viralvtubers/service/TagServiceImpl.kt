package com.viralvtubers.service

import com.viralvtubers.database.mongo.repositories.TagRepository
import com.viralvtubers.graphql.data.ID
import com.viralvtubers.graphql.data.Tag
import com.viralvtubers.mapper.map
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.toList

class TagServiceImpl(
    private val tagRepository: TagRepository
) : TagService {
    override suspend fun getTagsByIds(ids: List<ID>): List<Tag> {
        return tagRepository.getByIds(ids.map { it.map() }).map { it.map() }
            .toList()
    }

    override suspend fun getTagById(id: ID): Tag {
        return tagRepository.getById(id.map())?.map()
            ?: throw error("tag not found")
    }

    override suspend fun getAllTags(): List<Tag> {
        return tagRepository.getAll().map { it.map() }.toList()
    }
}
