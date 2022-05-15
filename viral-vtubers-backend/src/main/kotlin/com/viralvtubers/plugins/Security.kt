package com.viralvtubers.plugins

import com.auth0.jwk.JwkProviderBuilder
import com.google.auth.oauth2.GoogleCredentials
import com.google.cloud.storage.StorageOptions
import com.google.firebase.FirebaseApp
import com.google.firebase.FirebaseOptions
import com.viralvtubers.config
import io.ktor.server.application.*
import io.ktor.server.auth.*
import io.ktor.server.auth.jwt.*
import io.ktor.server.engine.*
import java.util.concurrent.TimeUnit

fun Application.configureSecurity() {
    val config = config()
    val firebaseConfig = applicationEngineEnvironment { }.classLoader
        .getResourceAsStream("firebase-service-account.json")

    val firebaseOptions = FirebaseOptions.builder()
        .setCredentials(GoogleCredentials.fromStream(firebaseConfig))
        .build()

    StorageOptions.getDefaultInstance()

    FirebaseApp.initializeApp(firebaseOptions)

    val issuer = config.host
    val jwkProvider = JwkProviderBuilder(issuer)
        .cached(10, 24, TimeUnit.HOURS)
        .rateLimited(10, 1, TimeUnit.MINUTES)
        .build()

    install(Authentication) {
        jwt {
            verifier(
                jwkProvider,
                config.jwtIssuer
            )
            validate { credential ->
                JWTPrincipal(credential.payload)
            }
        }
    }
}
