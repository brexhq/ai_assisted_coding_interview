package brex.interview.repository

import brex.interview.model.Message
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface MessageRepository : JpaRepository<Message, UUID> {
    @Query("SELECT m FROM Message m ORDER BY m.createdAt DESC LIMIT :limit")
    fun findLatestMessages(limit: Int): List<Message>
}
