import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navSemicircle}>
        <p className={styles.navText}>DrNG</p>
        <div className={styles.divider}></div>
        <p className={styles.navText}>Patients</p>
      </div>
    </nav>
  );
}

export default Navbar;
