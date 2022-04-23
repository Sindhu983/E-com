import { Routes, Route } from "react-router-dom";
import MockmanEs from "mockman-js";
import {Cart, Wishlist, Home, Login, Filter, Product, Navbar, Signup} from "./Components/index"


function App() {
  return ( 

  <div className="App">
    <Routes>
      <Route path="/mock" element={<MockmanEs />} />
      <Route path="/" element={<Home />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/wishlist" element={<Wishlist />}></Route> 
      <Route path="/product" element={<Product />}></Route>
      <Route path="/filter" element={<Filter />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
    </Routes>
  </div>

  );
}

export default App;

