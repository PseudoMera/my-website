import React from "react";
import { Link } from "gatsby";

import { ABOUT, BLOG, HOME, PROJECTS } from "../../../constants/routes";

import * as styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to={HOME}>PseudoMera</Link>
      <Link to={ABOUT}>About</Link>
      <Link to={BLOG}>Blog</Link>
      <Link to={PROJECTS}>Projects</Link>
    </nav>
  );
};

export default Navbar;
