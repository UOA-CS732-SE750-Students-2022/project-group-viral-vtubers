package com.viralvtubers.database.mongo

import com.viralvtubers.database.mongo.repositories.asCategoryRepository
import com.viralvtubers.database.mongo.repositories.asSubcategoryRepository
import kotlinx.coroutines.runBlocking
import org.litote.kmongo.coroutine.CoroutineDatabase
import org.litote.kmongo.coroutine.coroutine
import org.litote.kmongo.reactivestreams.KMongo

class MongoDatabase(connectionString: String, databaseName: String) {
    val database: CoroutineDatabase

    init {
        val client = KMongo.createClient(connectionString).coroutine
        this.database = client.getDatabase(databaseName)

        runBlocking {
            initCategories(
                asCategoryRepository(),
                asSubcategoryRepository()
            )
        }
    }
}
