import React, { useCallback } from "react";
import { Link } from "gatsby";

import { ABOUT, BLOG, HOME, PROJECTS } from "../../constants/routes";

import * as styles from "./navbar.module.scss";

//TODO: Implement dark mode
const Navbar = () => {
  const handleThemeToggler = useCallback((event) => {
    const theme =
      typeof window !== "undefined" && localStorage.getItem("theme");

    if (theme === "dark") {
      typeof window !== "undefined" && localStorage.removeItem("theme");
      const link = document.querySelectorAll("#dark-mode");

      if (link) {
        link.forEach((el) => el.remove());
        event.target.textContent = "🌙";
      }
    } else {
      typeof window !== "undefined" && localStorage.setItem("theme", "dark");
      event.target.textContent = "☀️";
      const head = document.getElementsByTagName("head")[0];
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.id = "dark-mode";
      link.href = "./layout-dar";

      head.appendChild(link);
    }
  }, []);

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
      <button id="theme-toggler" onClick={(event) => handleThemeToggler(event)}>
        {typeof window !== "undefined" &&
        localStorage.getItem("theme") === "dark"
          ? "☀️"
          : "🌙"}
      </button>
    </nav>
  );
};

export default Navbar;
