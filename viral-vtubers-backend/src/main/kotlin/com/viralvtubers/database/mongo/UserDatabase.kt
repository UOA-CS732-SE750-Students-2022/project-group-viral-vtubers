package com.viralvtubers.database.mongo

import com.viralvtubers.database.model.User
import kotlinx.coroutines.flow.Flow
import org.litote.kmongo.Id

interface UserDatabase {
    fun getUsers(userIds: Collection<Id<User>>): Flow<User>
}