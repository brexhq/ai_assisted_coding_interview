package brex.interview.graphql

import brex.interview.converter.toDTO
import brex.interview.dto.MessageDTO
import brex.interview.service.MessageService
import org.springframework.graphql.data.method.annotation.Argument
import org.springframework.graphql.data.method.annotation.MutationMapping
import org.springframework.graphql.data.method.annotation.QueryMapping
import org.springframework.stereotype.Controller

@Controller
class MessageGraphQLController(
    private val messageService: MessageService
) {

    @QueryMapping
    fun latestMessages(@Argument limit: Int?): List<MessageDTO> {
        val messages = messageService.getLatestMessages(limit ?: 10)
        return messages.map { message ->
            message.toDTO()
        }
    }

    @MutationMapping
    fun createMessage(): MessageDTO {
        return messageService.createMessage().toDTO()
    }
}
