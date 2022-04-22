package com.viralvtubers.database.model

data class Service (
    val name: String,
    val priceValue: Float,
    val pricePerUnit: PerUnit,
    val description: String,
) {
    enum class PerUnit {
        Hour,
        Each,
    }
}
