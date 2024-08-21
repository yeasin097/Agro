import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Product from "./Components/Product";
import BidProduct from "./Components/BidProduct";
import Storage from "./Components/Storage";


function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/product" element={<Product />} /> */}
        <Route path="/bid-product/:id" element={<BidProduct />} />
        {/* <Route path="/storage" element={<Storage />} /> */}
      </Routes>
    </Router>
  );

  
}

export default App;
