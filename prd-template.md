# Project: Simple Todo REST API

Branch: main
Description: Node.js Express API for managing todos with automated tests

## User Stories

### Story 1: Project Setup
Priority: 1
Description: Initialize Node.js project with Express and testing framework
Acceptance Criteria:
- package.json exists with express, jest, and supertest
- .gitignore includes node_modules
- Basic Express app starts on port 3000
- GET / returns status 200 with message "Todo API"
Tests: npm test
Status: pending

### Story 2: In-Memory Data Store
Priority: 2
Description: Create simple in-memory array to store todos
Acceptance Criteria:
- todos.js file exports empty array and helper functions
- addTodo(text) function adds todo with id, text, completed
- getTodos() returns all todos
- Simple test verifies add and get functions work
Tests: npm test
Status: pending

### Story 3: GET /todos Endpoint
Priority: 3
Description: Implement endpoint to retrieve all todos
Acceptance Criteria:
- GET /todos returns JSON array of todos
- Returns empty array initially
- Returns 200 status code
- Test verifies endpoint returns correct format
Tests: npm test
Status: pending

### Story 4: POST /todos Endpoint
Priority: 4
Description: Implement endpoint to create new todo
Acceptance Criteria:
- POST /todos accepts JSON body with text field
- Creates todo with auto-generated id
- Returns created todo with 201 status
- Validates text field is required (400 if missing)
- Test verifies todo creation works
Tests: npm test
Status: pending

### Story 5: DELETE /todos/:id Endpoint
Priority: 5
Description: Implement endpoint to delete todo by id
Acceptance Criteria:
- DELETE /todos/:id removes todo from array
- Returns 204 on success
- Returns 404 if todo not found
- Test verifies deletion works
Tests: npm test
Status: pending