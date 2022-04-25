package com.viralvtubers.graphql.schema

import com.apurebase.kgraphql.schema.dsl.SchemaBuilder
import com.viralvtubers.graphql.data.AgeRestriction
import com.viralvtubers.graphql.data.ID
import com.viralvtubers.graphql.data.Other
import com.viralvtubers.graphql.data.PriceEnum
import java.text.SimpleDateFormat
import java.util.*

fun SchemaBuilder.scalarSchema() {
    stringScalar<ID> {
        deserialize = { id: String -> ID(id) }
        serialize = ID::value
    }

    enum<PriceEnum> {
        description = "PriceType"
        value(PriceEnum.HOUR) {
            description = "price per hour"
        }
        value(PriceEnum.EACH) {
            description = "price for each"
        }
    }

    enum<AgeRestriction> {
        description = "AgeRestriction"
        value(AgeRestriction.ALL_AGE) {
            description = "all age"
        }
        value(AgeRestriction.FOR_ADULT_INCLUDED) {
            description = "for adult included"
        }
        value(AgeRestriction.FOR_ADULT) {
            description = "for adult"
        }
    }

    enum<Other> {
        description = "Other"
        value(Other.ANIME) {
            description = "anime"
        }
    }

    stringScalar<Date> {
        name = "DateTime"
        serialize = { date ->
            SimpleDateFormat("yyyy-MM-dd'T'HH:mmZ").format(date)
        }
        deserialize = { dateString ->
            SimpleDateFormat("yyyy-MM-dd'T'HH:mmZ").parse(dateString)
        }
    }
}
