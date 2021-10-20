import React from 'react';
import * as mdb from 'mdb-ui-kit'; // lib

const Footer = () => {
    return (
        <div>
            <footer className="bg-dark text-center text-white">

                <div className="container p-4">

                    <section className="mb-4">

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-facebook-f"></i
                        ></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-twitter"></i
                        ></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-google"></i
                        ></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-instagram"></i
                        ></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-linkedin-in"></i
                        ></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-github"></i
                        ></a>
                    </section>



                    <section className="">
                        <form action="">

                            <div className="row d-flex justify-content-center">

                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>



                                <div className="col-md-5 col-12">

                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="form5Example21" placeholder="Please Enter Your Email" className="form-control" />

                                    </div>
                                </div>
                                <div className="col-auto">

                                    <button type="submit" className="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>

                            </div>

                        </form>
                    </section>
                    <section className="mb-4">
                        <small>Good Health Hospital Ltd is one of the leading private healthcare provider in Bangladesh. It is located in Here. As the first advanced technology homegrown healthcare unit serving for over 20 years in Bangladesh, Good Health Hospital Ltd was commenced  operations from 1996 . Now it is top one multi-disciplinary private hospital in our district. The reputation of Good Health hospital ltd is the result of quality clinical outcome and comprehensive care, made achievable through world class integrated healthcare facilities by highly trained professionals. Staffed by a large team of dedicated professional and a diverse mix of  highly skilled specialists . Good Health Hospital Ltd strives to meet patient’s standards through quality healthcare and making a different in their lives.
                        </small>
                    </section>

                </div>



                <div className="text-center p-3 info-color">
                    © 2020 Copyright:
                    <h6 className="text-white">Good Health Hospital</h6>
                </div>

            </footer>

        </div>
    );
};

export default Footer;