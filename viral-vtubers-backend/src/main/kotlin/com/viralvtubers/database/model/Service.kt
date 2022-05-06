package com.viralvtubers.database.model

import org.bson.codecs.pojo.annotations.BsonId
import org.litote.kmongo.Id

@kotlinx.serialization.Serializable
data class Service (
    @BsonId val id: Id<Service>,
    val name: String,
    val priceValue: Double,
    val pricePerUnit: PricePerUnit,
    val description: String,
) {
    enum class PricePerUnit {
        // Price per hour
        Hour,

        // Price per each
        Each,

        // Price on ask - price value does not matter
        PoA,
    }
}
