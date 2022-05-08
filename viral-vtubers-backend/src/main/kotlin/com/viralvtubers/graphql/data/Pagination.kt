package com.viralvtubers.graphql.data

// Pagination is based on https://www.apollographql.com/docs/react/pagination/cursor-based

data class PageInfo(
    val startCursor: String,
    val endCursor: String,
    val hasNextPage: Boolean,
)

// SchemaException: Generic types are not supported by GraphQL
// using normal types instead in respected files e.g. OrderEdge, UserEdge etc
//data class Edge<T>(
//    val cursor: String,
//    val node: T,
//)
