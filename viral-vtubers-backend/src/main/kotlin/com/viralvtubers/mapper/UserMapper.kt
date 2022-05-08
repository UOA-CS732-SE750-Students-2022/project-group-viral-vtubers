package com.viralvtubers.mapper

import com.viralvtubers.graphql.data.User
import com.viralvtubers.database.model.User as UserModel

fun UserModel.map() = User(
    id = _id.map(),
    displayName = displayName,
    email = email,
    bio = bio,
    status = status,
    numCompletedCommissions = numCompletedCommissions.toInt(),
    numLikes = numLikes.toInt(),
    profileImageURI = profileImageURI,
)
