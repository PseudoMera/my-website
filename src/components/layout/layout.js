import React from "react";

import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: "0 auto",
          minHeight: "100vh",
          maxWidth: "825px",
          padding: "0 1.5rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
