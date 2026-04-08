# 🛒 ERD Webshop Backend

This project is a backend API for a simple e-commerce webshop, built as a school assignment to practice translating ERD diagrams into normalized relational databases and provide CRUD API endpoints. The stack includes **Node.js**, **Express**, **PostgreSQL**, and **Prisma ORM**.

---

## Features

- **Normalized Database Schema**  
  The database is structured according to an ERD, resulting in fully normalized tables for Customers, Products, Categories, Orders, and Order Items.

- **Transactional REST API**  
  The API allows for creating, reading, updating, and deleting products, customers, orders, and categories. Prisma ensures safer database interactions.

- **Transactional Integrity**  
  Key operations, especially order processing, are implemented with transactions and proper foreign key relationships, ensuring data consistency.

- **Seed Data**  
  Includes Prisma seed scripts to initialize the database with sample data.

---

## Technologies Used

- Node.js
- Express
- PostgreSQL
- Prisma ORM
- (TypeScript, if used)
- (Docker, if Docker configs/scripts included)

---

## Getting Started

1. Clone the repository:
   ```sh
   git clone https://github.com/TrooperLooper/ERD_webshop.git
   cd ERD_webshop
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up your PostgreSQL database and configure the `.env` file with your connection string.

4. Run database migrations:
   ```sh
   npx prisma migrate deploy
   ```

5. Seed the database:
   ```sh
   npx prisma db seed
   ```

6. Start the API server:
   ```sh
   npm run dev
   ```

---

## Learnings

- Designed and implemented a normalized SQL schema from an ERD diagram.
- Built real RESTful endpoints for e-commerce operations.
- Learned the importance of transactions in reliable order processing (ensuring atomic operations).
- Gained hands-on experience with modern tools like Prisma ORM and database migration/seed workflows.

---

## Note

> **Authentication and validation are _not_ included**—this project focuses on database design and core CRUD operations as per assignment scope. See code comments for potential extension ideas!

---

## License

MIT
