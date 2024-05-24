import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./admin.css";
import axios from "axios";

const Product = () => {
  // category get start

  const [category, setCategory] = useState();
  const [productName, setProductName] = useState();
  const [productImg, setProductImg] = useState();
  const [productPrice, setProductPrice] = useState();
  const [productCategory, setProductCategory] = useState();
  const [product, setProduct] = useState([]);

  const catRecord = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8000/category`);

      setCategory(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(category);

  useEffect(() => {
    catRecord();
  }, []);

  // category get start

  // product add start

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await axios.post(`http://localhost:8000/product`, {
      name: productName,
      img: productImg,
      price: productPrice,
      category: productCategory,
    });

    setProduct(data);

    alert("Product successfully added");

    setProductName("");
    setProductImg("");
    setProductPrice("");
    setProductCategory("");

    console.log(data);
  };

  // console.log(product); 

  // product add end

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
                  <Link to={"/admin"}>
                    admin <i class="fa-solid fa-angle-right"></i>
                  </Link>
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
                  <span>
                    <i class="fa-brands fa-product-hunt"></i>
                  </span>
                  <h4>product</h4>
                </div>
                <div className="product-add">
                  <form>
                    <label>add product name *</label>
                    <input
                      type="text" onChange={(e) => setProductName(e.target.value)} value={productName}/>

                    <label>add product image *</label>
                    <input type="text" onChange={(e)=>setProductImg(e.target.value)} value={productImg}/>

                    <label>product price *</label>
                    <input type="text" onChange={(e)=>setProductPrice(e.target.value)} value={productPrice} />

                    <label>select product category *</label>

                    <div className="select-cat">
                      <select name="hey" id="" onChange={(e)=>setProductCategory(e.target.value)} value={productCategory}>
                      {/* <option>select categort</option> */}
                        {category &&
                          category.map((val) => {
                            const { id, name, icon } = val;

                            return <option>{name}</option>;
                          })}
                      </select>
                    </div>

                    <div className="btn">
                      <a href="#" onClick={handleSubmit}>
                        add
                      </a>
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
