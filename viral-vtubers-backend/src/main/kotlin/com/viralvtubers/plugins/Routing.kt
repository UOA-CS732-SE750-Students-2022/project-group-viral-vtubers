package com.viralvtubers.plugins

import com.viralvtubers.config
import com.viralvtubers.service.UploadService
import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import io.ktor.http.content.*
import io.ktor.server.application.*
import io.ktor.server.plugins.autohead.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import java.nio.ByteBuffer
import java.nio.channels.Channels
import java.util.*

val client = HttpClient(CIO)

fun Application.configureRouting() {
    val config = config()
    val uploadService = UploadService(config.storageBucket)

    install(AutoHeadResponse)

    routing {
        get("/") {
            call.respondText("Viral Vtubers - Backend")
        }

        post("/upload") {
            val multipartData = call.receiveMultipart()

            multipartData.forEachPart { part ->
                when (part) {
                    is PartData.FileItem -> {
                        val fileName = part.originalFileName as String
                        val extension = Optional.ofNullable(fileName)
                            .filter { f -> f.contains(".") }
                            .map { f -> f.substring(fileName.lastIndexOf(".") + 1) }
                            ?: error("no extension")

                        if (extension.isEmpty) {
                            call.respondText(
                                "No extension",
                                ContentType.Text.Plain,
                                HttpStatusCode.BadRequest,
                            )
                            return@forEachPart
                        }

                        val ext = extension.get()

                        val uuid = UUID.randomUUID().toString()
                        val filePath = "$uuid.$ext"

                        val fileBytes = part.streamProvider()
                        uploadService.upload(filePath, fileBytes)

                        call.respondText(filePath);
                    }
                    else -> {
                        part.dispose()
                    }
                }
            }
        }

        get("/download/{fileName}") {
            val fileName = call.parameters["fileName"] ?: error("no file name")
            val download = uploadService.download(fileName)
            val contentType = ContentType.parse(download.contentType)

            call.respondOutputStream(
                contentType,
                HttpStatusCode.OK
            ) {
                val buf = ByteBuffer.allocateDirect(16 * 1024);
                val from = download.readable
                val to = Channels.newChannel(this);

                try {
                    while (from.read(buf) != -1) {
                        buf.flip();
                        while (buf.hasRemaining()) {
                            to.write(buf);
                        }
                        buf.clear();
                    }
                } finally {
                    from.close()
                    to.close()
                }
            }
        }

        get(".well-known/jwks.json") {
            var response =
                client.get("https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com")
            call.respondText(
                response.bodyAsText(),
                ContentType.Application.Json,
                HttpStatusCode.OK
            )
        }
    }
}
