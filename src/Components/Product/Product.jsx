import React from "react";
import axios from "axios";
import { Navbar } from "../index";
import "./Product.css"
import {Filter} from "../index"
import { useProduct } from "../../Context/ProductContext/productContext"
import {useFilter} from "../../Context/FilterContext/Filter-Context"
import {categotyFilter} from "../../Context/Utility/category-filter"
import { filterPrice } from "../../Context/Utility/filterRange";
import { filterRating } from "../../Context/Utility/filterRating";
import  { sorted } from "../../Context/Utility/sortFilter"
import {useCart} from "../../Context/CartContext/cartContext"


function Product() {

const { product } = useProduct()
const {filterState} = useFilter()
const {addToCart} = useCart()
const category = categotyFilter( product, filterState)
const priceFilterDate = filterPrice(category,filterState)
// const filterRatingData = filterRating({product,filterState})
const filterRatingData = filterRating(priceFilterDate,filterState)
const sortedData = sorted(filterRatingData,filterState)


  return (
    <>
    <Navbar/>
    <div className="Filter-container">
    <Filter />
      <div className="my-wishlist-container-product">
        {sortedData.map((product) => (

          <div className="my-wishlist" key={product._id}>
            <div className="wishlist">
              <img className="card1-image" src={product.image} alt="boy" />
              <span className="heart-symbol">❤</span>
              <h4 className="card-title">{product.categoryName}</h4>
              <h4 className="price-wishlist">{product.price}</h4>
              <h5 className="item-rating">Rating: {product.rating}</h5>
              <button onClick={()=>addToCart(product)} className="move-to-cart" >Move To cart</button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}
export {Product};
