import { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const API_URL =
    import.meta.env.VITE_API_URL ||
    "http://localhost:5000/api/products";

function Products({
    cartCount,
    onAddToCart
}) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(API_URL);

                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }

                const data = await response.json();

                setProducts(data);
            } catch (error) {
                setError("Unable to load products.");
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
            <Navbar cartCount={cartCount} />

            <main className="section products-page">
                <div className="container">

                    <div className="section-heading">

                        <p className="eyebrow">
                            NEXA COLLECTION
                        </p>

                        <h1>
                            Explore our products.
                        </h1>

                        <p>
                            Discover practical technology designed
                            for work, entertainment and everyday life.
                        </p>

                    </div>

                    {loading && (
                        <p>Loading products...</p>
                    )}

                    {error && (
                        <p>{error}</p>
                    )}

                    {!loading && !error && (
                        <div className="product-grid">

                            {products.map((product) => (
                                <ProductCard
                                    key={product._id}
                                    product={product}
                                    onAddToCart={onAddToCart}
                                />
                            ))}

                        </div>
                    )}

                </div>
            </main>

            <Footer />
        </>
    );
}

export default Products;