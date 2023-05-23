import React from "react";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar({icon}) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navSemicircle}>
        <p className={styles.navText}>DrNG</p>
        <div className={styles.divider}></div>
        <p className={styles.navText}>Patients</p>
      </div>
      {icon ? (
        <div>
          <Link to="/">
            <FontAwesomeIcon
              className={styles.icon}
              icon={faRightFromBracket}
            />
          </Link>
          <Link to="/addUser">
            <FontAwesomeIcon className={styles.icon} icon={faUserPlus} />
          </Link>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
}

export default Navbar;
