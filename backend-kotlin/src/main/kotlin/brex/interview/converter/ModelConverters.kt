package brex.interview.converter

import brex.interview.dto.MessageDTO
import brex.interview.model.Message
import java.time.format.DateTimeFormatter

private val dateTimeFormatter = DateTimeFormatter.ISO_LOCAL_DATE_TIME

fun Message.toDTO(): MessageDTO = MessageDTO(
    id = id ?: throw IllegalStateException("Message ID cannot be null"),
    content = content,
    createdAt = createdAt?.format(dateTimeFormatter) ?: ""
)
