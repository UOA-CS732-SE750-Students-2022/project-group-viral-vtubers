package com.viralvtubers.service

import com.viralvtubers.graphql.data.ID
import com.viralvtubers.graphql.data.Mail
import com.viralvtubers.graphql.input.EditMailInput
import com.viralvtubers.graphql.input.SendMailInput

interface MailService {
    suspend fun getMail(userId: ID, mailId: ID): Mail

    suspend fun sendMail(userId: ID, input: SendMailInput): Mail

    suspend fun getInbox(userId: ID): List<Mail>

    suspend fun getSent(userId: ID): List<Mail>

    suspend fun editMail(userId: ID, input: EditMailInput): List<Mail>
}
