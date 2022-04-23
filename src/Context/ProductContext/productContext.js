import { createContext, useContext } from "react";
import axios from "axios"
import { useState, useEffect } from "react";

const ProductContext= createContext()
const useProduct =()=> useContext(ProductContext)


function ProductProvider({children}) {

const [product, setProduct] = useState([]);

async function getData() {
  const result = await axios.get("/api/products");
  setProduct(result.data.products);
}

useEffect(() => {
  getData();
}, []);

  return (<ProductContext.Provider value={{product}}>
      {children}
  </ProductContext.Provider>)
}
export {ProductProvider, useProduct}