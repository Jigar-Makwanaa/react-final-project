import React, { useEffect, useState } from 'react'
import "./kitchen.css"
import axios from 'axios'

const Kitchen = () => {

    const [record, setRecord] = useState([])
    const [kitchenrecord, setKitchenrecord] = useState([])

    const allData = async() => {
        let {data} = await axios.get(`http://localhost:8000/product`)
        setRecord(data)
    }

    useEffect(()=>{
        allData()
    },[])

    useEffect(()=>{
        let kitchenData = record.filter((val)=>{
            return val.market == "Home Garden & Kitchen"
        })

        setKitchenrecord(kitchenData);
    },[record])

    return (
        <>
            {/* kitchen section start  */}

            <section className='kitchen-section'>
                <div className="container">
                    <div className="row">
                        <div className="head">
                            <h2>Home Garden & Kitchen</h2>
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
                                        kitchenrecord && kitchenrecord.map((val) => {
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

            {/* kitchen section end */}
        </>
    )
}

export default Kitchen