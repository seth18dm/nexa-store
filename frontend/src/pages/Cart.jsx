import { Link } from "react-router-dom";

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

function Cart({
    cartCount,
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
}) {
    const getProductId = (product) => {
        return product._id || product.id;
    };

    const getPriceValue = (price) => {
        return Number(price);
    };

    const total = cartItems.reduce(
        (sum, item) =>
            sum + getPriceValue(item.price) * item.quantity,
        0
    );

    return (
        <>
            <Navbar cartCount={cartCount} />

            <main className="section cart-section">

                <div className="container">

                    <div className="section-heading">

                        <p className="eyebrow">
                            YOUR CART
                        </p>

                        <h1>
                            Shopping Cart
                        </h1>

                        <p>
                            Review your selected products before checkout.
                        </p>

                    </div>

                    {cartItems.length === 0 ? (

                        <div className="cart-empty">

                            <div className="cart-empty-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>

                            <h2>
                                Your cart is empty
                            </h2>

                            <p>
                                Explore our products and add something you love.
                            </p>

                            <Link
                                className="button button-primary"
                                to="/products"
                            >
                                Explore Products
                            </Link>

                        </div>

                    ) : (

                        <div className="cart-layout">

                            {/* Cart Items */}
                            <div className="cart-items">

                                {cartItems.map((item) => {

                                    const productId = getProductId(item);
                                    const productImage =
                                        productImages[item.name];

                                    return (
                                        <article
                                            className="cart-item"
                                            key={productId}
                                        >

                                            <div className="cart-item-image-wrapper">

                                                <img
                                                    className="cart-item-image"
                                                    src={productImage}
                                                    alt={item.name}
                                                />

                                            </div>

                                            <div className="cart-item-info">

                                                <p className="product-category">
                                                    {item.category}
                                                </p>

                                                <h2>
                                                    {item.name}
                                                </h2>

                                                <p className="cart-item-price">
                                                    ₹{Number(item.price).toLocaleString("en-IN")}
                                                </p>

                                                <button
                                                    className="remove-button"
                                                    type="button"
                                                    onClick={() =>
                                                        removeFromCart(productId)
                                                    }
                                                >
                                                    <i className="fa-regular fa-trash-can"></i>
                                                    Remove
                                                </button>

                                            </div>

                                            <div className="cart-item-actions">

                                                <div className="quantity-controls">

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            decreaseQuantity(productId)
                                                        }
                                                        aria-label={`Decrease ${item.name} quantity`}
                                                    >
                                                        −
                                                    </button>

                                                    <span>
                                                        {item.quantity}
                                                    </span>

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            increaseQuantity(productId)
                                                        }
                                                        aria-label={`Increase ${item.name} quantity`}
                                                    >
                                                        +
                                                    </button>

                                                </div>

                                            </div>

                                        </article>
                                    );
                                })}

                            </div>

                            {/* Order Summary */}
                            <aside className="cart-summary">

                                <h2>
                                    Order Summary
                                </h2>

                                <div className="cart-summary-row">

                                    <span>
                                        Items
                                    </span>

                                    <strong>
                                        {cartCount}
                                    </strong>

                                </div>

                                <div className="cart-summary-row">

                                    <span>
                                        Subtotal
                                    </span>

                                    <strong>
                                        ₹{total.toLocaleString("en-IN")}
                                    </strong>

                                </div>

                                <div className="cart-summary-row">

                                    <span>
                                        Shipping
                                    </span>

                                    <strong>
                                        Free
                                    </strong>

                                </div>

                                <div className="cart-summary-divider"></div>

                                <div className="cart-summary-total">

                                    <span>
                                        Total
                                    </span>

                                    <strong>
                                        ₹{total.toLocaleString("en-IN")}
                                    </strong>

                                </div>

                                <button
                                    className="button button-primary cart-checkout-button"
                                    type="button"
                                >
                                    Proceed to Checkout
                                </button>

                                <Link
                                    className="continue-shopping"
                                    to="/products"
                                >
                                    ← Continue Shopping
                                </Link>

                            </aside>

                        </div>

                    )}

                </div>

            </main>

            <Footer />
        </>
    );
}

export default Cart;