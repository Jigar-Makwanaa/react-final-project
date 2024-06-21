import React, { useEffect, useState } from 'react'
import './popular.css'
import axios from 'axios'

const Popular = () => {

  const [record, setRecord] = useState([])
  const [popRec, setPoprec] = useState([])

  const allData = async () => {
    try {
      let { data } = await axios.get(`http://localhost:8000/product`)

      setRecord(data)
      console.log(data);

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    allData()
  }, [])

  useEffect(() => {
    let populer = record.filter((val) => {
      return val.market == "populer"
    })
    setPoprec(populer)
  }, [record])

  return (
    <>
      {/* popular section start  */}
      <section className='popular-section'>
        <div className="container">
          <div className="row">
            <div className="head">
              <h2>Popular Departments</h2>
            </div>
            <div className="main-box">
              {
                popRec.map((val) => {
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
      </section>
      {/* popular section end */}

       {/* banner section start  */}

       <div className="banner-section">
                <div className="container">
                    <div className="row flex">
                        <div className="main-box">
                            <div className="box flex" style={{ backgroundImage: 'url("../img/3-1.jpg")' }}>
                                <div className="content">
                                    <h3>NATURAL PROCESS</h3>
                                    <h2>Cosmetic Makeup
                                    Professional</h2>
                                    <a href="#">SHOP NOW</a>
                                </div>
                            </div>
                        </div>
                        <div className="main-box">
                            <div className="box flex" style={{ backgroundImage: 'url("../img/3-2.jpg")' }}>
                                <div className="content c-2">
                                    <h3>TRENDING NOW</h3>
                                    <h2>Women's Lifestyle
                                    Collection</h2>
                                    <a href="#">SHOP NOW</a>
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

export default Popular