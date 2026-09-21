import { Link } from "react-router-dom";

function Navbar({ cartCount = 0 }) {
    return (
        <>
            {/* Skip Link */}
            <a
                className="skip-link"
                href="#main-content"
            >
                Skip to content
            </a>

            {/* Header */}
            <header className="site-header">
                <div className="container header-inner">

                    {/* Brand */}
                    <Link
                        className="brand"
                        to="/"
                        aria-label="NEXA STORE Home"
                    >
                        <span
                            className="brand-mark"
                            aria-hidden="true"
                        >
                            N
                        </span>

                        <span className="brand-name">
                            NEXA <span>STORE</span>
                        </span>
                    </Link>

                    {/* Main Navigation */}
                    <nav
                        className="main-nav"
                        aria-label="Main navigation"
                    >
                        <Link
                            className="nav-link active"
                            to="/"
                        >
                            Home
                        </Link>

                        <Link
                            className="nav-link"
                            to="/products"
                        >
                            Products
                        </Link>

                        <a
                            className="nav-link"
                            href="/#categories"
                        >
                            Categories
                        </a>

                        <a
                            className="nav-link"
                            href="/#about"
                        >
                            About
                        </a>
                    </nav>

                    {/* Header Actions */}
                    <div className="header-actions">

                        <Link
                            className="header-link"
                            to="/login"
                        >
                            Login
                        </Link>

                        <Link
                            className="cart-button"
                            to="/cart"
                            aria-label="Shopping cart"
                        >
                            <i className="fa-solid fa-cart-shopping"></i>

                            <span>
                                Cart
                            </span>

                            <span className="cart-count">
                                {cartCount}
                            </span>
                        </Link>

                    </div>

                </div>
            </header>
        </>
    );
}

export default Navbar;