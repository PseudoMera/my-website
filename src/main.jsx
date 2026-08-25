import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Layout from "@/components/layout/layout";
import "@/styles/normalize.css";
import "@/styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
);
