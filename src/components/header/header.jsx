import styles from "./styles.module.css";

const NAV_ITEMS = [
  { id: "about", label: "about" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
];

function Header() {
  return (
    <header className={styles.header}>
      <nav className={`screen ${styles.nav}`}>
        <a href="#top" className={styles.brand}>
          <span className={styles.brandDot} />
          pseudomera
        </a>
        <ul className={styles.list}>
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className={styles.navLink}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
