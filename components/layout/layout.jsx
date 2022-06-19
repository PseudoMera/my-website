import Head from "next/head";
import Header from "@/components/header/header";
import styles from "./styles.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={`screen ${styles.layout}`}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Software Engineer and open source contributor. Helping shape the future of web3 infrastructure."
          />
        </Head>
        {children}
      </div>
    </div>
  );
}
