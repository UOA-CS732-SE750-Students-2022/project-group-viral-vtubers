package com.viralvtubers.database.model

import kotlinx.serialization.Contextual
import org.litote.kmongo.Id
import org.litote.kmongo.newId

@kotlinx.serialization.Serializable
data class Cart(
    @Contextual override val _id: Id<Cart> = newId(),
    val userId: Id<User>,
    val sellerId: Id<User>,
    val productId: Id<Product>,
    val variantId: Id<ProductVariant>
) : Model<Cart>
