package com.viralvtubers.mapper

import com.viralvtubers.database.mongo.repositories.Page
import com.viralvtubers.graphql.data.*
import com.viralvtubers.database.model.Service as ServiceModel
import com.viralvtubers.database.model.User as UserModel

fun UserModel.map() = User(
    id = _id.map(),
    displayName = displayName,
    email = email,
    bio = bio,
    status = status,
    numCompletedCommissions = numCompletedCommissions,
    services = services.map { it.map() },
    profileImageURI = profileImageURI,
    tags = tags.map { it.map() }
)

fun ServiceModel.map() = Service(
    id = _id.map(),
    name = name,
    price = priceValue,
    priceType = pricePerUnit.map(),
    description = description,
)

fun ServiceModel.PricePerUnit.map() = when (this) {
    ServiceModel.PricePerUnit.Hour -> PriceEnum.HOUR
    ServiceModel.PricePerUnit.Each -> PriceEnum.EACH
    ServiceModel.PricePerUnit.PoA -> PriceEnum.POA
}

fun Service.map() = ServiceModel(
    _id = id.map(),
    name = name,
    priceValue = price,
    pricePerUnit = priceType.map(),
    description = description,
)

fun PriceEnum.map() = when (this) {
    PriceEnum.HOUR -> ServiceModel.PricePerUnit.Hour
    PriceEnum.EACH -> ServiceModel.PricePerUnit.Each
    PriceEnum.POA -> ServiceModel.PricePerUnit.PoA
}

fun Page<UserModel>.map() = UserPagination(
    edges = items.map {
        UserEdge(
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
