import styles from "./styles.module.css";

function TerminalPath({ path = "" }) {
  return (
    <span className={styles.path}>
      albinfrias@pseudomera:~
      <span className={styles.path_end}>
        {path}{path && `$ `}{" "}
      </span>
    </span>
  );
}

export default TerminalPath;
