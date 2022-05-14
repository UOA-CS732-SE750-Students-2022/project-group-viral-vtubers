package com.viralvtubers.graphql

import com.viralvtubers.graphql.data.*
import java.util.*

val stubUser = { id: String ->
    User(
        ID(id),
        "Fake User",
        "fake@user.com",
        "Fake bio",
        "Fake status",
        1,
        "https://picsum.photos/200",
        ArrayList(),
        ArrayList()
    )
}

val stubTag = { id: String ->
    Tag(
        ID(id),
        "Fake Tag",
        "#5FDDEF",
        "#EEEEEE",
    )
}

val stubService = { id: String ->
    Service(
        ID(id),
        "Fake Service",
        99.99,
        PriceEnum.HOUR,
        "Fake Service Description"
    )
}

val stubSubcategory = { id: String ->
    Subcategory(
        ID(id),
        "Fake SubCategory",
        ID("fake_subcategory_id")
    )
}

val stubCategory = { id: String ->
    Category(
        ID(id),
        "Fake Category"
    )
}

val stubMail = { id: String ->
    Mail(
        ID(id),
        "Fake Mail",
        "Fake Mail Body",
        Date(),
        false,
        ID("fake_sender_id"),
        ID("fake_receiver_id"),
    )
}

val stubProductPagination = { product: Product ->
    ProductPagination(
        listOf(
            ProductEdge(
                "fake_cursor",
                product
            )
        ),
        PageInfo(
            "fake_start_cursor",
            "fake_end_cursor",
            false,
        ),
    )
}

val stubUserPagination = { user: User ->
    UserPagination(
        listOf(
            UserEdge(
                "fake_cursor",
                user
            )
        ),
        PageInfo(
            "fake_start_cursor",
            "fake_end_cursor",
            false,
        ),
    )
}

val stubOrderPagination = { order: Order ->
    OrderPagination(
        listOf(
            OrderEdge(
                "fake_cursor",
                order
            )
        ),
        PageInfo(
            "fake_start_cursor",
            "fake_end_cursor",
            false,
        ),
    )
}

