import React, { useEffect, useState } from 'react'
import "./elec.css"
import axios from 'axios'

const Elec = () => {

    const [record, setRecord] = useState([])
    const [elecrecord, setElecrecord] = useState([])

    let allData = async () => {
        try {
            let { data } = await axios.get(`http://localhost:8000/product`)
            setRecord(data)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        allData()
    }, [])

    useEffect(() => {
        let eleData = record.filter((val) => {
            return val.market == "Consumer Electric"
        })

        setElecrecord(eleData);
    }, [record])

    return (
        <>
            {/* elec section start  */}

            <section className='elec-section'>
                <div className="container">
                    <div className="row">
                        <div className="head">
                            <h2>Consumer Electric</h2>
                            <div className="btn">
                                <a href="#">More Products <i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="main">
                            <div className="left-side">
                                <div className="content">
                                    <div className="details">
                                        <span>Weekend collection</span>
                                        <h2>TOP CAMERA</h2>
                                        <h3>Mirrorless</h3>
                                        <div className="btn">
                                            <a href="#">SHOP NOW</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-side">
                                <div className="main-box">
                                    {
                                        elecrecord && elecrecord.map((val) => {
                                            return (
                                                <div className="box">
                                                    <div className="content">
                                                        <div className="image">
                                                            <img src={val.img} alt="" />
                                                        </div>
                                                        <div className="details">
                                                            <h3>{val.name}</h3>
                                                            <div className="icon">
                                                                <i class="fa-solid fa-star"></i>
                                                                <i class="fa-solid fa-star"></i>
                                                                <i class="fa-solid fa-star"></i>
                                                                <i class="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>{val.price}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* elec section end */}

            {/* banner section start  */}

            <section className='banner-section'>
                <div className="container">
                    <div className="row">
                        <div className="main">
                            <div className="content">
                                <div className="left-side">
                                    <div className="off">
                                        <span>25%</span>
                                    </div>
                                    <div className="details">
                                        <h2>FOR TODAY'S FASHION</h2>
                                        <h3>Use code <span>Black 12345 </span> to get best offer.</h3>
                                    </div>
                                </div>
                                <div className="right-side">
                                    <div className="btn">
                                        <a href="#">shop now <i class="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* banner section end */}
        </>
    )
}

export default Elec