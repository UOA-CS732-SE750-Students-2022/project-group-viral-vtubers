package com.viralvtubers.mapper

import com.viralvtubers.database.model.Category as DataCategory
import com.viralvtubers.database.model.Subcategory as DataSubcategory
import com.viralvtubers.graphql.data.Category as GraphQLCategory
import com.viralvtubers.graphql.data.Subcategory as GraphQLSubcategory


fun DataCategory.map() = GraphQLCategory(id = _id.map(), name = name)

fun DataSubcategory.map() =
    GraphQLSubcategory(
        id = _id.map(),
        name = name,
        categoryId = categoryId.map()
    )

