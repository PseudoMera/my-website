import TerminalPath from "@/components/terminalPath/terminalPath";
import projects from "@/data/projects";
import styles from "./styles.module.css";

export default function Projects() {
  return (
    <>
      <TerminalPath path="/projects" />
      {projects.map(({ description, link, name }) => (
        <div className={styles.projectContainer} key={name}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
          <p>{description}</p>
        </div>
      ))}
    </>
  );
}
