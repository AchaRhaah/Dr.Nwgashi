import React, { useState } from "react";
import styles from "./Table.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faAngleDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Status } from "../index";

function Table({ tableData, getSortCriteria }) {
  const [sortBy, setSortBy] = useState("");
  getSortCriteria(sortBy);

  return (
    <div className={styles.tableContainer}>
      <ul className={styles.table}>
        <li className={styles.tableHeader}>
          {/* SOrt by name */}
          <div className={`${styles.tableHeaderContainer} ${styles.col_1}`}>
            <p className={styles.tableHeaderText}>Name</p>
            <Tippy content="Sort in Aplbabetical order">
              <div
                onClick={() => setSortBy("nameInAlph")}
                className={styles.iconContainer}
              >
                <FontAwesomeIcon className={styles.icon} icon={faAngleUp} />
                <FontAwesomeIcon className={styles.icon} icon={faAngleDown} />
              </div>
            </Tippy>
          </div>
          {/* Sort by code */}
          <div className={`${styles.col_2} ${styles.tableHeaderContainer}`}>
            <p className={styles.tableHeaderText}>Code</p>
            <Tippy content="Sort code in assending order">
              <div
                onClick={() => setSortBy("nameCodeInOrder")}
                className={styles.iconContainer}
              >
                <FontAwesomeIcon className={styles.icon} icon={faAngleUp} />
                <FontAwesomeIcon className={styles.icon} icon={faAngleDown} />
              </div>
            </Tippy>
          </div>
          {/* Sort by age */}
          <div className={`${styles.col_3} ${styles.tableHeaderContainer}`}>
            <p className={styles.tableHeaderText}>Age</p>
            <Tippy content="Sort in assendng age">
              <div
                className={styles.iconContainer}
                onClick={() => setSortBy("ageInOrder")}
              >
                <FontAwesomeIcon className={styles.icon} icon={faAngleUp} />
                <FontAwesomeIcon className={styles.icon} icon={faAngleDown} />
              </div>
            </Tippy>
          </div>
          {/* Sort by address */}
          <div className={`${styles.col_4} ${styles.tableHeaderContainer}`}>
            <p className={styles.tableHeaderText}>Address</p>
            <Tippy content="Sort in alphabetical order">
              <div
                onClick={() => setSortBy("addrInAlph")}
                className={styles.iconContainer}
              >
                <FontAwesomeIcon className={styles.icon} icon={faAngleUp} />
                <FontAwesomeIcon className={styles.icon} icon={faAngleDown} />
              </div>
            </Tippy>
          </div>
          <div className={`${styles.col_5} ${styles.tableHeaderContainer}`}>
            <p className={styles.tableHeaderText}>Phone</p>
            <div className={styles.iconContainer}>
            </div>
          </div>
          <div className={`${styles.col_6} ${styles.tableHeaderContainer}`}>
            <div>
              <p className={styles.tableHeaderText}>Status</p>
              <div className={`${styles.iconContainer} ${styles.inputFilter}`}>
              </div>
            </div>
          </div>
        </li>
        {tableData.map((data, index) => {
          return (
            <li key={index} className={styles.table_row}>
              <div className={`${styles.col} ${styles.col_1} ${styles.name}`}>
                {data.name}
              </div>
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
                {data.apptStatus === "Rescheduled" ? (
                  <Status
                    text="Rescheduled"
                    bgcolor="#FFF3E9"
                    textColor="#E2B756"
                  />
                ) : data.apptStatus === "Pending" ? (
                  <Status
                    text="Pending"
                    bgcolor="#FCEFEF"
                    textColor="#D25856"
                  />
                ) : (
                  <Status text="Passed" bgcolor="#EDF2F1" textColor="#6F8E7C" />
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Table;
