import * as React from "react";

import ExternalLink from "../externalLink/externalLink";

import * as styles from "./projectCard.module.scss";

const ProjectCard = ({ icon, title, description, repoUrl, type }) => {
  return (
    <div className={`${styles.container} ${styles[type]}`}>
      <div className={styles.wrapper}>
        <h3>{icon}{' '}{title}</h3>
        <p>{description}</p>
        <p>
          Repository: <ExternalLink href={repoUrl}>{title}</ExternalLink>
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
