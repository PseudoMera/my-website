import styles from "./styles.module.css";

export default function TerminalPath({ path = "" }) {
  return (
    <span className={styles.path}>
      albinfrias@pseudomera:~{path}
      {path && `$ `}
    </span>
  );
}
