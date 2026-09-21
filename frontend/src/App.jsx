import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import Benefits from "./components/Benefits";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

const API_URL =
    import.meta.env.VITE_API_URL ||
    "http://localhost:5000/api/products";

function Home({ cartCount, onAddToCart }) {
    return (
        <>
            <Navbar cartCount={cartCount} />

            <main id="main-content">
                <Hero />
                <Categories />
                <FeaturedProducts onAddToCart={onAddToCart} />
                <Benefits />
                <CTA />
            </main>

            <Footer />
        </>
    );
}

function Login({ cartCount }) {
    return (
        <>
            <Navbar cartCount={cartCount} />

            <main className="section">
                <div className="container">
                    <h1>Login</h1>
                    <p>Login page coming next.</p>
                </div>
            </main>

            <Footer />
        </>
    );
}

function Admin({ cartCount }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");
    const [editingId, setEditingId] = useState(null);

    const [form, setForm] = useState({
        name: "",
        price: "",
        image: "",
        category: "",
        description: "",
        badge: "",
        stock: "",
        details: ""
    });

    const fetchProducts = async () => {
        try {
            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }

            const data = await response.json();

            setProducts(data);
        } catch (error) {
            console.error(error);
            setMessage("Failed to load products.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm((currentForm) => ({
            ...currentForm,
            [name]: value
        }));
    };

    const resetForm = () => {
        setForm({
            name: "",
            price: "",
            image: "",
            category: "",
            description: "",
            badge: "",
            stock: "",
            details: ""
        });

        setEditingId(null);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setMessage("");

        const productData = {
            name: form.name,
            price: Number(form.price),
            image: form.image,
            category: form.category,
            description: form.description,
            badge: form.badge,
            stock: Number(form.stock),
            details: form.details
        };

        try {
            const url = editingId
                ? `${API_URL}/${editingId}`
                : API_URL;

            const method = editingId ? "PUT" : "POST";

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(productData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.error || "Failed to save product"
                );
            }

            setMessage(
                editingId
                    ? "Product updated successfully."
                    : "Product added successfully."
            );

            resetForm();
            fetchProducts();
        } catch (error) {
            console.error(error);
            setMessage(error.message);
        }
    };

    const handleEdit = (product) => {
        setEditingId(product._id);

        setForm({
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
            description: product.description,
            badge: product.badge || "",
            stock: product.stock,
            details: product.details
        });

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const handleDelete = async (productId) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this product?"
        );

        if (!confirmed) {
            return;
        }

        try {
            const response = await fetch(
                `${API_URL}/${productId}`,
                {
                    method: "DELETE"
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.error || "Failed to delete product"
                );
            }

            setMessage("Product deleted successfully.");

            fetchProducts();
        } catch (error) {
            console.error(error);
            setMessage(error.message);
        }
    };

    const totalStock = products.reduce(
        (total, product) =>
            total + Number(product.stock),
        0
    );

    const averagePrice =
        products.length > 0
            ? Math.round(
                products.reduce(
                    (total, product) =>
                        total + Number(product.price),
                    0
                ) / products.length
            )
            : 0;

    const categoryCount = new Set(
        products.map((product) => product.category)
    ).size;

    const inventoryValue = products.reduce(
        (total, product) =>
            total +
            Number(product.price) * Number(product.stock),
        0
    );

    const inStockProducts = products.filter(
        (product) => Number(product.stock) > 0
    ).length;

    const outOfStockProducts = products.filter(
        (product) => Number(product.stock) === 0
    ).length;

    const averageStock =
        products.length > 0
            ? Math.round(totalStock / products.length)
            : 0;

    return (
        <>
            <Navbar cartCount={cartCount} />

            <main className="section admin-page">
                <div className="container">

                    <div className="admin-header">
                        <p className="eyebrow">
                            ADMIN PANEL
                        </p>

                        <h1>
                            Product Management
                        </h1>

                        <p>
                            Manage your NEXA STORE products,
                            inventory and product information.
                        </p>
                    </div>

                    <div className="admin-form-card">

                        <h2>
                            {editingId
                                ? "Edit Product"
                                : "Add Product"}
                        </h2>

                        <form
                            className="admin-form"
                            onSubmit={handleSubmit}
                        >

                            <div className="admin-form-group">
                                <label>
                                    Product Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="e.g. AirSound Pro"
                                    required
                                />
                            </div>

                            <div className="admin-form-group">
                                <label>
                                    Price (₹)
                                </label>

                                <input
                                    type="number"
                                    name="price"
                                    value={form.price}
                                    onChange={handleChange}
                                    min="0"
                                    placeholder="2999"
                                    required
                                />
                            </div>

                            <div className="admin-form-group">
                                <label>
                                    Image Path
                                </label>

                                <input
                                    type="text"
                                    name="image"
                                    value={form.image}
                                    onChange={handleChange}
                                    placeholder="/src/assets/Products/product.png"
                                    required
                                />
                            </div>

                            <div className="admin-form-group">
                                <label>
                                    Category
                                </label>

                                <input
                                    type="text"
                                    name="category"
                                    value={form.category}
                                    onChange={handleChange}
                                    placeholder="AUDIO"
                                    required
                                />
                            </div>

                            <div className="admin-form-group full-width">
                                <label>
                                    Short Description
                                </label>

                                <textarea
                                    name="description"
                                    value={form.description}
                                    onChange={handleChange}
                                    placeholder="Enter a short product description"
                                    required
                                />
                            </div>

                            <div className="admin-form-group">
                                <label>
                                    Badge
                                </label>

                                <input
                                    type="text"
                                    name="badge"
                                    value={form.badge}
                                    onChange={handleChange}
                                    placeholder="NEW"
                                />
                            </div>

                            <div className="admin-form-group">
                                <label>
                                    Stock
                                </label>

                                <input
                                    type="number"
                                    name="stock"
                                    value={form.stock}
                                    onChange={handleChange}
                                    min="0"
                                    placeholder="20"
                                    required
                                />
                            </div>

                            <div className="admin-form-group full-width">
                                <label>
                                    Product Details
                                </label>

                                <textarea
                                    name="details"
                                    value={form.details}
                                    onChange={handleChange}
                                    placeholder="Enter detailed product information"
                                    required
                                />
                            </div>

                            <div className="admin-form-actions">

                                <button
                                    className="button button-primary"
                                    type="submit"
                                >
                                    {editingId
                                        ? "Update Product"
                                        : "Add Product"}
                                </button>

                                {editingId && (
                                    <button
                                        className="button button-secondary"
                                        type="button"
                                        onClick={resetForm}
                                    >
                                        Cancel Edit
                                    </button>
                                )}

                            </div>
                        </form>

                        {message && (
                            <p className="admin-message">
                                {message}
                            </p>
                        )}
                    </div>

                    <div className="admin-products-header">
                        <p className="eyebrow">
                            ANALYTICS
                        </p>

                        <h2>
                            Store Overview
                        </h2>
                    </div>

                    <div className="admin-stats-grid">

                        <div className="admin-stat-card">
                            <span className="admin-stat-label">
                                Total Products
                            </span>

                            <strong className="admin-stat-value">
                                {products.length}
                            </strong>
                        </div>

                        <div className="admin-stat-card">
                            <span className="admin-stat-label">
                                Total Stock
                            </span>

                            <strong className="admin-stat-value">
                                {totalStock}
                            </strong>
                        </div>

                        <div className="admin-stat-card">
                            <span className="admin-stat-label">
                                Average Price
                            </span>

                            <strong className="admin-stat-value">
                                ₹{averagePrice.toLocaleString("en-IN")}
                            </strong>
                        </div>

                        <div className="admin-stat-card">
                            <span className="admin-stat-label">
                                Categories
                            </span>

                            <strong className="admin-stat-value">
                                {categoryCount}
                            </strong>
                        </div>

                        <div className="admin-stat-card">
                            <span className="admin-stat-label">
                                Inventory Value
                            </span>

                            <strong className="admin-stat-value">
                                ₹{inventoryValue.toLocaleString("en-IN")}
                            </strong>
                        </div>

                        <div className="admin-stat-card">
                            <span className="admin-stat-label">
                                In-Stock Products
                            </span>

                            <strong className="admin-stat-value">
                                {inStockProducts}
                            </strong>
                        </div>

                        <div className="admin-stat-card">
                            <span className="admin-stat-label">
                                Out-of-Stock Products
                            </span>

                            <strong className="admin-stat-value">
                                {outOfStockProducts}
                            </strong>
                        </div>

                        <div className="admin-stat-card">
                            <span className="admin-stat-label">
                                Average Stock
                            </span>

                            <strong className="admin-stat-value">
                                {averageStock}
                            </strong>
                        </div>

                    </div>

                    <div className="admin-products-header">
                        <p className="eyebrow">
                            PRODUCTS
                        </p>

                        <h2>
                            Manage Products
                        </h2>
                    </div>

                    {loading ? (
                        <p>
                            Loading products...
                        </p>
                    ) : (
                        <div className="product-grid">

                            {products.map((product) => (
                                <article
                                    className="product-card admin-product-card"
                                    key={product._id}
                                >

                                    <div className="admin-product-info">

                                        <p className="product-category">
                                            {product.category}
                                        </p>

                                        <h3>
                                            {product.name}
                                        </h3>

                                        <p className="admin-product-price">
                                            ₹{Number(product.price).toLocaleString("en-IN")}
                                        </p>

                                        <p className="admin-product-stock">
                                            Stock: {product.stock} units
                                        </p>

                                    </div>

                                    <div className="admin-product-actions">

                                        <button
                                            className="button button-secondary"
                                            type="button"
                                            onClick={() =>
                                                handleEdit(product)
                                            }
                                        >
                                            Edit
                                        </button>

                                        <button
                                            className="button button-primary"
                                            type="button"
                                            onClick={() =>
                                                handleDelete(product._id)
                                            }
                                        >
                                            Delete
                                        </button>

                                    </div>

                                </article>
                            ))}

                        </div>
                    )}

                </div>
            </main>

            <Footer />
        </>
    );
}

