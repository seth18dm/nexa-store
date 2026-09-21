const express = require("express");

const {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/productController");

const router = express.Router();

// GET all products
router.get("/", getProducts);

// CREATE a product
router.post("/", createProduct);

// UPDATE a product
router.put("/:id", updateProduct);

// DELETE a product
router.delete("/:id", deleteProduct);

module.exports = router;