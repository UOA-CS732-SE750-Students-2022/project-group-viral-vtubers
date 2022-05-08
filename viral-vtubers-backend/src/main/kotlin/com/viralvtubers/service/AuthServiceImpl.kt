package com.viralvtubers.service

import com.apurebase.kgraphql.Context
import com.google.firebase.auth.FirebaseAuth
import com.viralvtubers.graphql.data.ID
import io.ktor.server.auth.jwt.*

class AuthServiceImpl : AuthService {
    private val firebaseAuth: FirebaseAuth = FirebaseAuth.getInstance()
    private val cacheUserId = HashMap<String, ID>()

    override fun getUserId(ctx: Context): ID {
        val uid = ctx.get<JWTPrincipal>()?.subject
            ?: throw error("jwt is empty")

        // it exists now
        ctx.get<JWTPrincipal>()?.get("userId")?.let {
            cacheUserId.remove(uid)
            return ID(it)
        }

        // check cache if it exists
        if (cacheUserId.contains(uid)) {
            return cacheUserId[uid]!!
        }

        firebaseAuth.getUser(uid).customClaims["userId"]?.let {
            cacheUserId[uid] = ID(it as String)
            return ID(it)
        } ?: throw error("user not found")
    }
}
