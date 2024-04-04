import React from 'react';

export const Footer = () => {
    return (
        <footer className="text-center text-lg-start bg-body-secondary  text-muted">

            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href="/" className="me-4 text-reset">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="/" className="me-4 text-reset">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="/" className="me-4 text-reset">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="/" className="me-4 text-reset">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="/" className="me-4 text-reset">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="/" className="me-4 text-reset">
                        <i className="fab fa-github"></i>
                    </a>
                </div>

            </section>


            <section className="">
                <div className="container text-center text-md-start mt-5">

                    <div className="row mt-3">

                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"></i>Company name
                            </h6>
                            <p>
                                Stay informed with our comprehensive news coverage, delivering timely updates, analysis, and insights on global events and current affairs.
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">

                                    Business
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Entertainment
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">General
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Health
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset"> Science
                                </a>

                            </p>
                            <p> <a href="#!" className="text-reset">Sports
                            </a>
                            </p>
                            <p> <a href="#!" className="text-reset">Technology
                            </a>
                            </p>



                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                Quick links
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Home
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">About Us
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Contact Us
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Web Stories</a>
                            </p>
                        </div>



                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                info@example.com
                            </p>
                            <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                            <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                        </div>

                    </div>

                </div >
            </section >



            <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2021 Copyright:
                <a className="text-reset fw-bold" href="https://MD.com/">MD.com</a>
            </div>

        </footer >
    );
};
