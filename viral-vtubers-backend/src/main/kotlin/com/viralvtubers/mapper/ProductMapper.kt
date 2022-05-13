package com.viralvtubers.mapper

import com.viralvtubers.database.mongo.repositories.Page
import com.viralvtubers.graphql.data.PageInfo
import com.viralvtubers.graphql.data.ProductEdge
import com.viralvtubers.graphql.data.ProductPagination
import com.viralvtubers.database.model.Product as DataProduct
import com.viralvtubers.database.model.ProductVariant as DataProductVariant
import com.viralvtubers.graphql.data.Product as GraphQLProduct
import com.viralvtubers.graphql.data.ProductVariant as GraphQLProductVariant

fun DataProduct.map() = GraphQLProduct(
    id = _id.map(),
    name = name,
    description = description,
    titleImage = titleImage,
    images = images,
    vrm = vrm,
    variants = variants.map { it.map() },
    subcategoryId = subcategory.map(),
    artistId = artistId.map(),
    minPrice = 12.0,
    tags = tags.map { it.map() }
)

fun DataProductVariant.map() = GraphQLProductVariant(
    id = _id.map(),
    name = name,
    price = price,
    file = file,
    fileName = fileName,
    fileTypes = fileTypes,
    productId = productId.map(),
)

fun Page<DataProduct>.map() = ProductPagination(
    edges = items.map {
        ProductEdge(
            cursor = it._id.toString(),
            node = it.map()
        )
    }.toList(),
    pageInfo = PageInfo(
        startCursor = start?.toString() ?: "",
        endCursor = end?.toString() ?: "",
        hasNextPage = hasNext,
    ),
)
