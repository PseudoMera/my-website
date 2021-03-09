import "normalize.css";
import "@fontsource/roboto";

import React from "react";

import Layout from "./src/components/layout/layout";

export function wrapPageElement ({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
};
