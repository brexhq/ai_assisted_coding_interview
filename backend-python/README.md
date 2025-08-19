# Brex Interview Playground Backend (Python)

A FastAPI and Strawberry GraphQL implementation of the Brex Interview Playground Python Backend.

## Technologies Used

- FastAPI: Modern, fast web framework for building APIs
- Strawberry: GraphQL library for Python
- SQLAlchemy: SQL toolkit and ORM
- Pydantic: Data validation using Python type annotations
- Poetry: Dependency management and packaging
- SQLite: Database (for development)

## Project Structure

```
backend-python/
├── src/
│   └── app/
│       ├── api/
│       │   ├── graphql/     # GraphQL schema and resolvers
│       │   └── rest/        # REST API endpoints
│       ├── database/        # Database configuration
│       ├── models/          # SQLAlchemy models
│       └── schemas/         # Pydantic schemas
└── tests/                   # Test files
```

## Setup

1. Install Poetry:
   ```bash
   curl -sSL https://install.python-poetry.org | python3 -
   ```

2. Install dependencies:
   ```bash
   poetry install
   ```

3. Run the development server:
   ```bash
   poetry run uvicorn src.app.main:app --reload --port 8080
   ```

## API Documentation

- REST API documentation: http://localhost:8080/docs
- GraphQL Playground: http://localhost:8080/graphql

### Example GraphQL Query

```graphql
query {
  latestMessages(limit: 10) {
    id
    content
    createdAt
  }
}
```

## Development

- Format code:
  ```bash
  poetry run black .
  poetry run isort .
  ```

- Type checking:
  ```bash
  poetry run mypy .
  ```

- Run tests:
  ```bash
  poetry run pytest
  ``` 