import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <>
        <nav className="navigation-bar">
                <a className="title" href="#">Nefty</a>
                <input className="search-bar" type="text" placeholder="search for products" />
                <ul className="side-nav-section">
                    <li>
                        <button className="login-btn">
                            <a href="/Authentication/login.html">Login</a>
                        </button>
                    </li>
                    <li>
                        <a className="wishlist-btn btn" href="/wishlist/wish-list.html"><i class="fa fa-heart-o"></i>
                        <span className="badge-wishlist">0</span></a>
                    </li>
                    <li><a className="add-cart-btn btn" href="/cart/cart.html"><i class="fa fa-shopping-cart"></i>
                    <span className="badge-wishlist">0</span></a></li>
                    <li><a className="add-cart-btn btn" href="#"><i class="fa-solid fa-user"></i>
                    <span className=""></span></a></li>
                </ul>
            </nav>
       
            </>
  )
}

export default Navbar;