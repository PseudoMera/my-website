import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Images = () => {
  return (
    <StaticImage
      src="../images/absurd-06.png"
      alt="Snail racing to it's goal"
      placeholder="blurred"
      layout="constrained"
      width={300}
      height={300}
      className="abs-img1"
    />
  );
};

const AboutPage = () => {
  return (
    <>
      <Images />
      <main>
        <h1>About me</h1>
      </main>
    </>
  );
};

export default AboutPage;
