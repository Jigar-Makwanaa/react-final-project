import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

const ViewProduct = () => {
  return (
    <>
      <Header />
      
      <div className="page-header">
        <div className="container">
          <div className="row">
            <h1>view product</h1>
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
                <li>viewproduct</li>
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
                  <li >
                    <Link to={"/admin"}>dashboard</Link>
                  </li>
                  <li>
                    <Link to={"/admin/category"}>category</Link>
                  </li>
                  <li>
                    <Link to={"/admin/product"}>product</Link>
                  </li>
                  <li id="dashbord">
                    <Link to={"/admin/viewproduct"}>view product</Link>
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
  );
};

export default ViewProduct;