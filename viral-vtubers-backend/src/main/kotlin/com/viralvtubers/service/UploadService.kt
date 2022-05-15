package com.viralvtubers.service

import com.github.benmanes.caffeine.cache.Caffeine
import com.google.auth.oauth2.GoogleCredentials
import com.google.cloud.storage.Storage
import com.google.cloud.storage.StorageOptions
import io.ktor.server.engine.*
import java.io.InputStream


data class Download(
    val contentType: String,
    val data: ByteArray
)


class UploadService(private val bucketName: String) {

    private val firebaseConfig = applicationEngineEnvironment { }.classLoader
        .getResourceAsStream("firebase-service-account.json")

    private val storage: Storage =
        StorageOptions.newBuilder()
            .setCredentials(GoogleCredentials.fromStream(firebaseConfig))
            .build().service

    private val cache =
        Caffeine.newBuilder().maximumWeight(200_000)
            .weigher { key: String, value: ByteArray? -> value?.size ?: 0 }
            .build<String, ByteArray?> {
                try {
                    storage.readAllBytes(bucketName, it)
                } catch (e: Exception) {
                    null
                }
            }


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

        cache.get(fileName)?.let {
            return Download(
                bucket.get(fileName).contentType,
                it
            )
        }

        throw error("not found")
    }
}
