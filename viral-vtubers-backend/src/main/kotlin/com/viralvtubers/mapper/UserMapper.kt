package com.viralvtubers.mapper

import com.viralvtubers.graphql.data.ID
import com.viralvtubers.graphql.data.User
import org.litote.kmongo.util.idValue
import com.viralvtubers.database.model.User as UserModel

fun UserModel.map() = User(
    id = ID(value = _id.idValue.toString()),
    displayName = displayName,
    email = email,
    bio = bio,
    status = status,
    numCompletedCommissions = numCompletedCommissions.toInt(),
    numLikes = numLikes.toInt(),
    profileImageURI = profileImageURI,
)
