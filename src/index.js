import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom"
import { ProductProvider } from "./Context/ProductContext/productContext";
import { AuthProvider } from "./Context/AuthContext/Auth/AuthContext"
import { FilterProvider } from "./Context/FilterContext/Filter-Context";

// Call make Server
makeServer();

ReactDOM.render(
  <BrowserRouter>
 
  <AuthProvider>
  <FilterProvider>
    <ProductProvider>
     
        <App />
      
    </ProductProvider>
    </FilterProvider>
    </AuthProvider>
   
  </BrowserRouter>,

  document.getElementById("root")
);
