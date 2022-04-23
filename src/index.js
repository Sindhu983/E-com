
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom"
import { ProductProvider } from "./Context/ProductContext/productContext";
import { AuthProvider } from "./Context/AuthContext/Auth/AuthContext"
import { FilterProvider } from "./Context/FilterContext/Filter-Context";
import { CartProvider } from "./Context/CartContext/cartContext"
import {WishlistProvider} from "./Context/WishlistContext/wishContext"

// Call make Server
makeServer();

ReactDOM.render(
  <BrowserRouter>
 
<AuthProvider>
  <ProductProvider>
    <WishlistProvider>
      <CartProvider>
        <FilterProvider>
            <App /> 
        </FilterProvider>
      </CartProvider>
    </WishlistProvider>
  </ProductProvider>
</AuthProvider>
   
  </BrowserRouter>,

  document.getElementById("root")
);
