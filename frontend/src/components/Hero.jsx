import airsoundPro from "../assets/Products/airsound-pro.png";

function Hero() {
    return (
        <section className="hero">

            <div className="container hero-grid">

                <div className="hero-content">

                    <p className="eyebrow">
                        SMARTER TECHNOLOGY. BETTER EVERYDAY.
                    </p>

                    <h1>
                        Upgrade your
                        <span> everyday tech.</span>
                    </h1>

                    <p className="hero-description">
                        Discover thoughtfully selected technology
                        products designed to make work, entertainment,
                        and everyday life better.
                    </p>

                    <div className="hero-actions">

                        <a
                            className="button button-primary"
                            href="#products"
                        >
                            Shop Products
                        </a>

                        <a
                            className="button button-secondary"
                            href="#about"
                        >
                            Explore NEXA
                        </a>

                    </div>

                    <div className="hero-trust">

                        <div className="trust-item">
                            <strong>10K+</strong>
                            <span>Happy Customers</span>
                        </div>

                        <div className="trust-item">
                            <strong>50+</strong>
                            <span>Premium Products</span>
                        </div>

                        <div className="trust-item">
                            <strong>4.8/5</strong>
                            <span>Customer Rating</span>
                        </div>

                    </div>

                </div>

                <div className="hero-visual">

                    <div className="hero-card">

                        <div className="hero-card-top">

                            <span className="product-badge">
                                FEATURED
                            </span>

                            <span className="product-status">
                                <i className="fa-solid fa-circle"></i>
                                In Stock
                            </span>

                        </div>

                        <div className="hero-product-image">
                            <img
                                src={airsoundPro}
                                alt="NEXA AirSound Pro headphones"
                            />
                        </div>

                        <div className="hero-product-info">

                            <p className="product-category">
                                AUDIO
                            </p>

                            <h2>
                                NEXA AirSound Pro
                            </h2>

                            <p>
                                Wireless noise-cancelling headphones
                                for focused work and immersive audio.
                            </p>

                            <div className="product-price-row">

                                <strong>
                                    ₹2,999
                                </strong>

                                <span>
                                    ₹3,999
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;