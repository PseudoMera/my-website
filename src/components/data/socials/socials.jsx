import TerminalPath from "@/components/terminalPath/terminalPath";
import socials from "@/data/socials";
import styles from "./styles.module.css";

function Socials() {
  return (
    <section id="contact" className={styles.section}>
      <TerminalPath path="contact --socials" />
      <h2 className={styles.heading}>Contact</h2>
      <div className={styles.row}>
        {socials.map(({ name, icon, link }) => (
          <a
            className={styles.socialLink}
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={icon} alt="" width={16} height={16} />
            {name}
          </a>
        ))}
      </div>
    </section>
  );
}

export default Socials;
