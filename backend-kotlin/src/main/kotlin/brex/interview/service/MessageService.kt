package brex.interview.service

import brex.interview.model.Message
import brex.interview.repository.MessageRepository
import org.springframework.stereotype.Service
import java.time.LocalDateTime
import java.util.UUID

@Service
class MessageService(
    private val messageRepository: MessageRepository
) {

    fun getLatestMessages(limit: Int): List<Message> {
        return messageRepository.findLatestMessages(limit)
    }

    fun createMessage(): Message {
        val message = Message(
            id = UUID.randomUUID(),
            content = "Hello World",
            createdAt = LocalDateTime.now()
        )
        return messageRepository.save(message)
    }
}
