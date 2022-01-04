import Navbar from "../Navbar/Navbar";
import styles from './Layout.module.css';

const Layout = ({ children}) => {
        
    return (
     <div className={styles.container}>     
      <Navbar />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>Recipe Finder</footer>
     </div>
    );
};

export default Layout;
