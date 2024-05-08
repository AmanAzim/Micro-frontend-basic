import React from "react";
import { createRoot } from "react-dom/client";

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

const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
