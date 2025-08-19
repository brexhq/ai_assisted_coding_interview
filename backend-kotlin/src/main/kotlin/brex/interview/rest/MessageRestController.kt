package brex.interview.rest

import brex.interview.converter.toDTO
import brex.interview.dto.MessageDTO
import brex.interview.service.MessageService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/messages")
class MessageRestController(private val messageService: MessageService) {

    @GetMapping("/latest")
    fun getLatestMessages(@RequestParam(defaultValue = "10") limit: Int): List<MessageDTO> {
        return messageService.getLatestMessages(limit).map { it.toDTO() }
    }

    @PostMapping
    fun createMessage(): MessageDTO {
        return messageService.createMessage().toDTO()
    }
}
