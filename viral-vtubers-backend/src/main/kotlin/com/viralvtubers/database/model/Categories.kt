package com.viralvtubers.database.model

import kotlinx.serialization.Contextual
import org.litote.kmongo.Id
import org.litote.kmongo.newId

@kotlinx.serialization.Serializable
data class Subcategory(
    @Contextual override val _id: Id<Subcategory> = newId(),
    val categoryId: Id<Category>,
    val name: String,
) : Model<Subcategory> {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as Subcategory

        if (_id != other._id) return false

        return true
    }

    override fun hashCode(): Int {
        return _id.hashCode()
    }
}

@kotlinx.serialization.Serializable
data class Category(
    @Contextual override val _id: Id<Category> = newId(),
    val name: String,
    val subcategoryIds: List<Id<Subcategory>>,
) : Model<Category> {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as Category

        if (_id != other._id) return false

        return true
    }

    override fun hashCode(): Int {
        return _id.hashCode()
    }
}
