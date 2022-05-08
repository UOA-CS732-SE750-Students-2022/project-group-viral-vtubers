package com.viralvtubers.service

import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.UserRecord
import com.viralvtubers.graphql.data.ID


class FirebaseServiceImpl : FirebaseService {
    private val firebaseAuth: FirebaseAuth = FirebaseAuth.getInstance()

    override fun getUser(uid: String): UserRecord {
        return firebaseAuth.getUser(uid)
    }

    override fun setCustomClaims(uid: String, userId: ID) {
        val claims: MutableMap<String, Any> = HashMap()
        claims["userId"] = userId.value
        firebaseAuth.setCustomUserClaims(uid, claims)
    }
}
