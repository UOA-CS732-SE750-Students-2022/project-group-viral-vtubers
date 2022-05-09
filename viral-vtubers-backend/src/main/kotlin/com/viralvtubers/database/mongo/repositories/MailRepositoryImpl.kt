package com.viralvtubers.database.mongo.repositories

import com.viralvtubers.database.model.Mail
import com.viralvtubers.database.model.User
import com.viralvtubers.database.mongo.MongoDatabase
import kotlinx.coroutines.flow.Flow
import org.litote.kmongo.Id
import org.litote.kmongo.coroutine.CoroutineCollection
import org.litote.kmongo.eq

fun MongoDatabase.asMailRepository(): MailRepository =
    object : MailRepository {
        override val col: CoroutineCollection<Mail> =
            database.getCollection()

        override fun getInbox(userId: Id<User>): Flow<Mail> {
            return col.find(Mail::senderId eq userId).toFlow()
        }

        override fun getSent(userId: Id<User>): Flow<Mail> {
            return col.find(Mail::receiverId eq userId).toFlow()
        }
    }
