import React from "react";
import styles from "./TableHeader.module.css";

function Table() {
  return (
    <div>
      <ul className={styles.table}>
        <li className={styles.table_header}>
          <div className={`${styles.tableHeaderText} ${styles.col_1}`}>
            Name
          </div>
          <div className={`${styles.col_2} ${styles.tableHeaderText}`}>
            Code
          </div>
          <div className={`${styles.col_3} ${styles.tableHeaderText}`}>Age</div>
          <div className={`${styles.col_4} ${styles.tableHeaderText}`}>
            Address
          </div>
          <div className={`${styles.col_5} ${styles.tableHeaderText}`}>
            Phone
          </div>
          <div className={`${styles.col_6} ${styles.tableHeaderText}`}>
            Status
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
