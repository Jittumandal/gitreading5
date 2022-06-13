import "./App.css";
import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Footer from "./Routing6/Footer";
import About from "./Routing6/About";
import Product from "./Routing6/Product";
import Contact from "./Routing6/Contact";
import Home from "./Routing6/Home";
import Error from "./Routing6/Error";
import MainHeader from "./Routing6/MainHeader";
import ProductDetails from "./Routing6/ProductDetails";
import FoodService from "./Foodservice/FoodService";
import Listing from "./Listing/Listing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainHeader />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Product" element={<Product />} />
          <Route path="Products/:item" element={<ProductDetails />} />
          <Route path="FoodService" element={<FoodService />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="/Listing/:id" element={<Listing />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <Footer path="Footer" element={<Footer />} year="2022" month="may" />
    </>
  );
}

export default App;
