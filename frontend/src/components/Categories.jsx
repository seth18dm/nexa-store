function Categories() {
    return (
        <section
            id="categories"
            className="section categories-section"
        >
            <div className="container">

                <div className="section-heading">

                    <p className="eyebrow">
                        SHOP BY CATEGORY
                    </p>

                    <h2>
                        Find your next favourite.
                    </h2>

                    <p>
                        Explore technology built for work,
                        creativity, entertainment and everyday life.
                    </p>

                </div>

                <div className="category-grid">

                    <a
                        className="category-card"
                        href="#products"
                    >
                        <span
                            className="category-icon"
                            aria-hidden="true"
                        >
                            <i className="fa-solid fa-headphones"></i>
                        </span>

                        <h3>
                            Audio
                        </h3>

                        <p>
                            Headphones, earbuds and speakers.
                        </p>
                    </a>


                    <a
                        className="category-card"
                        href="#products"
                    >
                        <span
                            className="category-icon"
                            aria-hidden="true"
                        >
                            <i className="fa-solid fa-keyboard"></i>
                        </span>

                        <h3>
                            Accessories
                        </h3>

                        <p>
                            Keyboards, mice, chargers and more.
                        </p>
                    </a>


                    <a
                        className="category-card"
                        href="#products"
                    >
                        <span
                            className="category-icon"
                            aria-hidden="true"
                        >
                            <i className="fa-solid fa-clock"></i>
                        </span>

                        <h3>
                            Wearables
                        </h3>

                        <p>
                            Smart watches and everyday trackers.
                        </p>
                    </a>


                    <a
                        className="category-card"
                        href="#products"
                    >
                        <span
                            className="category-icon"
                            aria-hidden="true"
                        >
                            <i className="fa-solid fa-laptop"></i>
                        </span>

                        <h3>
                            Work Tech
                        </h3>

                        <p>
                            Products that improve productivity.
                        </p>
                    </a>

                </div>

            </div>
        </section>
    );
}

export default Categories;