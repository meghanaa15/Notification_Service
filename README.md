# 📩 Notification Service API

A simple backend REST API built with **Node.js**, **Express.js**, and **MySQL** to manage notifications. This project is designed to demonstrate backend development concepts such as routing, middleware, API creation, database connectivity, and CRUD operations.

---

## 🚀 Features

- RESTful API using Express.js
- MySQL database integration
- JSON request handling
- Modular project structure
- CRUD operations for notifications
- Error handling
- Environment variable support using dotenv

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MySQL
- mysql2
- dotenv
- Nodemon

---

## 📂 Project Structure

```
Notification_Service/
│
├── config/
│   └── db.js
│
├── routes/
│   └── notificationRoutes.js
│
├── controllers/
│
├── models/
│
├── middleware/
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/meghanaa15/Notification_Service.git
```

### 2. Navigate into the project folder

```bash
cd Notification_Service
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project root.

Example:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=notification_db
PORT=5000
```

### 5. Start the server

Using Node:

```bash
node server.js
```

Or using Nodemon:

```bash
npm run dev
```

---

## 📡 API Endpoints

### Home Route

**GET /**

Returns:

```text
Welcome to Notification Service API
```

---

### Notifications

**POST /notifications**

Request Body:

```json
{
  "title": "Welcome",
  "message": "Your account has been created."
}
```

Response:

```text
Notifications received
```

---

## 🗄️ Database

Database Name:

```
notification_db
```

The project connects to a MySQL database using the **mysql2** package.

---

## 📌 Future Enhancements

- Create notifications
- Retrieve all notifications
- Retrieve notification by ID
- Update notification
- Delete notification
- Input validation
- Authentication & Authorization
- Pagination
- Search & Filtering
- Logging
- Unit Testing

---

## 🎯 Learning Objectives

This project helps understand:

- Express.js fundamentals
- Express Router
- Middleware
- REST APIs
- MySQL integration
- Environment variables
- Project structure (MVC)
- CRUD operations
- Git and GitHub workflow

---

## 👩‍💻 Author

**Meghana B**

GitHub: https://github.com/meghanaa15

---

## 📄 License

This project is created for educational and learning purposes.