import styles from "./styles.module.css";

export default function Header({ items }) {
  return (
    <nav className={`screen ${styles.nav}`}>
      <ul className={styles.list}>
        <li className={styles.listItem}>albinfrias@pseudomera:~</li>
        {/*Change with actual links if I decide to add more pages/routes*/}
        {items &&
          items.map(({ id, name }) => (
            <li key={id} className={styles.listItem}>
              name
            </li>
          ))}
      </ul>
    </nav>
  );
}
