# Brex AI Assisted Interview Playground

This is a monorepo containing both the backend and frontend components for the Brex interview playground - a simple message system to get you started coding.

## Project Structure

```
brex-interview-playground/
├── backend-kotlin/    # Kotlin Spring Boot Backend
│   ├── src/
│   │   └── main/
│   │       ├── kotlin/
│   │       │   └── brex/interview/
│   │       │       ├── config/      # Application configuration
│   │       │       ├── controller/  # REST controllers
│   │       │       ├── graphql/     # GraphQL resolvers
│   │       │       ├── model/       # Domain models
│   │       │       ├── dto/         # Data transfer objects
│   │       │       ├── repository/  # Data access layer
│   │       │       └── service/     # Business logic
│   │       └── resources/
│   │           ├── graphql/         # GraphQL schema
│   │           └── schema/          # Database schema
│   └── test/                        # Test files
├── backend-python/   # Python FastAPI Backend (Alternative)
│   ├── src/
│   │   └── app/
│   │       ├── api/
│   │       │   ├── graphql/     # GraphQL schema and resolvers
│   │       │   └── rest/        # REST API endpoints
│   │       ├── database/        # Database configuration
│   │       ├── models/          # SQLAlchemy models
│   │       └── schemas/         # Pydantic schemas
│   └── tests/                   # Test files
└── frontend/        # T3 Stack Frontend
    ├── src/
    │   ├── app/              # Next.js app router pages
    │   ├── components/       # React components
    │   ├── graphql/         # GraphQL queries and mutations
    │   ├── lib/             # Utility functions and configurations
    │   ├── styles/          # Global styles and Tailwind config
    │   └── types/           # TypeScript type definitions
    ├── public/              # Static assets
    └── tests/               # Test files
```

### Backend Options

You can choose between two backend implementations:

#### Kotlin Spring Boot Backend

The Kotlin backend is a Spring Boot application that provides:
- REST and GraphQL APIs for simple message operations
- H2 in-memory database
- Basic message CRUD functionality

#### Python FastAPI Backend (Alternative)

The Python backend is a FastAPI application that provides:
- REST and GraphQL APIs for simple message operations
- SQLAlchemy with SQLite database
- Strawberry GraphQL integration
- Pydantic for data validation

### Frontend (T3 Stack)

The frontend is built with the T3 Stack, featuring:
- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Apollo Client for GraphQL integration
- GraphQL Code Generator for type-safe GraphQL operations

### Prerequisites

For Kotlin backend:
- JDK 11 or higher
- Gradle (for building the project)

For Python backend:
- Python 3.8 or higher
- Poetry (for dependency management)

For frontend:
- Node.js 18 or higher
- npm or yarn

## Development

### Running the Backend

#### Option 1: Kotlin Backend

1. **Build the Project**:
   ```bash
   cd backend-kotlin
   ./gradlew build
   ```

2. **Run the Application**:
   ```bash
   ./gradlew bootRun --console=plain
   ```

3. **Access the Application**:
   - REST API: `http://localhost:8080/api/`
      - i.e. `http://localhost:8080/api/messages/latest`
   - GraphQL API: `http://localhost:8080/graphql`

#### Option 2: Python Backend

1. **Install Poetry** (if not already installed):
   ```bash
   curl -sSL https://install.python-poetry.org | python3 -
   ```

2. **Install Dependencies**:
   ```bash
   cd backend-python
   poetry install
   ```

3. **Run the Development Server**:
   ```bash
   poetry run uvicorn src.app.main:app --reload --port 8080
   ```

4. **Access the Application**:
   - REST API: `http://localhost:8080/api/`
      - i.e. `http://localhost:8080/api/messages/latest`
   - GraphQL Playground: `http://localhost:8080/graphql`

### Running the Frontend

1. **Install Dependencies**:
   ```bash
   cd frontend
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Access the Application**:
   Visit `http://localhost:3000` to access the application

### GraphQL Development

#### Generating TypeScript Types
   The project uses GraphQL Code Generator to automatically generate TypeScript types from the GraphQL schema. **Make sure the backend is running when run this command.**
   ```bash
   npm run codegen
   ```

#### Testing GraphQL
- Access the GraphQL IDE:
  - For Kotlin backend: `http://localhost:8080/graphiql`
  - For Python backend: `http://localhost:8080/graphql`

- **Example Query**:
    ```graphql
query {
  latestMessages(limit: 10) {
    id
    content
    createdAt
  }
}
    ```

- **Example Mutation**:
    ```graphql
mutation {
  createMessage {
    id
    content
    createdAt
  }
}
    ```

### Running Tests

#### Kotlin Backend Tests:
```bash
cd backend-kotlin
./gradlew test
```

#### Python Backend Tests:
```bash
cd backend-python
poetry run pytest
```