import React from 'react'
import "./Wishlist.css"
import { useWishlist } from '../../Context/WishlistContext/wishContext'
import { useCart } from '../../Context/CartContext/cartContext'
import { useProduct } from "../../Context/ProductContext/productContext"
import {Navbar} from '../index'


function Wishlist() {
  const { product } = useProduct()
  const {wishlistData,removeFromWishlist} = useWishlist();
  const {addToCart} = useCart();
  console.log(wishlistData,"wishik");
  
  return (
    <>
    <Navbar/>
    <div className="wishlist-container">

      <div className="my-wishlist-container-product">
        {wishlistData.map((product) => (
          

          <div className="my-wishlist" key={product._id}>
            <div className="wishlist">
              <img className="card1-image" src={product.image} alt="boy" />
              <span className="heart-symbol">❤</span>
              <h4 className="card-title">{product.categoryName}</h4>
              <h4 className="price-wishlist">{product.price}</h4>
              <h5 className="item-rating">Rating: {product.rating}</h5>
              <button onClick={()=>addToCart(product)} className="move-to-cart" >Move To Cart</button>
              <button onClick={()=>removeFromWishlist(product)} className="remove-from-wishlist" >Remove from wishlist</button>
            </div>
          </div>
        ))}
      </div>
      </div>
    
    </>
  )
}

export {Wishlist};