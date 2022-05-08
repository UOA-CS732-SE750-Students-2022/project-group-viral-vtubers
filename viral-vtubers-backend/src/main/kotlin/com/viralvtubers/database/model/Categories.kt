package com.viralvtubers.database.model

import kotlinx.serialization.Contextual
import org.litote.kmongo.Id
import org.litote.kmongo.newId

@kotlinx.serialization.Serializable
data class Subcategory(
    @Contextual override val _id: Id<Subcategory> = newId(),
    val categoryId: Id<Category>,
    val name: String,
) : Model<Subcategory>

@kotlinx.serialization.Serializable
data class Category(
    @Contextual override val _id: Id<Category> = newId(),
    val name: String,
    val subcategoryIds: List<Id<Subcategory>>,
) : Model<Category>
