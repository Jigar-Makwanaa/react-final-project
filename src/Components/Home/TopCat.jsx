import React, { useEffect, useState } from 'react'
import './topcat.css'
import axios from 'axios'

const TopCat = () => {
  const [record, setRecord] = useState([])
  const [letestrec, setLetestrec] = useState([])

  const allData = async () => {
    try {
      let { data } = await axios.get(`http://localhost:8000/product`)
      setRecord(data)

    } catch (err) {
      console.log(err);
      return false
    }
  }


  useEffect(() => {
    allData()
  }, [])

  useEffect(() => {
    let data = record && record.filter((val) => {
      return val.market == "letest"
    })

    setLetestrec(data)
    console.log(data);
  },[record])

  return (
    <>
      {/* top categories section start */}

      <section className='category-section'>
        <div className="container">
          <div className="row">
            <div className="head">
              <h2>Top Categories Of The Month</h2>
            </div>
            <div className="all-cat flex">
              {
                letestrec && letestrec.map((val) => {
                  return (
                    <div className="box">
                      <div className="content">
                        <div className="image">
                          <img src={val.img} alt="" />
                          <div className="name">
                            <h4>{val.name}</h4>
                          </div>
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

      {/* top categories section end */}
    </>
  )
}

export default TopCat