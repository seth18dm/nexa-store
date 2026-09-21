const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Product name is required"],
            trim: true,
            minlength: [2, "Product name must be at least 2 characters"]
        },

        price: {
            type: Number,
            required: [true, "Product price is required"],
            min: [0, "Product price cannot be negative"]
        },

        image: {
            type: String,
            required: [true, "Product image is required"],
            trim: true
        },

        category: {
            type: String,
            required: [true, "Product category is required"],
            trim: true
        },

        description: {
            type: String,
            required: [true, "Product description is required"],
            trim: true,
            minlength: [10, "Description must be at least 10 characters"]
        },

        badge: {
            type: String,
            trim: true
        },

        stock: {
            type: Number,
            required: [true, "Product stock is required"],
            min: [0, "Stock cannot be negative"]
        },

        details: {
            type: String,
            required: [true, "Product details are required"],
            trim: true,
            minlength: [10, "Product details must be at least 10 characters"]
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Product", productSchema);