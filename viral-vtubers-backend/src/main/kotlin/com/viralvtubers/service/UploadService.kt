package com.viralvtubers.service

import com.google.auth.oauth2.GoogleCredentials
import com.google.cloud.storage.Storage
import com.google.cloud.storage.StorageOptions
import io.ktor.server.engine.*
import java.io.InputStream
import java.nio.channels.ReadableByteChannel

data class Download(
    val contentType: String,
    val readable: ReadableByteChannel
)

class UploadService(private val bucketName: String) {

    private val firebaseConfig = applicationEngineEnvironment { }.classLoader
        .getResourceAsStream("firebase-service-account.json")

    private val storage: Storage =
        StorageOptions.newBuilder()
            .setCredentials(GoogleCredentials.fromStream(firebaseConfig))
            .build().service

    fun upload(
        fileName: String,
        stream: InputStream
    ) {
        val bucket = storage.get(bucketName)
            ?: error("Bucket $bucketName does not exist")

        bucket.create(fileName, stream)
        println("$fileName was successfully uploaded to bucket $bucketName.")
    }

    fun download(fileName: String): Download {
        val bucket = storage.get(bucketName)
            ?: error("Bucket $bucketName does not exist")

        val blob = bucket.get(fileName)
        val reader = blob.reader()
        return Download(
            blob.contentType,
            reader
        )
    }
}
