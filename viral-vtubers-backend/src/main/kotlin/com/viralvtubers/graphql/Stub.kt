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
        1,
        "https://picsum.photos/200",
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

val stubProduct = { id: String ->
    Product(
        ID(id),
        "Fake Product",
        "Fake Product Short Description",
        titleImage = "fakeImage.png",
        images = listOf("fakeImage.png"),
        vrm = "fakeVRM.vrm",
        numLikes = 12,
        variants = listOf(
            ProductVariant(
                id = ID("productVariant1"),
                name = "Fake Product Variant 1",
                price = 10.0,
                file = "fake_file.vrm",
                fileTypes = listOf(".vrm"),
                productId = ID("fake_product_id")
            ),
            ProductVariant(
                id = ID("productVariant2"),
                name = "Fake Product Variant 2",
                price = 20.0,
                file = "fake_files.zip",
                fileTypes = listOf(".vrm", ".vroid"),
                productId = ID("fake_product_id")
            ),
        ),
        artistId = ID("fake_artist_id"),
        subcategoryId = ID("fake_subcategory_id"),
        minPrice = 12.0,
        tags = ArrayList()
    )
}

fun stubProductVariant(id: String): ProductVariant = ProductVariant(
    id = ID(id),
    name = "Fake Product Variant",
    price = 10.0,
    file = "fake_files.zip",
    fileTypes = listOf(".vrm", ".vroid"),
    productId = ID("fake_product_id")
)

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

val stubOrder = { id: String ->
    Order(
        ID(id),
        "Fake Order",
        "Fake Order Description",
        99.99,
        false,
        "fakeImage.png",
        ArrayList()
    )
}

val stubCart = { ->
    Cart(
        2,
        99.99
    )
}

val stubCarts = { ->
    Carts(
        4,
        listOf(
            stubCart(), stubCart()
        )
    )
}

val stubPurchase = { ->
    Purchase(
        2,
        99.99,
        Date(),
    )
}
