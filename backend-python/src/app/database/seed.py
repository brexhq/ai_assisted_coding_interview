from sqlalchemy.orm import Session

from ..models.message import Message


def seed_database(db: Session):
    # Create messages
    messages = [
        Message(content="Hello World"),
    ]

    # Add messages to session
    db.add_all(messages)
    db.commit()  # This will assign IDs to the messages
