import Header from "@/components/header/header";
import ShaderBackground from "@/components/shaderBackground/shaderBackground";
import styles from "./styles.module.css";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <ShaderBackground />
      <Header />
      <div className={`screen ${styles.layout}`}>{children}</div>
      <footer className={`screen ${styles.footer}`}>
        <p>designed &amp; built by Albin Frías · {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default Layout;
