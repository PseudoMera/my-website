import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const NotFoundPage = () => {
  return (
    <main>
      <title>Not found</title>
      <h1>Are you lost?</h1>
      <StaticImage
        src="../images/absurd-03.png"
        alt="Chimney"
        placeholder="blurred"
        layout="constrained"
      />
    </main>
  );
};

export default NotFoundPage;
