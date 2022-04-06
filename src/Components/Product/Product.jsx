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
import  { sort } from "../../Context/Utility/sortFilter"



function Product() {

const { product } = useProduct()
const {filterState} = useFilter()
const category = categotyFilter(filterState, product)
const priceFilterDate = filterPrice(category,filterState)
const filterRatingData = filterRating({product,filterState})
const sortedData = sort(priceFilterDate,filterState,filterRatingData)

console.log(filterRatingData,"im from filter rating data");


  return (
    <>
    <Navbar/>
    <div className="Filter-container">
    <Filter />
      <div className="my-wishlist-container-product">
        {sortedData.map(({ image, categoryName, price, rating }, index) => (

          <div className="my-wishlist" key={index}>
            <div className="wishlist">
              <img className="card1-image" src={image} alt="boy" />
              <span className="heart-symbol">❤</span>
              <h4 className="card-title">{categoryName}</h4>
              <h4 className="price-wishlist">{price}</h4>
              <h5 className="item-rating">Rating: {rating}</h5>
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
