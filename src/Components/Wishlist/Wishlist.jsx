import React from 'react'
// import Navbar from '../Navbar/Navbar-comp'
import "./Wishlist.css"

import {images_arr} from '../../Components/images/index'
import Navbar from '../Navbar/Navbar-comp'


function Wishlist() {
  return (
    <>
    <Navbar />
    <div className="my-wishlist-container">
        <div className="my-wishlist"></div>
        <div className="wishlist">
            <img className="image" src={images_arr.boyImage} alt="girl" />
            <span className="heart-symbol">❤</span>
            <p className="card-title">Premium Demin</p>
            <h3 className="price-wishlist">RS.3000</h3>
            <button className="move-to-cart">Move to Cart</button>
        </div>
        <div className="wishlist">
            <img className="image" src={images_arr.boyImage} alt="girl" />
            <span className="heart-symbol">❤</span>
            <p className="card-title">Pepe Jeans</p>
            <h3 className="price-wishlist">RS.2500</h3>
            <button className="move-to-cart">Move to Cart</button>
        </div>
        <div className="wishlist">
            <img className="image" src={images_arr.boyImage} alt="boys" />
            <span className="heart-symbol">❤</span>
            <p className="card-title">Calvin Klein</p>
            <h3 className="price-wishlist">RS.5000</h3>
            <button className="move-to-cart">Move to Cart</button>
        </div>
    </div>
    </>
  )
}

export default Wishlist