import Header from "@/components/header/header";
import styles from "./styles.module.css";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={`screen ${styles.layout}`}>{children}</div>
    </div>
  );
}

export default Layout;
