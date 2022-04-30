package com.viralvtubers.mapper

import com.viralvtubers.graphql.data.ID
import com.viralvtubers.graphql.data.Product
import org.litote.kmongo.util.idValue
import com.viralvtubers.database.model.Product as ProductModel

fun ProductModel.toProduct() = Product(
    id = ID(value = id.idValue.toString()),
    name = name,
    description = description,
    titleImage = titleImage,
    images = images,
    vrm = vrm,
    numLikes = numLikes.toInt(),
//    variants = variants,
)
