import React from "react";
import { StatusBox, Table } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.homePage}>
      <div className={styles.container1}>
        <div>
          <p className={styles.appointment}>
            Ap<span className={styles.underline}>pointme</span>nts
          </p>
        </div>
        <div className={styles.inputWrapper}>
          <input className={styles.search} placeholder="Search" type="text" />
          <FontAwesomeIcon
            className={styles.searchIcon}
            icon={faMagnifyingGlass}
          />
        </div>
      </div>
      <div className={styles.status}>
        <StatusBox
          textColor={"#D92B2E"}
          title="Missed"
          bgcolor={"#EECECF"}
          amount={15}
        />
        <StatusBox
          title="Rescheduled"
          textColor={"#E28F1E"}
          bgcolor={"#EEDAC1"}
          amount={21}
        />
        <StatusBox
          title="Passed"
          bgcolor={"#CFD6CF"}
          textColor={"#4E7A66"}
          amount={5}
        />
      </div>
      <Table />
      <div className={styles.bottomContainer}>
        <div></div>
        <div className={styles.paginator}>asdfasdfasfafafadfasfas</div>
        <div className={styles.plus}>
          <Link className={styles.plus} to="/records">
            +
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
