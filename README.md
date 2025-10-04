# Food App

A Node.js-based application for managing food items, orders, and users.

## Features

- User authentication and registration
- Browse and search food items
- Place and manage orders
- Admin dashboard for managing menu and orders

## Technologies

- Node.js
- Express.js
- MongoDB
- JWT Authentication

## Getting Started

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/food-app.git
    cd food-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Configure environment variables in `.env` file.

4. Start the server:
    ```bash
    npm start
    ```

## API Endpoints

| Method | Endpoint         | Description              |
|--------|-----------------|--------------------------|
| POST   | /api/auth/login | User login               |
| POST   | /api/auth/register | User registration     |
| GET    | /api/foods      | List all food items      |
| POST   | /api/orders     | Place a new order        |

## License

MIT
