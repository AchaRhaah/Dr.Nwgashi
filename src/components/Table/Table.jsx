import React from "react";
import styles from "./Table.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faAngleDown,
  faBarsFilter,
} from "@fortawesome/free-solid-svg-icons";

function Table({tableData}) {
  return (
    <div className={styles.tableContainer}>
      <ul className={styles.table}>
        <li className={styles.tableHeader}>
          <div className={`${styles.tableHeaderContainer} ${styles.col_1}`}>
            <p className={styles.tableHeaderText}>Name</p>
            <Tippsy content="Sort in Aplbabetical order">
              <div className={styles.iconContainer}>
                <FontAwesomeIcon className={styles.icon} icon={faAngleUp} />
                <FontAwesomeIcon className={styles.icon} icon={faAngleDown} />
              </div>
            </Tippsy>
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
        {tableData.map((data, index) => {
          return (
            <li key={index} className={styles.table_row}>
              <div className={`${styles.col} ${styles.col_1}`}>{data.name}</div>
              <div className={`${styles.col} ${styles.col_2}`}>
                {data.uniqueCode}
              </div>
              <div className={`${styles.col} ${styles.col_3}`}>{data.age}</div>
              <div className={`${styles.col} ${styles.col_4}`}>
                {data.address}
              </div>
              <div className={`${styles.col} ${styles.col_5}`}>
                {data.phone}
              </div>
              <div className={`${styles.col} ${styles.col_6}`}>
                {data.apptStatus}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Table;
