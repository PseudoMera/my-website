import React from "react";

import socials from "../../data/socials";
import ExternalLink from "../externalLink/externalLink";

import * as styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <ul className={styles.socials}>
        <li>Made by Albin Frias</li>
        <li>
          Illustration(s) from &nbsp;
          <ExternalLink href="https://absurd.design/">
            absurd.design
          </ExternalLink>
        </li>
      </ul>

      <ul className={styles.socials}>
        {socials.map((social, idx) => (
          <li key={`${social.name}-${idx}`}>
            <ExternalLink href={social.url} className="link">
              {social.name}
            </ExternalLink>
            <img src={social.icon} alt={social.name} />
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
