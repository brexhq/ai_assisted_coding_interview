from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from strawberry.fastapi import GraphQLRouter

from .api.graphql.schema import get_context, schema
from .api.rest import messages
from .database.seed import seed_database
from .database.session import SessionLocal, engine
from .models.base import Base

# Drop and recreate database tables
Base.metadata.drop_all(bind=engine)
Base.metadata.create_all(bind=engine)

# Seed the database
db = SessionLocal()
try:
    seed_database(db)
except Exception as e:
    print(f"Error seeding database: {e}")
finally:
    db.close()

app = FastAPI(title="Brex Interview Playground")

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include REST API routers
app.include_router(messages.router, prefix="/api")

# Add GraphQL endpoint
graphql_app = GraphQLRouter(schema, context_getter=get_context)
app.include_router(graphql_app, prefix="/graphql")
