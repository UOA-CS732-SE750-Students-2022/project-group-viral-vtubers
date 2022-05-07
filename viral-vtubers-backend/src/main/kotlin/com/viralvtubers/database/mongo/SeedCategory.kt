package com.viralvtubers.database.mongo

import com.viralvtubers.database.model.Category
import com.viralvtubers.database.model.Subcategory
import com.viralvtubers.database.mongo.repositories.CategoryRepository
import com.viralvtubers.database.mongo.repositories.SubcategoryRepository
import org.bson.types.ObjectId
import org.litote.kmongo.Id
import org.litote.kmongo.id.toId

suspend fun MongoDatabase.initCategories(
    categoryRepository: CategoryRepository,
    subcategoryRepository: SubcategoryRepository
) {
    val dressId: Id<Category> =
        ObjectId("6276deb5fbc3a8262a1448e3").toId()
    val wholeId: Id<Category> =
        ObjectId("6276deba664188e065aac48c").toId()
    val accessoriesId: Id<Category> =
        ObjectId("6276debd33169090868b0ec6").toId()
    val backgroundsId: Id<Category> =
        ObjectId("6276debfe2c0e399550e3f8c").toId()

    val categories = listOf(
        Category(
            _id = dressId,
            name = "Dress",
            subcategoryIds = listOf(
                "6276e19ad8adca914945452b",
                "6276e19ff6ee17c6d0588580",
                "6276e1a1a2a08dff269dad8f",
                "6276e1a4142753f1de2bc414"
            ).map { ObjectId(it).toId() }
        ),
        Category(
            _id = wholeId,
            name = "Model",
            subcategoryIds = listOf(
                "6276e760a2e6d3b9f72167af",
                "6276e191547ce5a4451ba997",
                "6276e194853d95e5f129867c",
                "6276e197d37998da92ef62d6"
            ).map { ObjectId(it).toId() }
        ),
        Category(
            _id = accessoriesId,
            name = "Accessories",
            subcategoryIds = listOf(
                "6276e1849bc433f69c0c9274",
                "6276e1892b1a01f1a0e9cd1d",
                "6276e18d50227e22ca04bd9b",
            ).map { ObjectId(it).toId() }
        ),
        Category(
            _id = backgroundsId,
            name = "Background",
            subcategoryIds = listOf(
                "6276e17c6f9b80b4dfc39b76",
                "6276e17a8b5045e6e89e4cbe",
                "6276e1775b88444da7db6f74",
                "6276e1747a6ff946dbf839d1"
            ).map { ObjectId(it).toId() }
        )
    )

    categories.map { categoryRepository.upsert(it) }

    listOf(
        Subcategory(
            _id = ObjectId("6276e19ad8adca914945452b").toId(),
            categoryId = dressId,
            name = "Top",
        ),
        Subcategory(
            _id = ObjectId("6276e19ff6ee17c6d0588580").toId(),
            categoryId = dressId,
            name = "Pants",
        ),
        Subcategory(
            _id = ObjectId("6276e1a1a2a08dff269dad8f").toId(),
            categoryId = dressId,
            name = "Footwear",
        ),
        Subcategory(
            _id = ObjectId("6276e1a4142753f1de2bc414").toId(),
            categoryId = dressId,
            name = "Underwear",
        )
    ).map { subcategoryRepository.upsert(it) }

    listOf(
        Subcategory(
            _id = ObjectId("6276e760a2e6d3b9f72167af").toId(),
            categoryId = wholeId,
            name = "Whole Model",
        ),
        Subcategory(
            _id = ObjectId("6276e191547ce5a4451ba997").toId(),
            categoryId = wholeId,
            name = "Hair",
        ),
        Subcategory(
            _id = ObjectId("6276e194853d95e5f129867c").toId(),
            categoryId = wholeId,
            name = "Face",
        ),
        Subcategory(
            _id = ObjectId("6276e197d37998da92ef62d6").toId(),
            categoryId = wholeId,
            name = "Body",
        )
    ).map { subcategoryRepository.upsert(it) }

    listOf(
        Subcategory(
            _id = ObjectId("6276e1849bc433f69c0c9274").toId(),
            categoryId = accessoriesId,
            name = "Tattoos",
        ),
        Subcategory(
            _id = ObjectId("6276e1892b1a01f1a0e9cd1d").toId(),
            categoryId = accessoriesId,
            name = "Hair Acc",
        ),
        Subcategory(
            _id = ObjectId("6276e18d50227e22ca04bd9b").toId(),
            categoryId = accessoriesId,
            name = "Hand Acc",
        )
    ).map { subcategoryRepository.upsert(it) }

    listOf(
        Subcategory(
            _id = ObjectId("6276e17c6f9b80b4dfc39b76").toId(),
            categoryId = backgroundsId,
            name = "Chairs",
        ),
        Subcategory(
            _id = ObjectId("6276e17a8b5045e6e89e4cbe").toId(),
            categoryId = backgroundsId,
            name = "Keyboard/Mouse",
        ),
        Subcategory(
            _id = ObjectId("6276e1775b88444da7db6f74").toId(),
            categoryId = backgroundsId,
            name = "Plants",
        ),
        Subcategory(
            _id = ObjectId("6276e1747a6ff946dbf839d1").toId(),
            categoryId = backgroundsId,
            name = "Other props",
        )
    ).map { subcategoryRepository.upsert(it) }


}
