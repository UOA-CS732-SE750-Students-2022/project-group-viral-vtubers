package com.viralvtubers

import com.viralvtubers.plugins.configureGraphQL
import com.viralvtubers.plugins.configureHTTP
import com.viralvtubers.plugins.configureRouting
import com.viralvtubers.plugins.configureSecurity
import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*

fun main(args: Array<String>) {
    embeddedServer(Netty, commandLineEnvironment(args)).start(wait = true)
}

@Suppress("unused") // Referenced in application.conf
//@kotlin.jvm.JvmOverloads
fun Application.module(testing: Boolean = false) {
    configureRouting()
    configureSecurity()
    configureHTTP()
    configureGraphQL()
}
