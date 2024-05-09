import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "home/Header";
import Footer from "home/Footer";

import HomeContent from "./HomeContent";
import CartContent from "cart/CartContent";
import PdpContents from "pdp/PdpContents";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

const MainLayout = () => (
  <BrowserRouter>
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="mt-10">
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/cart" element={<CartContent />} />
          <Route path="/product/:id" element={<PdpContents />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

export default MainLayout;