function NotFound({ cartCount }) {
    return (
        <>
            <Navbar cartCount={cartCount} />

            <main className="section">
                <div className="container">

                    <h1>
                        404 - Page Not Found
                    </h1>

                    <p>
                        The page you are looking for does not exist.
                    </p>

                </div>
            </main>

            <Footer />
        </>
    );
}

function App() {
    const [cartItems, setCartItems] = useState([]);

    const getProductId = (product) => {
        return product._id || product.id;
    };

    const addToCart = (product) => {
        const productId = getProductId(product);

        setCartItems((currentItems) => {
            const existingItem = currentItems.find(
                (item) =>
                    getProductId(item) === productId
            );

            if (existingItem) {
                return currentItems.map((item) =>
                    getProductId(item) === productId
                        ? {
                            ...item,
                            quantity: item.quantity + 1
                        }
                        : item
                );
            }

            return [
                ...currentItems,
                {
                    ...product,
                    quantity: 1
                }
            ];
        });
    };

    const increaseQuantity = (productId) => {
        setCartItems((currentItems) =>
            currentItems.map((item) =>
                getProductId(item) === productId
                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    }
                    : item
            )
        );
    };

    const decreaseQuantity = (productId) => {
        setCartItems((currentItems) =>
            currentItems
                .map((item) =>
                    getProductId(item) === productId
                        ? {
                            ...item,
                            quantity: item.quantity - 1
                        }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const removeFromCart = (productId) => {
        setCartItems((currentItems) =>
            currentItems.filter(
                (item) =>
                    getProductId(item) !== productId
            )
        );
    };

    const cartCount = cartItems.reduce(
        (total, item) =>
            total + item.quantity,
        0
    );

    return (
        <Routes>

            <Route
                path="/"
                element={
                    <Home
                        cartCount={cartCount}
                        onAddToCart={addToCart}
                    />
                }
            />

            <Route
                path="/products"
                element={
                    <Products
                        cartCount={cartCount}
                        onAddToCart={addToCart}
                    />
                }
            />

            <Route
                path="/products/:id"
                element={
                    <ProductDetails
                        cartCount={cartCount}
                        onAddToCart={addToCart}
                    />
                }
            />

            <Route
                path="/cart"
                element={
                    <Cart
                        cartCount={cartCount}
                        cartItems={cartItems}
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity={decreaseQuantity}
                        removeFromCart={removeFromCart}
                    />
                }
            />

            <Route
                path="/login"
                element={
                    <Login
                        cartCount={cartCount}
                    />
                }
            />

            <Route
                path="/admin"
                element={
                    <Admin
                        cartCount={cartCount}
                    />
                }
            />

            <Route
                path="*"
                element={
                    <NotFound
                        cartCount={cartCount}
                    />
                }
            />

        </Routes>
    );
}

export default App;