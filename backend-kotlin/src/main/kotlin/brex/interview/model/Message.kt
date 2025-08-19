package brex.interview.model

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table
import java.time.LocalDateTime
import java.util.UUID

@Entity
@Table(name = "messages")
data class Message(
    @Id
    val id: UUID? = null,

    @Column(nullable = false)
    val content: String = "Hello World",

    @Column(nullable = false)
    val createdAt: LocalDateTime? = null
)
