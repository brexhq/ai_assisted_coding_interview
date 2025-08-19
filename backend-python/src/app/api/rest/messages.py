from typing import List
from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from ...database.session import get_db
from ...models.message import Message as MessageModel
from ...schemas.message import Message, MessageCreate

router = APIRouter(prefix="/messages", tags=["messages"])


@router.post("/", response_model=Message)
def create_message(message: MessageCreate, db: Session = Depends(get_db)):
    db_message = MessageModel(
        content=message.content,
    )
    db.add(db_message)
    db.commit()
    db.refresh(db_message)
    return db_message


@router.get("/", response_model=List[Message])
def get_messages(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    messages = db.query(MessageModel).offset(skip).limit(limit).all()
    return messages


@router.get("/{message_id}", response_model=Message)
def get_message(message_id: UUID, db: Session = Depends(get_db)):
    message = db.query(MessageModel).filter(MessageModel.id == message_id).first()
    if message is None:
        raise HTTPException(status_code=404, detail="Message not found")
    return message


@router.get("/latest/", response_model=List[Message])
def get_latest_messages(limit: int = 10, db: Session = Depends(get_db)):
    messages = (
        db.query(MessageModel)
        .order_by(MessageModel.created_at.desc())
        .limit(limit)
        .all()
    )
    return messages 