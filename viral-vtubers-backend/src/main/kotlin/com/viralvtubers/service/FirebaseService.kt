package com.viralvtubers.service

import com.google.firebase.auth.UserRecord
import com.viralvtubers.graphql.data.ID

interface FirebaseService {
    fun getUser(uid: String): UserRecord

    fun setCustomClaims(uid: String, userId: ID)
}
