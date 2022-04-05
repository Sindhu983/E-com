import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
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
                        <span className="badge-wishlist">0</span></Link>
                    </li>
                    <li><Link to="/Cart" className="add-cart-btn btn"><i className="fa fa-shopping-cart"></i>
                    <span className="badge-wishlist">0</span></Link></li>
                
                </ul>
            </nav>
       
            </>
  )
}

export {Navbar};