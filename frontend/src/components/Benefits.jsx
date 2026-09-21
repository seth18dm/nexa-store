function Benefits() {
    return (
        <section
            id="about"
            className="section benefits-section"
        >
            <div className="container">

                <div className="section-heading">

                    <p className="eyebrow">
                        WHY NEXA
                    </p>

                    <h2>
                        More than a store.
                    </h2>

                    <p>
                        We focus on useful technology, simple shopping,
                        and a better customer experience.
                    </p>

                </div>


                <div className="benefits-grid">

                    <article className="benefit-card">

                        <span
                            className="benefit-icon"
                            aria-hidden="true"
                        >
                            <i className="fa-solid fa-circle-check"></i>
                        </span>

                        <h3>
                            Curated Products
                        </h3>

                        <p>
                            We focus on products that provide real
                            value instead of overwhelming customers
                            with unnecessary choices.
                        </p>

                    </article>


                    <article className="benefit-card">

                        <span
                            className="benefit-icon"
                            aria-hidden="true"
                        >
                            <i className="fa-solid fa-bolt"></i>
                        </span>

                        <h3>
                            Fast Experience
                        </h3>

                        <p>
                            A clean and responsive shopping experience
                            designed to make finding products easy.
                        </p>

                    </article>


                    <article className="benefit-card">

                        <span
                            className="benefit-icon"
                            aria-hidden="true"
                        >
                            <i className="fa-solid fa-shield-halved"></i>
                        </span>

                        <h3>
                            Secure by Design
                        </h3>

                        <p>
                            We consider authentication, authorization,
                            validation and secure handling of customer data.
                        </p>

                    </article>


                    <article className="benefit-card">

                        <span
                            className="benefit-icon"
                            aria-hidden="true"
                        >
                            <i className="fa-solid fa-heart"></i>
                        </span>

                        <h3>
                            Customer First
                        </h3>

                        <p>
                            Clear product information and straightforward
                            support at every stage of the journey.
                        </p>

                    </article>

                </div>

            </div>
        </section>
    );
}

export default Benefits;