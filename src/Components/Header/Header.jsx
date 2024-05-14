import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="row flex">
            <div className="left-side">
              <span>WELCOME TO WOLMART STORE MESSAGE OR REMOVE IT!</span>
            </div>
            <div className="right-side">
              <div className="menu-bar flex">
                <div className="dropdown">
                  <select>
                    <option>USD</option>
                    <option>EUR</option>
                  </select>
                </div>
                <div className="dropdown">
                  <select>
                    <option>IND</option>
                    <option>ENG</option>
                    <option>FRA</option>
                  </select>
                </div>
                <ul className="flex">
                  <li>blog</li>
                  <li>contacs us</li>
                  <li>my account</li>
                  <li>login</li>
                  <li>register</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <header>
        <div className="container">
          <div className="row">
            <div className="header flex">
              <div className="logo">
                <img src="../logo.png" />
              </div>
              <div className="search-bar">
                <form className="flex">
                  <div className="search">
                    <input type="text" placeholder="Search in..." />
                  </div>
                  <div className="btn">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </div>
                </form>
              </div>
              <div className="icon-bar flex">
                <div className="contact">
                  <ul className="flex">
                    <li>
                      <i class="fa-solid fa-phone-volume"></i>
                    </li>
                    <li>
                      <a href="#">Live Chat or :</a>
                      <span>0(800)123-456</span>
                    </li>
                  </ul>
                </div>
                <div className="icon">
                  <ul className="flex">
                    <li>
                      <i class="fa-solid fa-heart"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-cart-shopping"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="header-bottom">
        <div className="container">
          <div className="row flex">
            <div className="categories flex">
              <a href="#">
                <i class="fa-solid fa-bars"></i>Browse Categories
              </a>
              <span>
                <i class="fa-solid fa-arrow-right"></i>
              </span>
              <div className="drop-down">
                <ul>
                  <li>
                    <i class="fa-solid fa-shirt"></i>
                    <a href="#">Fashion</a>
                  </li>
                  <li>
                    <i class="fa-solid fa-house"></i>
                    <a href="#">Home & Garden</a>
                  </li>
                  <li>
                  <i class="fa-solid fa-laptop"></i>
                    <a href="#">Electronics</a>
                  </li>
                  <li>
                  <i class="fa-solid fa-couch"></i>
                    <a href="#">furniture</a>
                  </li>
                  <li>
                  <i class="fa-solid fa-heart-pulse"></i>
                    <a href="#">healthy & beauty</a>
                  </li>
                  <li>
                  <i class="fa-solid fa-gift"></i>
                    <a href="#">gift ideas</a>
                  </li>
                  <li>
                  <i class="fa-solid fa-gamepad"></i>
                    <a href="#">toy & games</a>
                  </li>
                  <li>
                  <i class="fa-solid fa-utensils"></i>
                    <a href="#">cooking</a>
                  </li>
                  <li>
                  <i class="fa-solid fa-mobile"></i>
                    <a href="#">smart phones</a>
                  </li>
                  <li>
                  <i class="fa-solid fa-camera"></i>
                    <a href="#">camera & photo</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="menu">
              <ul className="flex">
                <li>home</li>
                <li>shop</li>
                <li>vendor</li>
                <li>blog</li>
                <li>pages</li>
                <li>elements</li>
              </ul>
            </div>
            <div className="order flex">
              <ul className="flex">
                <li>
                  <i class="fa-solid fa-location-dot"></i>
                  <span>track order</span>
                </li>
                <li>
                  <i class="fa-solid fa-scale-balanced"></i>
                  <span>daily deals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
