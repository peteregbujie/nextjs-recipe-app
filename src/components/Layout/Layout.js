import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
 return (
  <div className={styles.container}>
   <Head>
    <title>Recipe Finder</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="icon" href="/favicon.ico"></link>
   </Head>
   <Navbar />
   <main className={styles.main}>{children}</main>
   <footer className={styles.footer}>Recipe Finder</footer>
  </div>
 );
};

export default Layout;
