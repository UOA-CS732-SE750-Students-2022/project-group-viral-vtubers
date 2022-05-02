package com.viralvtubers.mapper

import com.viralvtubers.database.model.Product as DataProduct
import com.viralvtubers.database.model.ProductVariant as DataProductVariant
import com.viralvtubers.graphql.data.Product as GraphQLProduct
import com.viralvtubers.graphql.data.ProductVariant as GraphQLProductVariant

fun DataProduct.map() = GraphQLProduct(
    id = id.map(),
    name = name,
    description = description,
    titleImage = titleImage,
    images = images,
    vrm = vrm,
    numLikes = numLikes,
    variants = variants.map { it.map() }
)

fun DataProductVariant.map() = GraphQLProductVariant(
    id = id.map(),
    name = name,
    price = price,
    fileName = filename,
    files = files,
)
