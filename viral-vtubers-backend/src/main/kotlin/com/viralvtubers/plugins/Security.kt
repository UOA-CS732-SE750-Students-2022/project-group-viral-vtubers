package com.viralvtubers.plugins

import com.auth0.jwk.JwkProviderBuilder
import com.google.auth.oauth2.GoogleCredentials
import com.google.firebase.FirebaseApp
import com.google.firebase.FirebaseOptions
import io.ktor.server.application.*
import io.ktor.server.auth.*
import io.ktor.server.auth.jwt.*
import io.ktor.server.engine.*
import java.util.concurrent.TimeUnit

fun Application.configureSecurity() {
    val firebaseConfig = applicationEngineEnvironment { }.classLoader
        .getResourceAsStream("firebase-service-account.json")

    val firebaseOptions = FirebaseOptions.builder()
        .setCredentials(GoogleCredentials.fromStream(firebaseConfig))
        .build()

    FirebaseApp.initializeApp(firebaseOptions)

    val issuer = "http://localhost:8080"
    val jwkProvider = JwkProviderBuilder(issuer)
        .cached(10, 24, TimeUnit.HOURS)
        .rateLimited(10, 1, TimeUnit.MINUTES)
        .build()

    install(Authentication) {
        jwt{
            verifier(jwkProvider, "https://securetoken.google.com/viral-vtubers")
            validate { credential ->
                JWTPrincipal(credential.payload) }
        }
    }
}
