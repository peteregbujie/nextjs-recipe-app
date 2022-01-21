import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';


const Navbar =({title = "Recipe Finder"})=> {
 const [isOpen, setisOpen] = useState(false);
 const openMenu = () => setisOpen(!isOpen);
 return (
     <div className={styles.head}>
   <nav className={styles.navbar}>
    <Head>
     <title>{title}</title>
     <link rel='icon' href='/favicon.ico'></link>
    </Head>
    <header>
     <a href='#' className={styles.navbar__logo}>
      RecipeFinder
     </a>
    </header>
    <ul className={isOpen ? styles.navbar__menu.active : styles.navbar__menu}>
     <li className={styles.navbar__item}>
      <Link href='/'>
       <a>Home</a>
      </Link>
     </li>
     <li className={styles.navbar__item}>
      <Link href='/'>
       <a>Categories</a>
      </Link>
     </li>
     <li className={styles.navbar__item}>
      <Link href='/'>
       <a>Recipes</a>
      </Link>
     </li>
    </ul>
    <div className={styles.navbar__hamburger} onClick={openMenu}>
     {isOpen ? (
      <FaTimes size={30} style={{ color: '#f8f8f8' }} />
     ) : (
      <FaBars size={30} style={{ color: '#f8f8f8' }} />
     )}
    </div>
   </nav>
  </div>
 );
}

export default Navbar;
