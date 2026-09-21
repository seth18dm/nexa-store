const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Product routes
app.use("/api/products", productRoutes);

// MongoDB connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error.message);
    });

// Test route
app.get("/", (req, res) => {
    res.json({
        message: "NEXA STORE API is running"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`NEXA STORE API running on port ${PORT}`);
});