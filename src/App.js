import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Body from "./components/body";
import Footer from './components/footer.js';
import Header from './components/header.js'

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
