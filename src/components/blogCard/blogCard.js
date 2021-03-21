import * as React from "react";
import { Link } from "gatsby";

import * as styles from "./blogCard.module.scss";

const BlogCard = ({ title, publicationDate, description, path }) => {
  return (
    <Link
      to={path}
      style={{
        color: "unset",
        borderBottom: "unset",
      }}
    >
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2>{title}</h2>
          <p>{description.slice(0, 50)}...</p>
          <p>{publicationDate}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
