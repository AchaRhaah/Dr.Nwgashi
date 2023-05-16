import React, { useState } from "react";
import styles from "./Input.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TimePicker from "react-time-picker";

// import { faArrowLeft, faCalendar } from "@fortawesome/free-solid-svg-icons";

function Time({ label, getTime }) {
  const [time, setTime] = useState(0);
  const handleTimePicked = (date) => {
    setTime(date);
    getTime(date);
  };

  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor="">
        {label}
      </label>
      <div className={styles.calendar}>
        <TimePicker
          //   className={styles.dateCalendar}
          onChange={(time) => handleTimePicked(time)}
        />
      </div>
    </div>
  );
}

export default Time;
