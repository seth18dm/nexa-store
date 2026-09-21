function Footer() {
    return (
        <footer className="site-footer">

            <div className="container footer-grid">

                <div className="footer-brand">

                    <a
                        className="brand"
                        href="/"
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
                    </a>

                    <p>
                        Modern technology for everyday life.
                    </p>

                </div>


                <div className="footer-column">

                    <h3>
                        Store
                    </h3>

                    <a href="#products">
                        Products
                    </a>

                    <a href="/cart">
                        Cart
                    </a>

                    <a href="/login">
                        Login
                    </a>

                </div>


                <div className="footer-column">

                    <h3>
                        Company
                    </h3>

                    <a href="#about">
                        About
                    </a>

                    <a href="#">
                        Contact
                    </a>

                    <a href="#">
                        Careers
                    </a>

                </div>


                <div className="footer-column">

                    <h3>
                        Support
                    </h3>

                    <a href="#">
                        Shipping
                    </a>

                    <a href="#">
                        Returns
                    </a>

                    <a href="#">
                        Privacy
                    </a>

                </div>

            </div>


            <div className="container footer-bottom">

                <p>
                    © 2026 NEXA STORE. All rights reserved.
                </p>

                <p>
                    Built as a full-stack e-commerce application.
                </p>

            </div>

        </footer>
    );
}

export default Footer;