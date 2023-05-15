import React from "react";
import styles from "./TableHeader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faAngleDown,
  faBarsFilter,
} from "@fortawesome/free-solid-svg-icons";

function Table() {
  return (
    <div className={styles.tableContainer}>
      <ul className={styles.table}>
        <li className={styles.tableHeader}>
          <div className={`${styles.tableHeaderContainer} ${styles.col_1}`}>
            <p className={styles.tableHeaderText}>Name</p>
            <div className={styles.iconContainer}>
              <FontAwesomeIcon className={styles.icon} icon={faAngleUp} />
              <FontAwesomeIcon className={styles.icon} icon={faAngleDown} />
            </div>
          </div>
          <div className={`${styles.col_2} ${styles.tableHeaderContainer}`}>
            <p className={styles.tableHeaderText}>Code</p>
            <div className={styles.iconContainer}>
              <FontAwesomeIcon className={styles.icon} icon={faAngleUp} />
              <FontAwesomeIcon className={styles.icon} icon={faAngleDown} />
            </div>
          </div>
          <div className={`${styles.col_3} ${styles.tableHeaderContainer}`}>
            <p className={styles.tableHeaderText}>Age</p>
            <div className={styles.iconWrapper}>
              <div className={styles.iconContainer}>
                <FontAwesomeIcon className={styles.icon} icon={faAngleUp} />
                <FontAwesomeIcon className={styles.icon} icon={faAngleDown} />
              </div>
            </div>
            <div className={styles.iconContainer}>
              <FontAwesomeIcon className={styles.icon} icon={faAngleUp} />
              <FontAwesomeIcon className={styles.icon} icon={faAngleDown} />
            </div>
          </div>
          <div className={`${styles.col_4} ${styles.tableHeaderContainer}`}>
            <p className={styles.tableHeaderText}>Address</p>
            <div className={styles.iconContainer}>
              <FontAwesomeIcon className={styles.icon} icon={faAngleUp} />
              <FontAwesomeIcon className={styles.icon} icon={faAngleDown} />
            </div>
          </div>
          <div className={`${styles.col_5} ${styles.tableHeaderContainer}`}>
            <p className={styles.tableHeaderText}>Phone</p>
            <div className={styles.iconContainer}>
              <FontAwesomeIcon className={styles.icon} icon={faAngleUp} />
              <FontAwesomeIcon className={styles.icon} icon={faAngleDown} />
            </div>
          </div>
          <div className={`${styles.col_6} ${styles.tableHeaderContainer}`}>
            <p className={styles.tableHeaderText}>Status</p>
            <div className={styles.iconContainer}>
              <FontAwesomeIcon className={styles.icon} icon={faAngleUp} />
              <FontAwesomeIcon className={styles.icon} icon={faAngleDown} />
            </div>
          </div>
        </li>
        <li className={styles.table_row}>
          <div className={`${styles.col} ${styles.col_1}`}>Name</div>
          <div className={`${styles.col} ${styles.col_2}`}>Code</div>
          <div className={`${styles.col} ${styles.col_3}`}>Age</div>
          <div className={`${styles.col} ${styles.col_4}`}>
            8245 Spaight Park
          </div>
          <div className={`${styles.col} ${styles.col_5}`}>Phone</div>
          <div className={`${styles.col} ${styles.col_6}`}>Status</div>
        </li>
        <li className={styles.table_row}>
          <div className={`${styles.col} ${styles.col_1}`}>Name</div>
          <div className={`${styles.col} ${styles.col_2}`}>Code</div>
          <div className={`${styles.col} ${styles.col_3}`}>Age</div>
          <div className={`${styles.col} ${styles.col_4}`}>Address</div>
          <div className={`${styles.col} ${styles.col_5}`}>Phone</div>
          <div className={`${styles.col} ${styles.col_6}`}>Status</div>
        </li>
      </ul>
    </div>
  );
}

export default Table;
