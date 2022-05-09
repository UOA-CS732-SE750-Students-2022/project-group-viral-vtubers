package com.viralvtubers.service

import com.viralvtubers.database.mongo.repositories.MailRepository
import com.viralvtubers.database.mongo.repositories.UserRepository
import com.viralvtubers.graphql.data.ID
import com.viralvtubers.graphql.data.Mail
import com.viralvtubers.graphql.input.EditMailInput
import com.viralvtubers.graphql.input.SendMailInput
import com.viralvtubers.mapper.map
import kotlinx.coroutines.flow.toList
import java.util.*
import com.viralvtubers.database.model.Mail as MailModel

class MailServiceImpl(
    private val mailRepository: MailRepository,
    private val userRepository: UserRepository,
) : MailService {

    override suspend fun getMail(userId: ID, mailId: ID): Mail {
        val mail = mailRepository.getById(mailId.map())
            ?: throw error("mail not found")

        if (mail.receiverId.map() == userId || mail.senderId.map() == userId) {
            throw error("not authorised")
        }

        return mail.map()
    }

    override suspend fun sendMail(userId: ID, input: SendMailInput): Mail {
        var receiver = userRepository.getByName(input.receiverUserId)
            ?: throw error("receiver not found")

        val mail = MailModel(
            senderId = userId.map(),
            receiverId = receiver._id,
            title = input.title,
            body = input.body,
            date = Date(),
            isRead = false,
        )

        return mailRepository.upsert(mail)?.map()
            ?: throw error("receiver not found")
    }

    override suspend fun getInbox(userId: ID): List<Mail> {
        return mailRepository.getInbox(userId.map()).toList().map { it.map() }
    }

    override suspend fun getSent(userId: ID): List<Mail> {
        return mailRepository.getSent(userId.map()).toList().map { it.map() }
    }

    override suspend fun editMail(
        userId: ID,
        input: EditMailInput
    ): List<Mail> {
        val mail = mailRepository.getById(input.id.map())
            ?: throw error("mail not found")

        val update = mail.copy(
            isRead = input.isRead ?: mail.isRead,
        )

        mailRepository.update(update)

        return getInbox(userId)
    }
}
