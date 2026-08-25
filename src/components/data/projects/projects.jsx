import TerminalPath from "@/components/terminalPath/terminalPath";
import projects from "@/data/projects";
import styles from "./styles.module.css";

function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <TerminalPath path="ls ./projects" />
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.grid}>
        {projects.map(({ name, description, link, tags }) => (
          <a
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h3 className={styles.cardTitle}>{name}</h3>
            <p className={styles.cardDescription}>{description}</p>
            <ul className={styles.tags}>
              {tags.map((tag) => (
                <li key={tag} className={styles.tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
