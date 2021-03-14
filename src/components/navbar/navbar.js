import React from "react";
import { Link } from "gatsby";

import { ABOUT, BLOG, HOME, PROJECTS } from "../../constants/routes";

import * as styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to={HOME} className="link">
        Albin Frias
      </Link>
      <Link to={ABOUT} className="link">
        About
      </Link>
      <Link to={BLOG} className="link">
        Blog
      </Link>
      <Link to={PROJECTS} className="link">
        Projects
      </Link>
    </nav>
  );
};

export default Navbar;
