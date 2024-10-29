const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/dbserver");
const productRoutes = require("./routes/product");

// Load environment variables from .env file
dotenv.config();

// Create an instance of express
const app = express();

// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up the connection URL for MongoDB
const PORT = 3001;
const url = process.env.CONNECTION_URL.replace("<db_password>", process.env.PASSWORD);

// Connect to the database
connectDB(url);

// Set up your routes
app.use("/api/products", productRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
