import { Link } from "react-router-dom";

import ProductCard from "./ProductCard";

import airsoundPro from "../assets/Products/airsound-pro.png";
import mechakey75 from "../assets/Products/mechakey-75.png";
import pulseX1 from "../assets/Products/pulse-x1.png";


function FeaturedProducts({ onAddToCart }) {

    const products = [
        {
            id: 1,
            name: "AirSound Pro",
            category: "AUDIO",
            description:
                "Premium wireless headphones with active noise cancellation.",
            price: "₹2,999",
            badge: "BESTSELLER",
            image: airsoundPro
        },

        {
            id: 2,
            name: "MechaKey 75",
            category: "ACCESSORIES",
            description:
                "Compact mechanical keyboard built for productivity and gaming.",
            price: "₹3,499",
            badge: "NEW",
            image: mechakey75
        },

        {
            id: 3,
            name: "Pulse X1",
            category: "WEARABLES",
            description:
                "A modern smartwatch designed for everyday convenience.",
            price: "₹4,999",
            badge: "POPULAR",
            image: pulseX1
        }
    ];


    return (
        <section
            id="products"
            className="section products-section"
        >

            <div className="container">

                <div className="section-heading section-heading-row">

                    <div>

                        <p className="eyebrow">
                            FEATURED COLLECTION
                        </p>

                        <h2>
                            Built for your lifestyle.
                        </h2>

                    </div>


                    <Link
                        className="text-link"
                        to="/products"
                    >
                        View all products →
                    </Link>

                </div>


                <div className="product-grid">

                    {products.map((product) => (

                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={onAddToCart}
                        />

                    ))}

                </div>

            </div>

        </section>
    );
}


export default FeaturedProducts;