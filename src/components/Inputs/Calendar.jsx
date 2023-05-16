import React, {useState} from "react";
import styles from "./Input.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCalendar } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";

function Calendar({ label, getDate }) {
  const [startDate, setStartDate] = useState(new Date());
  const handleDatePicked = (date) => {
    setStartDate(date)
    getDate(date)
  }
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor="">
        {label}
      </label>
      <div className={styles.calendar}>
        <FontAwesomeIcon icon={faCalendar} />
        <DatePicker
          className={styles.dateCalendar}
          selected={startDate}
          onChange={(date) => handleDatePicked(date)}
        />
      </div>
    </div>
  );
}

export default Calendar;
