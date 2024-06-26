import React from 'react'
import './cloth.css'

const Cloth = () => {
    return (
        <>
            {/* cloth section start  */}

            <section className='cloth-section'>
                <div className="container">
                    <div className="row">
                        <div className="head">
                            <h2>Clothing & Apparel</h2>
                            <div className="btn">
                                <a href="#">More Products <i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                       <div className="main">
                       <div className="left-side">
                            <div className="content">
                                <div className="image">
                                    <img src="" alt="" />
                                </div>
                                <div className="details">
                                    <span>Weekend Sale</span>
                                    <h2>NEW ARRIVALS</h2>
                                    <h3>Collection</h3>
                                    <div className="btn">
                                        <a href="#">SHOP NOW</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-side">
                            <div className="main-box">
                                <div className="main-box">
                                    <div className="box">
                                        <div className="content">
                                            <div className="image">
                                                <img src="" alt="" />
                                            </div>
                                            <div className="details">
                                                <h3></h3>
                                                <div className="icon">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
            </section>

            {/* cloth section end */}
        </>
    )
}

export default Cloth
