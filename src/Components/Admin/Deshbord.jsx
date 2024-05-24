import React from "react";
import { Link } from "react-router-dom";
import "./admin.css";

const Deshbord = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <h1>admin</h1>
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
                <li>admin</li>
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
                  <li id="dashbord">
                    <Link to={"/admin"}>dashboard</Link>
                  </li>
                  <li>
                    <Link to={"/admin/category"}>category</Link>
                  </li>
                  <li>
                    <Link to={"/admin/product"}>product</Link>
                  </li>
                  <li>
                    <Link to={"/admin/viewproduct"}>view product</Link>
                  </li>
                </ul>
              </div>
              <div className="right-side">
                <div className="jigar-account">
                  <p>
                    Hello <span>Jigar Makwana</span> (not{" "}
                    <span>Jigar Makwana</span>? Log out)
                    <br />
                    From your account dashboard you can view your recent orders,
                    manage your category and product.
                  </p>
                </div>
                <div className="main flex">
                  <div className="box">
                    <div className="icon">
                      <i class="fa-solid fa-layer-group"></i>
                    </div>
                    <div className="content">
                      <Link to={"/admin/category"}>category</Link>
                    </div>
                  </div>
                  <div className="box">
                    <div className="icon">
                      <i class="fa-brands fa-product-hunt"></i>
                    </div>
                    <div className="content">
                      <Link to={"/admin/product"}>product</Link>
                    </div>
                  </div>
                  <div className="box">
                    <div className="icon">
                      <i class="fa-solid fa-eye"></i>
                    </div>
                    <div className="content">
                      <Link to={"/admin/viewproduct"}>view product</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deshbord;
