package com.viralvtubers.database.mongo.repositories

import com.viralvtubers.database.model.Mail
import com.viralvtubers.database.model.User
import kotlinx.coroutines.flow.Flow
import org.litote.kmongo.Id

interface MailRepository : Repository<Mail> {

    fun getInbox(userId: Id<User>): Flow<Mail>

    fun getSent(userId: Id<User>): Flow<Mail>
}
