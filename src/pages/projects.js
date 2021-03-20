import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import ProjectCard from "../components/projectCard/projectCard";
import projects from "../data/projects";

const Images = () => {
  return (
    <StaticImage
      src="../images/absurd-09.png"
      alt="Snail racing to it's goal"
      placeholder="blurred"
      layout="constrained"
      width={300}
      height={300}
      className="abs-img2"
    />
  );
};

const ProjectsPage = () => {
  return (
    <>
      <Images />
      <main>
        <h1>My projects</h1>
        {projects.map((project, idx) => (
          <ProjectCard
            key={`${project.title}-${idx}`}
            title={project.title}
            description={project.description}
            repoUrl={project.repositoryUrl}
            type={idx % 2 === 0 ? "light" : "dark"}
            icon={project.icon}
            tools={project.tools}
          />
        ))}
      </main>
    </>
  );
};

export default ProjectsPage;
