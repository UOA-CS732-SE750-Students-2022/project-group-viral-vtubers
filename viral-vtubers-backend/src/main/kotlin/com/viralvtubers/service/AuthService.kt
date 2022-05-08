package com.viralvtubers.service

import com.apurebase.kgraphql.Context
import com.viralvtubers.graphql.data.ID

interface AuthService {
    fun getUserId(ctx: Context): ID
}
