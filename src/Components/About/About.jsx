import React from 'react'
import "./about.css"

const About = () => {
    return (
        <>

            <div className="about-section">
                <div className="container">
                    <div className="row">
                        <div className="main flex">
                            <div className="box">
                                <div className="img">
                                    <i class="fa-solid fa-truck"></i>
                                </div>
                                <div className="content">
                                    <h4>Free Shipping & Returns</h4>
                                    <h5>For all orders over $99</h5>
                                </div>
                            </div>
                            <div className="box">
                                <div className="img">
                                    <i class="fa-solid fa-briefcase"></i>
                                </div>
                                <div className="content">
                                    <h4>Secure Payment</h4>
                                    <h5>We ensure secure payment</h5>
                                </div>
                            </div>
                            <div className="box">
                                <div className="img">
                                    <i class="fa-solid fa-money-check-dollar"></i>
                                </div>
                                <div className="content">
                                    <h4>Money Back Guarantee</h4>
                                    <h5>Any back within 30 days</h5>
                                </div>
                            </div>
                            <div className="box">
                                <div className="img">
                                    <i class="fa-solid fa-envelope-open-text"></i>
                                </div>
                                <div className="content">
                                    <h4>Free Shipping & Returns</h4>
                                    <h5>For all orders over $99</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About