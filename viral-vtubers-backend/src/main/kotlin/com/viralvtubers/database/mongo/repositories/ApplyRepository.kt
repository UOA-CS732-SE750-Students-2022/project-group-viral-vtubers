package com.viralvtubers.database.mongo.repositories

import com.viralvtubers.database.model.Apply
import com.viralvtubers.database.model.User
import kotlinx.coroutines.flow.Flow
import org.litote.kmongo.Id

interface ApplyRepository : Repository<Apply> {
    suspend fun getApplyByUser(userId: Id<User>): Flow<Apply>
}
