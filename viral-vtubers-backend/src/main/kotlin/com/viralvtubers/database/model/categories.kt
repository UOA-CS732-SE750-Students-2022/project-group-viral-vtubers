package com.viralvtubers.database.model

data class Subcategory (
    val id: Id<Subcategory>,
    val parent: Category,
    val name: String,
    val products: Array<Product>,
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as Subcategory

        if (id != other.id) return false

        return true
    }

    override fun hashCode(): Int {
        return id.hashCode()
    }
}

data class Category (
    val id: Id<Category>,
    val name: String,
    val subcategories: Array<Subcategory>,
    val products: Array<Product>,
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as Category

        if (id != other.id) return false

        return true
    }

    override fun hashCode(): Int {
        return id.hashCode()
    }
}
