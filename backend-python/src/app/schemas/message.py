from datetime import datetime
from uuid import UUID

from pydantic import BaseModel


class MessageBase(BaseModel):
    content: str = "Hello World"


class MessageCreate(MessageBase):
    pass


class Message(MessageBase):
    id: UUID
    created_at: datetime

    class Config:
        from_attributes = True 