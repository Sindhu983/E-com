import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../index";
import "./Cart.css";
import { useCart } from "../../Context/CartContext/cartContext";
import { useWishlist } from "../../Context/WishlistContext/wishContext";
import { useProduct } from "../../Context/ProductContext/productContext";

function Cart() {
  const { product } = useProduct();
  const {
    cartData,
    removeFromCart,
    reducedData,
    getQuantity,
    decrementQuantity,
  } = useCart();
  const { totalDiscoutPrice, totalOriginalPrice } = reducedData;
  const { addToWishlist } = useWishlist();

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <div className="my-cart-container-product">
          {cartData.map((product) => (
            <div className="my-cart" key={product._id}>
              <div className="cart">
                <img className="card1-image" src={product.image} alt="boy" />
                <span className="heart-symbol">❤</span>
                <h4 className="card-title">{product.categoryName}</h4>
                <h4 className="price-wishlist">{product.price}</h4>
                <h5 className="item-rating">Rating: {product.rating}</h5>
                <div className="btn-container">
                  <button
                    className="decrement-btn"
                    onClick={() =>
                      product.qty === 1
                        ? removeFromCart(product._id)
                        : decrementQuantity(product._id)
                    }
                  >
                    -
                  </button>
                  <p className="cart-count-num">{product.qty}</p>
                  <button
                    className="increment-btn"
                    onClick={() => getQuantity(product._id)}
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => addToWishlist(product)}
                  className="move-to-cart"
                >
                  Move To wishlist
                </button>
                <div>
                  <button
                    onClick={() => removeFromCart(product)}
                    className="remove-to-cart"
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cart-total">
        <h2>Price Details</h2>
        <hr />
        <p>
          <span>Total price</span>
          <span>{totalOriginalPrice}</span>
        </p>
        <p>
          <span>Discount</span>
          <span>{totalOriginalPrice - totalDiscoutPrice}</span>
        </p>
        <p>
          <span>Delivary Charges</span>
          <span>Free</span>
        </p>
        <hr />
        <p>
          <span>Total Amount</span>
          <span>{totalDiscoutPrice}</span>
        </p>
      </div>
    </>
  );
}

export { Cart };
