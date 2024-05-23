import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./product.css"

const Product = () => {
  return (
    <>
      <Header />

      <div className="page-header">
        <div className="container">
          <div className="row">
            <h1>product</h1>
          </div>
        </div>
      </div>

      <div className="url-path">
        <div className="container">
          <div className="row">
            <div className="path">
              <ul className="flex">
                <li>
                  <Link to={"/"}>
                    home<i class="fa-solid fa-angle-right"></i>
                  </Link>
                </li>
                <li>
                  <Link to={'/admin'}>admin <i class="fa-solid fa-angle-right"></i></Link>
                </li>
                <li>product</li>
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
                    <Link to={"/admin"}>dashboard</Link>
                  </li>
                  <li>
                    <Link to={"/admin/category"}>category</Link>
                  </li>
                  <li id="product">
                    <Link to={"/admin/product"}>product</Link>
                  </li>
                  <li>
                    <Link to={"/admin/viewproduct"}>view product</Link>
                  </li>
                </ul>
              </div>
              <div className="right-side">
                <div className="icon-account flex">
                  <span><i class="fa-brands fa-product-hunt"></i></span>
                  <h4>product</h4>
                </div>
                <div className="product-add">
                    <form>
                      <label>add product name *</label>
                      <input type="text" />
                      
                      <label>add product image *</label>
                      <input type="text" />

                      <label>product price *</label>
                      <input type="text" />

                      
                      <label>select product category *</label>
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
  );
};

export default Product;
