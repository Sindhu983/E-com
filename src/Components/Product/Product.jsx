import React from "react";
import { Navbar } from "../index";
import { Link } from "react-router-dom";
import "./Product.css"
import {Filter} from "../index"
import { useProduct } from "../../Context/ProductContext/productContext"
import {useFilter} from "../../Context/FilterContext/Filter-Context"
import  { Utility } from "../../Context/Utility/category-filter"
// import { products } from "../../backend/db/products";


function sort(product, sortBy){
  if (sortBy==="HIGH_TO_LOW"){
    return [...product].sort((a,b)=>Number(b.price)-Number(a.price))
    
  }else if(sortBy==="LOW_TO_HIGH"){
    return [...product].sort((a,b)=>Number(a.price)-Number(b.price))
    
  }else{
    return product
  }
  
}

function Product() {

const { product } = useProduct()
const {state} = useFilter()

const sortedData = sort(product, state.sortByPrice )
  return (
    <>
    <Navbar/>
    <div className="Filter-container">
    <Filter />
      <div className="my-wishlist-container-product">
        {sortedData.map(({ image, categoryName, price }, index) => (

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
