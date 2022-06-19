import Image from "next/image";
import TerminalPath from "../../terminalPath/terminalPath";
import socials from "data/socials";
import styles from "./styles.module.css";

export default function Socials() {
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
            <Image src={icon} alt={name} width={20} height={20} /> {name}
          </a>
        ))}
      </div>
    </>
  );
}
