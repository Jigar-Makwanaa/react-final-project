import React from 'react'
import Header from '../Header/Header'
import "./leftsidebar.css"

const Leftsidebar = () => {
  return (
    <>
      <Header />

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



            <div className="left-bar">
              <div className="left-side">
                <ul>
                  <li>category</li>
                  <li>product</li>
                  <li>view</li>
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