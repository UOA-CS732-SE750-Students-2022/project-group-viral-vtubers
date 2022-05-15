package com.viralvtubers.service

import com.apurebase.kgraphql.Context
import com.google.firebase.auth.FirebaseAuth
import io.ktor.server.auth.jwt.*
import io.mockk.MockKAnnotations
import io.mockk.every
import io.mockk.impl.annotations.InjectMockKs
import io.mockk.impl.annotations.MockK
import io.mockk.mockk
import junit.framework.TestCase.assertEquals
import org.junit.Before
import org.junit.Test
import org.junit.jupiter.api.assertThrows
import kotlin.test.assertNull

class AuthServiceImplTest {
    @MockK
    lateinit var firebaseAuth: FirebaseAuth

    @InjectMockKs
    lateinit var authService: AuthServiceImpl

    @Before
    fun setup() = MockKAnnotations.init(this)

    @Test
    fun testGetUserIdSuccessSecondTry() {
        // Prepare
        val context = mockk<Context>()
        val jwtPrincipal = mockk<JWTPrincipal>()
        val uid = "123"

        // Expect
        every { context.get<JWTPrincipal>() } returns jwtPrincipal
        every { jwtPrincipal.subject } returns uid
        every { jwtPrincipal.get("userId") } returns uid

        // Execute
        val id = authService.getUserId(context)

        // Assert
        assertEquals(uid, id.value)
    }

    @Test
    fun testGetUserIdFailureJwtEmpty () {
        // Prepare
        val context = mockk<Context>()
        val jwtPrincipal = mockk<JWTPrincipal>()
        val uid = "123"

        // Expect
        every { context.get<JWTPrincipal>() } returns jwtPrincipal
        every { jwtPrincipal.subject } returns null
        every { jwtPrincipal.get("userId") } returns uid

        // Execute
        assertThrows<IllegalStateException> {
            authService.getUserId(context)
        }
    }

    @Test
    fun testGetUserIdSuccessFirstTry() {
        // Prepare
        val context = mockk<Context>()
        val jwtPrincipal = mockk<JWTPrincipal>()
        val uid = "123"
        val uid2 = "abc"

        // Expect
        every { context.get<JWTPrincipal>() } returns jwtPrincipal
        every { jwtPrincipal.subject } returns uid
        every { jwtPrincipal.get("userId") } returns null
        every { firebaseAuth.getUser(uid).customClaims["userId"] } returns uid2

        // Execute
        val id = authService.getUserId(context)

        // Assert
        assertEquals(uid2, id.value)
    }

    @Test
    fun testGetUserIdFailureFirstTryNoUserFound() {
        // Prepare
        val context = mockk<Context>()
        val jwtPrincipal = mockk<JWTPrincipal>()
        val uid = "123"

        // Expect
        every { context.get<JWTPrincipal>() } returns jwtPrincipal
        every { jwtPrincipal.subject } returns uid
        every { jwtPrincipal.get("userId") } returns null
        every { firebaseAuth.getUser(uid).customClaims["userId"] } returns null

        // Execute
        assertThrows<IllegalStateException> {
            authService.getUserId(context)
        }
    }

    @Test
    fun testGetOptionalUserIdSecondTryFailure() {
        // Prepare
        val context = mockk<Context>()
        val jwtPrincipal = mockk<JWTPrincipal>()
        val uid = "123"

        // Expect
        every { context.get<JWTPrincipal>() } returns null

        // Execute
        val id = authService.getOptionalUserId(context)

        // Assert
        assertNull(id)
    }

    @Test
    fun testGetOptionalUserIdSecondTrySuccess() {
        // Prepare
        val context = mockk<Context>()
        val jwtPrincipal = mockk<JWTPrincipal>()
        val uid = "123"

        // Expect
        every { context.get<JWTPrincipal>()?.subject } returns uid
        every { context.get<JWTPrincipal>()?.get("userId") } returns uid

        // Execute
        val id = authService.getOptionalUserId(context)

        // Assert
        assertEquals(uid, id?.value)
    }

    @Test
    fun testGetOptionalUserIdFirstTrySuccess() {
        // Prepare
        val context = mockk<Context>()
        val jwtPrincipal = mockk<JWTPrincipal>()
        val uid = "123"

        // Expect
        every { context.get<JWTPrincipal>()?.subject } returns uid
        every { context.get<JWTPrincipal>()?.get("userId") } returns null
        every { firebaseAuth.getUser(uid).customClaims["userId"] } returns uid

        // Execute
        val id = authService.getOptionalUserId(context)

        // Assert
        assertEquals(uid, id?.value)
    }

//    @Test
//    fun testGetOptionalUserIdFirstTryFailureUserDoesntExist() {
//        // Prepare
//        val context = mockk<Context>()
//        val jwtPrincipal = mockk<JWTPrincipal>()
//        val uid = "123"
//
//        // Expect
//        every { context.get<JWTPrincipal>()?.subject } returns uid
//        every { context.get<JWTPrincipal>()?.get("userId") } returns null
//        every { firebaseAuth.getUser(uid) } returns null
//
//        // Execute
//        assertThrows<FirebaseAuthException> {
//            authService.getOptionalUserId(context)
//        }
//    }

    @Test
    fun testGetOptionalUserIdFirstTryFailureUserDoesntExist() {
        // Prepare
        val context = mockk<Context>()
        val jwtPrincipal = mockk<JWTPrincipal>()
        val uid = "123"

        // Expect
        every { context.get<JWTPrincipal>()?.subject } returns uid
        every { context.get<JWTPrincipal>()?.get("userId") } returns null
        every { firebaseAuth.getUser(uid).customClaims["userId"] } returns null

        // Execute
        val id = authService.getOptionalUserId(context)
        assertNull(id)
    }
}