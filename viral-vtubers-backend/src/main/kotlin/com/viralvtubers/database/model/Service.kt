package com.viralvtubers.database.model

import kotlinx.serialization.Contextual
import org.litote.kmongo.Id
import org.litote.kmongo.newId

@kotlinx.serialization.Serializable
data class Service(
    @Contextual override val _id: Id<Service> = newId(),
    val name: String,
    val priceValue: Double,
    val pricePerUnit: PricePerUnit,
    val description: String,
) : Model<Service> {
    enum class PricePerUnit {
        // Price per hour
        Hour,

        // Price per each
        Each,

        // Price on ask - price value does not matter
        PoA,
    }
}
