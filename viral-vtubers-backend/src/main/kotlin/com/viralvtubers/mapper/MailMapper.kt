package com.viralvtubers.mapper

import com.viralvtubers.database.model.Mail as DataMail
import com.viralvtubers.graphql.data.Mail as GraphQLMail

fun DataMail.map() = GraphQLMail(
    id = _id.map(),
    title = title,
    body = body,
    date = date,
    isRead = isRead,
    senderId = senderId.map(),
    receiverId = receiverId.map()
)
