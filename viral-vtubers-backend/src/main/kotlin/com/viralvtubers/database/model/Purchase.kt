package com.viralvtubers.database.model

import com.viralvtubers.database.serializer.DateSerializer
import kotlinx.serialization.Contextual
import org.litote.kmongo.Id
import org.litote.kmongo.newId
import java.util.*

@kotlinx.serialization.Serializable(with = DateSerializer::class)
data class Purchase(
    @Contextual override val _id: Id<Purchase> = newId(),
    val userId: Id<User>,
    val sellerId: Id<User>,
    val products: List<PurchaseItem>,
    val totalAmount: Double,
    val createdDate: Date,
) : Model<Purchase>

@kotlinx.serialization.Serializable
data class PurchaseItem(
    val productId: Id<Product>,
    val variantId: Id<ProductVariant>
)
