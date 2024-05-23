import React from 'react'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import "./category.css"

const CategoryAdd = () => {
  return (
    <>
      <Header />

      <div className="page-header">
        <div className="container">
          <div className="row">
            <h1>category</h1>

          </div>
        </div>
      </div>

      <div className="url-path">
        <div className="container">
          <div className="row">
            <div className="path">
              <ul className='flex'>
                <li>
                  <Link to={'/'}>home<i class="fa-solid fa-angle-right"></i></Link>
                </li>
                <li>
                  <Link to={'/admin'}>admin <i class="fa-solid fa-angle-right"></i></Link>
                </li>
                <li>category</li>
              </ul>
            </div>
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
                    <Link to={'/admin'}>dashboard</Link>
                  </li>
                  <li id='category'>
                    <Link to={'/admin/category'}>category</Link>
                  </li>
                  <li>
                    <Link to={'/admin/product'}>product</Link>
                  </li>
                  <li>
                    <Link to={'/admin/viewproduct'}>view product</Link>
                  </li>
                </ul>
              </div>
              <div className="right-side">
                <div className="icon-account flex">
                  <span><i class="fa-solid fa-layer-group"></i></span>
                  <h4>Category</h4>
                </div>
                <div className="cat-add">
                    <form>
                      <label>add Category *</label>
                      <input type="text" />

                      
                      <label>add Category icon *</label>
                      <input type="text" />

                      <div className="btn">
                        <a href="#">add</a>
                      </div>
                    </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryAdd