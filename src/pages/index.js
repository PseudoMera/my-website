import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import ExternalLink from "../components/externalLink/externalLink";
import { Github, Linkedin } from "../data/socials";

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
        <h1>Welcome to my website!</h1>
        <p>
          My name is Albin Esteban Frias Rojas and I'm a software engineer based
          in the Dominican Republic. I'm currently working as a front-end
          engineer but trying to transition to a back-end engineer with my
          ultimate goal being to work as a tooling engineer.
        </p>
        <p>
          You can find more about my work and what I'm currently working on at:{" "}
          <ExternalLink href={Github.url}>
            {Github.name}
            <img src={Github.icon} alt="Github" />
          </ExternalLink>
        </p>
        <p>
          In addition to my work you can also find more personal information
          about me in:{" "}
          <ExternalLink href={Linkedin.url}>
            {Linkedin.name}
            <img src={Linkedin.icon} alt="Linkedin" />
          </ExternalLink>
        </p>
      </main>
    </>
  );
};

export default IndexPage;
