import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import airsoundPro from "../assets/Products/airsound-pro.png";
import mechakey75 from "../assets/Products/mechakey-75.png";
import pulseX1 from "../assets/Products/pulse-x1.png";
import charge65 from "../assets/Products/charge-65.png";
import soundpodMini from "../assets/Products/soundpod-mini.png";
import deskhub7 from "../assets/Products/deskhub-7.png";

const productImages = {
    "AirSound Pro": airsoundPro,
    "MechaKey 75": mechakey75,
    "Pulse X1": pulseX1,
    "NEXA Charge 65": charge65,
    "SoundPod Mini": soundpodMini,
    "DeskHub 7": deskhub7
};

function ProductDetails({
    cartCount,
    onAddToCart
}) {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(
                    `http://localhost:5000/api/products`
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }

                const data = await response.json();

                const foundProduct = data.find(
                    (item) => item._id === id
                );

                if (!foundProduct) {
                    setError("Product not found.");
                    return;
                }

                setProduct(foundProduct);
            } catch (error) {
                console.error(error);
                setError("Unable to load product.");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return (
            <>
                <Navbar cartCount={cartCount} />

                <main className="section">
                    <div className="container">
                        <h1>Loading product...</h1>
                    </div>
                </main>

                <Footer />
            </>
        );
    }

    if (error || !product) {
        return (
            <>
                <Navbar cartCount={cartCount} />

                <main className="section">
                    <div className="container">

                        <h1>
                            Product Not Found
                        </h1>

                        <p>
                            {error || "The product you are looking for does not exist."}
                        </p>

                        <Link
                            className="button button-primary"
                            to="/products"
                        >
                            Back to Products
                        </Link>

                    </div>
                </main>

                <Footer />
            </>
        );
    }

    const productImage = productImages[product.name];

    return (
        <>
            <Navbar cartCount={cartCount} />

            <main className="section product-details-section">

                <div className="container">

                    <div className="product-details">

                        {/* Product Image */}
                        <div className="product-details-image">

                            <img
                                src={productImage}
                                alt={product.name}
                            />

                        </div>

                        {/* Product Information */}
                        <div className="product-details-content">

                            <p className="eyebrow">
                                {product.category}
                            </p>

                            <h1>
                                {product.name}
                            </h1>

                            <p className="product-details-description">
                                {product.details}
                            </p>

                            <div className="product-details-price">
                                ₹{Number(product.price).toLocaleString("en-IN")}
                            </div>

                            <p className="product-stock">
                                {product.stock} units available
                            </p>

                            <div className="product-details-actions">

                                <button
                                    className="button button-primary"
                                    type="button"
                                    onClick={() =>
                                        onAddToCart(product)
                                    }
                                >
                                    Add to Cart
                                </button>

                                <Link
                                    className="button button-secondary"
                                    to="/products"
                                >
                                    Back to Products
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </main>

            <Footer />
        </>
    );
}

export default ProductDetails;