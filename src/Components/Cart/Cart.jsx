import React from 'react'
import {Link} from "react-router-dom"
import { Navbar } from '../index';
import "./Cart.css"

function Cart() {
  return (
      <>
      <Navbar/>
    <div className="cart_container">
      <div className="cart">
          <div className="products">
              <div className="product_1">
                  <img src="https://www.mangaldeep.co.in/image/cache/data/multi-color-sleeveless-ruffle-kids-dress-32163-297x408.jpg" alt="girl image"/>

                  <div className="details">
                      <h3 className="jean-name">Party Frock</h3>
                      <h4 className="jean-price">₹ 3000</h4>
                      <h4 className="offer">50% Off</h4>
                      <div className="increament-decrement">
                          <p className="quantity">quantity:</p>
                          <button className="quan-btn">-</button>
                          <p className="num-btn">1</p>
                          <button className="quan-btn">+</button>
                      </div>
                      <div className="button">
                          <button className="add-btn">Move to wishlist</button>
                          <button className="remove-btn">Remove from Cart</button>
                      </div>
                  </div>
              </div>
          </div>
          <div className="cart-total">
              <h2>Price Details</h2>
              <hr/>
              <p>
                <span>Total items</span>
                <span>₹ 3,500</span>
              </p>
              <p>
                <span>Discount</span>
                <span>₹ 1000</span>
              </p>
              <p>
                <span>Delivary Charges</span>
                <span>₹ 450</span>
              </p>
              <hr/>
              <p>
                <span>Total Amount</span>
                <span>₹ 3950</span>
              </p>
          </div>
      </div>
  </div>
  </>
  )
}

export {Cart};