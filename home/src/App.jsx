import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import Footer from "./Footer";
import HomeContent from "./HomeContent";
import MainLayout from "./MainLayout";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="mt-10">
      <HomeContent />
    </div>
    <Footer />
  </div>
);

ReactDOM.render(<MainLayout />, document.getElementById("app"));
