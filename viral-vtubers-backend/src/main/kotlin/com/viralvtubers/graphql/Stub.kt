package com.viralvtubers.graphql

import com.viralvtubers.graphql.data.*
import java.util.*

val stubUser = { id: String ->
    User(
        id,
        "Fake User",
        "fake@user.com",
        "Fake bio",
        1,
        1,
        "https://picsum.photos/200",
    )
}

val stubTag = { id: String ->
    Tag(
        id,
        "Fake Tag"
    )
}

val stubService = { id: String ->
    Service(
        id,
        "Fake Service",
        99.99,
        PriceEnum.HOUR,
        "Fake Service Description"
    )
}

val stubProduct = {id: String ->
    Product(
        id,
        "Fake Product",
        "Fake Product Short Description",
        "fakeVRM.vrm",
        99.99,
    )
}

val stubMail = {id: String ->
    Mail(
        id,
        "Fake Mail",
        "Fake Mail Body",
        Date(),
        false,
    )
}
