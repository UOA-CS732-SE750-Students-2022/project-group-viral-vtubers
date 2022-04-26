package com.viralvtubers.graphql.schema

import com.apurebase.kgraphql.schema.dsl.SchemaBuilder
import com.viralvtubers.graphql.data.AgeRestrictionEnum
import com.viralvtubers.graphql.data.ID
import com.viralvtubers.graphql.data.OtherFiltersEnum
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

    enum<AgeRestrictionEnum> {
        description = "AgeRestrictionEnum"
        value(AgeRestrictionEnum.SFW_ONLY) {
            description = "SFW only"
        }
        value(AgeRestrictionEnum.ALL) {
            description = "all"
        }
        value(AgeRestrictionEnum.NSFW_ONLY) {
            description = "NSFW only"
        }
    }

    enum<OtherFiltersEnum> {
        description = "OtherFiltersEnum"
        value(OtherFiltersEnum.ANIME) {
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
