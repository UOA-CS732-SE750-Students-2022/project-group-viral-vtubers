package com.viralvtubers.database.mongo

import com.viralvtubers.database.model.Like
import com.viralvtubers.database.model.Model
import com.viralvtubers.database.model.Product
import com.viralvtubers.database.model.User
import com.viralvtubers.database.mongo.repositories.*
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json
import org.litote.kmongo.id.serialization.IdKotlinXSerializationModule
import java.io.File
import java.util.*

suspend fun main() {
    val mongoDatabase = MongoDatabase()
    val json = Json {
        serializersModule = IdKotlinXSerializationModule
    }

    val users = mutableListOf<User>()
    val products = mutableListOf<Product>()
    val populators = listOf(
        produceRepositoryPopulator(
            json,
            "tags",
            mongoDatabase.asTagRepository()
        ),
        produceRepositoryPopulator(
            json,
            "products",
            mongoDatabase.asProductRepository()
        ) { products.add(it) },
        produceRepositoryPopulator(
            json,
            "users",
            mongoDatabase.asUserRepository()
        ) { users.add(it) },
        produceRepositoryPopulator(
            json,
            "orders",
            mongoDatabase.asOrderRepository()
        ),
    )
    File("data").walkTopDown()
        .filter { !it.nameWithoutExtension.startsWith("template") }
        .forEach { file ->
            println(file)
            populators.map { it.invoke(file) }
                .firstOrNull { it }
                ?: println("Could not figure out where ${file.name} fits, skipping...")
        }

    // Populate random likes
    val likeRepository = mongoDatabase.asLikeRepository()
    products.map { product ->
        users.map { user ->
            if (Math.random() >= 0.5) {
                likeRepository.add(
                    Like(
                        currentId = user._id,
                        productId = product._id,
                        artistId = product.artistId,
                        createdDate = Date(),
                    )
                )
            }
        }
    }
}

inline fun <reified T : Model<*>> produceRepositoryPopulator(
    json: Json,
    category: String,
    repository: Repository<T>,
    crossinline handler: (T) -> Unit = {}
)
        : suspend (File) -> Boolean =
    { file -> populateRepository(json, category, repository, file, handler) }

suspend inline fun <reified T : Model<*>> populateRepository(
    json: Json,
    category: String,
    repository: Repository<T>,
    file: File,
    handler: (T) -> Unit
): Boolean {
    if (file.parent?.endsWith("$category", true) != true) {
        return false;
    }
    val text = file.readLines()
        .dropWhile { it.startsWith("//") }
        .joinToString(separator = "\n")
    println("Decoding ${file.name} ...")
    val data: T = json.decodeFromString(text)
    handler.invoke(data)
    val id = data._id;
    try {
        val addedId = repository.add(data)._id
        println("Added $category - $addedId")
    } catch (e: Exception) {
        error("Could not add " + id + "\n" + e.stackTraceToString())
    }
    return true;
}
