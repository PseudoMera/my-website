import React from "react";

import socials from "../../data/socials";

import * as styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <ul className={styles.socials}>
        <li>Made by Albin Frias</li>
        <li>
          Illustration(s) from
          <a
            href="https://absurd.design/"
            target="_blank"
            rel="noopener noreferrer"
          >
            absurd.design
          </a>
        </li>
      </ul>

      <ul className={styles.socials}>
        {socials.map((social, idx) => (
          <li key={`${social.name}-${idx}`}>
            <a href={social.url} target="_blank" rel="noopener noreferrer">
              {social.name}
            </a>
            <img src={social.icon} alt={social.name} />
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
