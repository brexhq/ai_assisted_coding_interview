from datetime import datetime
from typing import List, Optional
from uuid import UUID

import strawberry
from fastapi import Depends
from sqlalchemy.orm import Session
from strawberry.types import Info

from ...database.session import get_db
from ...models.message import Message as MessageModel


@strawberry.type
class Message:
    id: UUID
    content: str
    created_at: datetime


async def get_context(db: Session = Depends(get_db)):
    return {"db": db}


@strawberry.type
class Query:
    @strawberry.field
    def latest_messages(self, info: Info, limit: Optional[int] = 10) -> List[Message]:
        db: Session = info.context["db"]
        return (
            db.query(MessageModel)
            .order_by(MessageModel.created_at.desc())
            .limit(limit)
            .all()
        )


@strawberry.type
class Mutation:
    @strawberry.field
    def create_message(self, info: Info) -> Message:
        db: Session = info.context["db"]
        message = MessageModel()
        db.add(message)
        db.commit()
        db.refresh(message)
        return message


schema = strawberry.Schema(query=Query, mutation=Mutation) 