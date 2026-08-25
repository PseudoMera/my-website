import TerminalPath from "@/components/terminalPath/terminalPath";
import socials from "@/data/socials";
import styles from "./styles.module.css";

function Socials() {
  return (
    <>
      <TerminalPath path="/socials" />
      <div>
        {socials.map(({ name, icon, link }) => (
          <a
            className={styles.socialLink}
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={icon} alt={name} width={20} height={20} /> {name}
          </a>
        ))}
      </div>
    </>
  );
}

export default Socials;
