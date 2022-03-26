import React from "react";
import axios from "axios";
import { Navbar } from "../index";
import { Link } from "react-router-dom";
import "./Product.css"
import {Filter} from "../index"


import { useState, useEffect } from "react";

function Product() {
  const [product, setProduct] = useState([]);

  async function getData() {
    const result = await axios.get("/api/products");
    setProduct(result.data.products);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <Navbar/>
    <div className="Filter-container">
    <Filter />
      <div className="my-wishlist-container-product">
        {product.map(({ image, categoryName, price }, index) => (
          <div className="my-wishlist" key={index}>
            <div className="wishlist">
              <img className="card1-image" src={image} alt="boy" />
              <span className="heart-symbol">❤</span>
              <h4 className="card-title">{categoryName}</h4>
              <h4 className="price-wishlist">{price}</h4>
              <button className="move-to-cart">Move to Cart</button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}
export {Product};
