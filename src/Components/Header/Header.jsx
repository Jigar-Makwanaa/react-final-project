import React, { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaFontAwesome } from "react-icons/fa6";
import { ImCalculator } from "react-icons/im";

const Header = () => {

  const [allCategory, setAllCategory] = useState([])

  const record = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8000/category`)

      setAllCategory(data)
    }
    catch (error) {
      console.log(error);
    }

  }

  console.log(allCategory);

  useEffect(() => {
    record()
  }, [allCategory])

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
                  <li>
                    <Link to={'/admin'}>admin</Link>
                  </li>
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

                  {
                    allCategory.map((val) => {
                      
                      const { id, name, icon } = val;

                      return (
                        <li>
                          <i className={icon}></i>
                          <a href="">{name}</a>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
            <div className="menu">
              <ul className="flex">
                <li>
                  <Link to={'/'}>home</Link>
                </li>
                <li>
                  <Link to={'/shop'}>shop</Link>
                </li>
                <li>
                  <Link to={'/vendor'}>vendor</Link>
                </li>
                <li>
                  <Link to={'/blog'}>blog</Link>
                </li>
                <li>
                  <Link to={'/pages'}>pages</Link>
                </li>
                <li>
                  <Link to={'/elements'}>elements</Link>
                </li>
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
