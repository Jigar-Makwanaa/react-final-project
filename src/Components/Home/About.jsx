import React, { useEffect, useState } from 'react'
import "./about.css"

const About = () => {

    return (
        <>

            {/* about section start  */}

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

            {/* about section end  */}

            {/* banner section start  */}

            <div className="banner-section">
                <div className="container">
                    <div className="row flex">
                        <div className="main-box">
                            <div className="box flex" style={{ backgroundImage: 'url("../img/1-1.jpg")' }}>
                                <div className="content">
                                    <h3>Get up to<span>20% OFF</span></h3>
                                    <h2>SPORTS OUTFITS</h2>
                                    <h4>Collection</h4>
                                    <h5>Starting a <span>$170.00</span></h5>
                                </div>
                            </div>
                        </div>
                        <div className="main-box">
                            <div className="box flex" style={{ backgroundImage: 'url("../img/1-2.jpg")' }}>
                                <div className="content c-2">
                                    <h3>New Arrivals</h3>
                                    <h2>ACCESSORIES</h2>
                                    <h4>Collection</h4>
                                    <h5>Only From<span>$90.00</span></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* banner section end */}

        </>
    )
}

export default About