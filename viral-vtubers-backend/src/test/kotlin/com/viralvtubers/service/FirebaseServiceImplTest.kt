package com.viralvtubers.service;

import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.UserRecord
import com.viralvtubers.graphql.data.ID
import io.mockk.*
import io.mockk.impl.annotations.InjectMockKs
import io.mockk.impl.annotations.MockK
import org.junit.Before
import org.junit.Test
import org.junit.jupiter.api.Disabled
import kotlin.test.assertEquals

class FirebaseServiceImplTest {
    @InjectMockKs
    lateinit var firebaseService: FirebaseServiceImpl

    @MockK
    lateinit var firebaseAuth: FirebaseAuth

    @Before
    fun setup() = MockKAnnotations.init(this)

    @Test
    fun testGetUser() {
        val userId = "123"
        val mockUserRecord = mockkClass(UserRecord::class)

        every { firebaseAuth.getUser(userId) } returns mockUserRecord

        val user = firebaseService.getUser(userId)
        assertEquals(mockUserRecord, user)
    }

    @Test
    @Disabled // unfinished
    fun testSetCustomClaims() {
        val uid = "123"
        val userId = ID("abc")
        val uidCapture = slot<String>()
        val claimsCapture = slot<Map<String, String>>()

        firebaseService.setCustomClaims(uid, userId)

        verify { firebaseAuth.setCustomUserClaims(capture(uidCapture), capture(claimsCapture)) }
    }
}
