package com.viralvtubers.database

import com.viralvtubers.database.model.*
import kotlinx.coroutines.flow.Flow
import org.litote.kmongo.Id

interface Database {
    fun getUsers(userIds: Collection<Id<User>>): Flow<User>

    fun getTags(tagIds: Collection<Id<Tag>>): Flow<Tag>

    fun getProducts(productIds: Collection<Id<Product>>): Flow<Product>

    fun getCategoryIds(categoryIds: Collection<Id<Category>>): Flow<Category>

    fun getSubcategories(subcategoryIds: Collection<Id<Subcategory>>): Flow<Subcategory>
}