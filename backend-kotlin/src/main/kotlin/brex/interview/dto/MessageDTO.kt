package brex.interview.dto

import java.util.UUID

data class MessageDTO(
    val id: UUID,
    val content: String,
    val createdAt: String
)
