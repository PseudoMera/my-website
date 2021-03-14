import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Images = () => {
  return (
    <>
      <StaticImage
        src="../images/absurd-05.png"
        alt="University graduate"
        placeholder="blurred"
        layout="constrained"
        width={300}
        height={300}
        className="abs-img1"
      />
      <StaticImage
        src="../images/absurd-07.png"
        alt="Bulbs"
        placeholder="blurred"
        layout="constrained"
        width={300}
        height={300}
        className="abs-img2"
      />
    </>
  );
};

const IndexPage = () => {
  return (
    <>
      <Images />
      <main>
        <h1>Hella</h1>
      </main>
    </>
  );
};

export default IndexPage;
