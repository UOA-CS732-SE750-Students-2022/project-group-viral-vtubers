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
        "Fake SubCategory"
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
        "fakeImage.png",
        "fakeVRM.vrm",
        12,
        variants = listOf(
            ProductVariant(
                id = ID("productVariant1"),
                name = "Fake Product Variant 1",
                price = 10.0,
                files = listOf(".vrm"),
                fileName = "fake_file.vrm"
            ),
            ProductVariant(
                id = ID("productVariant2"),
                name = "Fake Product Variant 2",
                price = 20.0,
                files = listOf(".vrm", ".vroid"),
                fileName = "fake_files.zip"
            ),
        )
    )
}

fun stubProductVariant(id: String): ProductVariant = ProductVariant(
    id = ID(id),
    name = "Fake Product Variant",
    price = 10.0,
    files = listOf("fake_file.vrm", "fake_file.vroid"),
    fileName = "fake_file.zip"
)

val stubMail = { id: String ->
    Mail(
        ID(id),
        "Fake Mail",
        "Fake Mail Body",
        Date(),
        false,
    )
}

val stubProductPagination = { products: List<Product> ->
    ProductPagination(
        ProductEdges(
            "fake_cursor",
            products
        ),
        PageInfo(
            "fake_start_cursor",
            "fake_end_cursor",
            false,
        ),
    )
}

val stubUserPagination = { users: List<User> ->
    UserPagination(
        UserEdges(
            "fake_cursor",
            users
        ),
        PageInfo(
            "fake_start_cursor",
            "fake_end_cursor",
            false,
        ),
    )
}

val stubOrderPagination = { orders: List<Order> ->
    OrderPagination(
        OrderEdges(
            "fake_cursor",
            orders
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
    )
}

val stubCart = {
    Cart(
        2,
        99.99
    )
}

val stubCarts = {
    Carts(
        4,
        listOf(
            stubCart(), stubCart()
        )
    )
}

val stubPurchase = {
    Purchase(
        2,
        99.99,
        Date(),
    )
}
