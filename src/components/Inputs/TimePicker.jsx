import React from "react";
import styles from "./Input.module.css";
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";



function TimePicker({ label }) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor="">
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <TimePickerComponent id="time" />{" "}
      </div>
    </div>
  );
}

export default TimePicker;
