import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.css";

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
 );
};

export default Navbar;
