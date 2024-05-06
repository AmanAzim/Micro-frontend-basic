import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ErrorBoundry from "./ErrorBoundry";
// const Header = lazy(() => import("home/Header"));
import Header from "home/Header";
import Footer from "home/Footer";
import PdpContents from "./PdpContents";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

const App = () => (
  <Router>
    <div className="text-3xl mx-auto max-w-6xl">
      <ErrorBoundry>
        {/* <Suspense fallback={() => <div>Loading...</div>}> */}
        <Header />
        {/* </Suspense> */}
      </ErrorBoundry>
      <div className="mt-10">
        <Routes>
          <Route path="/product/:id" element={<PdpContents />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
