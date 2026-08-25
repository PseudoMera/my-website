import TerminalPath from "@/components/terminalPath/terminalPath";
import personalInfo from "@/data/personalInfo";
import styles from "./styles.module.css";

function PersonalInfo() {
  const { eyebrow, name, tagline, bio } = personalInfo;

  return (
    <section id="about" className={styles.hero}>
      <TerminalPath path={eyebrow} />
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.tagline}>{tagline}</p>
      {bio.map((paragraph) => (
        <p key={paragraph} className={styles.bioLine}>
          {paragraph}
        </p>
      ))}
      <div className={styles.ctas}>
        <a href="#projects" className={styles.ctaPrimary}>
          View projects
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaSecondary}
        >
          Resume
        </a>
      </div>
    </section>
  );
}

export default PersonalInfo;
