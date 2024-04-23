import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

import ErrorBoundry from "./ErrorBoundry";
// const Header = lazy(() => import("home/Header"));
import Header from "home/Header";
import Footer from "home/Footer";

import "./index.scss";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <ErrorBoundry>
      {/* <Suspense fallback={() => <div>Loading...</div>}> */}
      <Header />
      {/* </Suspense> */}
    </ErrorBoundry>
    <div className="mt-10">PDP page content</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
