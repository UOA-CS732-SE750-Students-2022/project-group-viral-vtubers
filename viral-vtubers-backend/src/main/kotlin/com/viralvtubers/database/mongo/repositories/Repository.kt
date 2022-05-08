package com.viralvtubers.database.mongo.repositories

import com.viralvtubers.database.model.Model
import kotlinx.coroutines.flow.Flow
import org.litote.kmongo.Id
import org.litote.kmongo.`in`
import org.litote.kmongo.coroutine.*
import org.litote.kmongo.eq
import org.litote.kmongo.reactivestreams.*

interface Repository<T : Model<*>> {
    val col: CoroutineCollection<T>

    suspend fun getById(id: Id<T>): T? =
        col.findOne(Model<T>::_id eq id)

    fun getByIds(ids: List<Id<T>>): Flow<T> =
        col.find(Model<T>::_id `in` ids).toFlow()

    fun getAll(): Flow<T> =
        col.find().toFlow()

    suspend fun delete(id: Id<T>): T? =
        col.findOneAndDelete(Model<T>::_id eq id)

    suspend fun add(entry: T): T {
        col.insertOne(entry)
        return entry
    }

    suspend fun update(entry: T): T? {
        col.updateOne(
            Model<T>::_id eq entry._id,
            entry,
            updateOnlyNotNullProperties = true
        )
        return col.findOne(Model<T>::_id eq entry._id)
    }

    suspend fun upsert(entry: T): T? {
        col.save(entry)
        return col.findOne(Model<T>::_id eq entry._id)
    }
}
