<<<<<<< HEAD
import Link from "next/link";
=======
import Head from "next/head";
>>>>>>> c3a99d73b926c0539a86af4707f7391a5fe05f43
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.css";

<<<<<<< HEAD
const Navbar = () => {
 const [isOpen, setisOpen] = useState(false);
 const openMenu = () => setisOpen(!isOpen);
 return (
  <nav className={styles.navbar}>
   <Link href="/">
    <a
     style={{
      fontSize: 30,
      fontWeight: "bold",
      paddingBottom: "1rem",
     }}
    >
     Home
    </a>
   </Link>
   <div className={styles.navbar__hamburger} onClick={openMenu}>
    {isOpen ? (
     <FaTimes size={30} style={{ color: "#f8f8f8" }} />
    ) : (
     <FaBars size={30} style={{ color: "#f8f8f8" }} />
    )}
   </div>
  </nav>
=======
const Navbar = ({ title = "Recipe Finder" }) => {
 const [isOpen, setisOpen] = useState(false);
 const openMenu = () => setisOpen(!isOpen);
 return (
  <div className={styles.head}>
   <nav className={styles.navbar}>
    <Head>
     <title>{title}</title>
     <link rel="icon" href="/favicon.ico"></link>
    </Head>
    <header>
     <a href="#" className={styles.navbar__logo}>
      RecipeFinder
     </a>
    </header>
    <div className={styles.navbar__hamburger} onClick={openMenu}>
     {isOpen ? (
      <FaTimes size={30} style={{ color: "#f8f8f8" }} />
     ) : (
      <FaBars size={30} style={{ color: "#f8f8f8" }} />
     )}
    </div>
   </nav>
  </div>
>>>>>>> c3a99d73b926c0539a86af4707f7391a5fe05f43
 );
};

export default Navbar;
