import React from 'react'
import Header from '../Header/Header'
import "./leftsidebar.css"
import { Link } from 'react-router-dom'
import Carousel from '../Home/Carousel'

const Leftsidebar = () => {
  return (
    <>
      <Header />
      <Carousel/>

      <div className="page-header">
        <div className="container">
          <div className="row">
            <h1>admin</h1>
          </div>
        </div>
      </div>

      <div className="leftsidebar-section">
        <div className="container">
          <div className="row">
            <div className="left-bar flex">
              <div className="left-side">
                <ul>
                  <li>
                    <Link>category</Link>
                  </li>
                  <li>
                    <Link>product</Link>
                  </li>
                  <li>
                    <Link>view product</Link>
                  </li>
                </ul>
              </div>
              <div className="right-side">
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Leftsidebar