import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../Context/CartContext/cartContext'
import { useWishlist } from '../../Context/WishlistContext/wishContext'
import './Navbar.css'


const Navbar = () => {
    const {cartData} = useCart();
    const {wishlistData} = useWishlist();
  return (
    <>
        <nav className="navigation-bar">
                <Link to="/" className="title">Nefty</Link>
                <input className="search-bar" type="text" placeholder="search for products" />
                <ul className="side-nav-section">
                    <li>
                        <Link to="/Login"><button className="login-btn">Login
                        </button></Link>
                    </li>
                    <li>
                        <Link to="/Wishlist" className="wishlist-btn btn"><i className="fa fa-heart-o"></i>
                        <span className="badge-wishlist">{wishlistData.length}</span></Link>
                    </li>
                    <li><Link to="/Cart" className="add-cart-btn btn"><i className="fa fa-shopping-cart"></i>
                    <span className="badge-wishlist">{cartData.length}</span></Link></li>
                
                </ul>
            </nav>
       
            </>
  )
}

export {Navbar};