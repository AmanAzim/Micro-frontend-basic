import React from "react";
import ReactDOM from "react-dom";

import Header from "home/Header";
import Footer from "home/Footer";
import CardContent from "./CartContent";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

const App = () => (
  <div className="mx-auto max-w-6xl">
    <Header />
    <div className="my-10">
      <CardContent />
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
