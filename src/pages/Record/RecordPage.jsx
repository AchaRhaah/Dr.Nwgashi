import React, { useState } from "react";
import styles from "./RecordsPage.module.css";
import { Link } from "react-router-dom";
import { InputNoIcon, BigInput, Dropdown, Calendar } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function RecordPage() {
  const gender = ["Male", "Female"];
  const status = ["Pending", "Rescheduled", "Passed"];
  const firstTime = ["Yes", "No"];
  const [time, setTime] = useState("10:00");

  const onTimeChange = (newTime) => {
    setTime(newTime);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.topContainer}>
        <Link to="/" className={styles.icon}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <h2>New Records</h2>
      </div>
      <div className={styles.navLine}></div>
      <div className={styles.container}>
        <h3 className={styles.heading}>General Information</h3>
        <div className={styles.row}>
          <InputNoIcon width={"7"} label={"Unique Code"} />
          <InputNoIcon label={"Name"} />
          <Dropdown label={"Sex"} data={gender} />
          <InputNoIcon label={"Phone"} />
          <InputNoIcon label={"Email"} />
        </div>
        <hr className={styles.divider} />
        <h3 className={styles.heading}>Appointment Information</h3>
        <div className={styles.row2}>
          <Calendar label={"Appointment date"} />
          <Dropdown label={"First time"} data={firstTime} />
          <Calendar label={"Request date"} />
          <Dropdown label={"Appointment Status"} data={status} />
        </div>
        <h3 className={styles.heading}>Address Information</h3>
        <div className={styles.row3}>
          <InputNoIcon width={"12"} label={"Address 1"} />
          <InputNoIcon width={"14"} label={"City"} />
        </div>
        <h3 className={styles.heading}>Notes</h3>
        <div className={styles.row4}>
          <BigInput label={"Before appointment"} width={"18"} />
          <BigInput label={"After appointment"} width={"18"} />
        </div>
        <div className={styles.saveBtn}>
          <p className={styles.save}>Save</p>
        </div>
      </div>
    </div>
  );
}

export default RecordPage;
