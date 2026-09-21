import { Link } from "react-router-dom";

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

function ProductCard({ product, onAddToCart }) {
    const productImage = productImages[product.name];

    return (
        <article className="product-card">

            <Link
                className="product-card-link"
                to={`/products/${product._id}`}
            >

                <div className="product-image">

                    <img
                        src={productImage}
                        alt={product.name}
                    />

                    {product.badge && (
                        <span className="product-badge">
                            {product.badge}
                        </span>
                    )}

                </div>

                <div className="product-content">

                    <p className="product-category">
                        {product.category}
                    </p>

                    <h3>
                        {product.name}
                    </h3>

                    <p className="product-description">
                        {product.description}
                    </p>

                </div>

            </Link>

            <div className="product-footer">

                <strong className="product-price">
                    ₹{Number(product.price).toLocaleString("en-IN")}
                </strong>

                <button
                    className="add-button"
                    type="button"
                    aria-label={`Add ${product.name} to cart`}
                    onClick={() => onAddToCart(product)}
                >
                    <i className="fa-solid fa-plus"></i>
                </button>

            </div>

        </article>
    );
}

export default ProductCard;