# WTWR (What to Wear)

A Node.js + Express.js backend API for managing users and clothing items, built with MongoDB and Mongoose. This project includes CRUD operations, error handling, and simple authentication simulation using middleware.

---

## 🚀 Features

- Create, read, and delete clothing items
- Create and fetch users
- Like/unlike clothing items
- Simulated authentication using hardcoded middleware
- Centralized error codes and error messages
- MongoDB connection using Mongoose

---

## 🛠️ Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman (for testing)

---

## 🧠 Techniques Used

🛠 Express.js Routing
Modular route structure using separate files for users and clothingItems.

🗃 MongoDB with Mongoose
Mongoose schemas define model structure, data types, and relationships.

Automatic createdAt timestamps via default values.

✅ Schema Validation
Required fields, string length constraints, and enums are enforced via schema.

URL validation using the validator npm package for imageUrl.

🧩 Middleware Usage
Global middleware to simulate authorization by injecting a mock req.user.

💬 Centralized Error Handling
Common HTTP status codes stored in utils/errors.js.
