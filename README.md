# TODO's APP BACKEND

## API CONTRACT

### 1. Get All Items
- **URL:** `/api/todos`
- **Method:** `GET`
- **Success Response:**
  - **Code:** 200
  - **Content:** `[{ "id": 1, "todo": "item_todo", "is_complete": 0 }, ...]`
- **Error Response:**
  - **Code:** 500
  - **Content:** `{ "message": "Internal Server Error" }`

### 2. Get Item by ID
- **URL:** `/api/todos/:id`
- **Method:** `GET`
- **Success Response:**
  - **Code:** 200
  - **Content:** `{ "id": 1, "todo": "item_todo", "is_complete": 0 }`
- **Error Response:**
  - **Code:** 404
  - **Content:** `{ "message": "Todo not found" }`
  - **Code:** 500
  - **Content:** `{ "message": "Error message" }`

### 3. Create New Item
- **URL:** `/api/todos`
- **Method:** `POST`
- **Data Params:** `{ "todo": "item_todo", "is_complete": 0 }`
- **Success Response:**
  - **Code:** 201
  - **Content:** `{ "id": 1, "todo": "item_todo", "is_complete": 0 }`
- **Error Response:**
  - **Code:** 400
  - **Content:** `{ "message": "Bad Request" }`


### 4. Update Item by ID
- **URL:** `/api/todos/:id`
- **Method:** `PUT`
- **Data Params:** `{ "todo": "updated_todo" }`
- **Success Response:**
  - **Code:** 200
  - **Content:** `{ "id": 1, "todo": "updated_todo", "is_complete": 0 }`
- **Error Response:**
  - **Code:** 400
  - **Content:** `{ "message": "Bad Request" }`
  - **Code:** 404
  - **Content:** `{ "message": "Todo not found" }`

### 5. Delete Item by ID
- **URL:** `/api/todos/:id`
- **Method:** `DELETE`
- **Success Response:**
  - **Code:** 204
  - **Content:** `No Response`
- **Error Response:**
  - **Code:** 404
  - **Content:** `{ "message": "Todo not found" }`
  - **Code:** 500
  - **Content:** `{ "message": "Error message" }`

### 5. Complete Item by ID
- **URL:** `/api/todos/toggle/:id`
- **Method:** `DELETE`
- **Success Response:**
  - **Code:** 204
  - **Content:** `{ "id": 1, "todo": "updated_todo", "is_complete": 0 }`
- **Error Response:**
  - **Code:** 404
  - **Content:** `{ "message": "Todo not found" }`
  - **Code:** 500
  - **Content:** `{ "message": "Error message" }`

## Running the Project

1. **Install Dependencies**

   ```bash
   npm install
