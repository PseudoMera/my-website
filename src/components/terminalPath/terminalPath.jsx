import styles from "./styles.module.css";

function TerminalPath({ path = "" }) {
  return (
    <span className={styles.path}>
      <span className={styles.prompt}>$</span> {path}
    </span>
  );
}

export default TerminalPath;
