import React from "react";
import styles from "./Input.module.css";

function Dropdown({ label, data }) {
  return (
    <div className={styles.inputContainer}>
      <p className={styles.label}>{label}</p>
      <select
        className={styles.inputWrapper}
        name=""
        id=""
      >
        <option value=""></option>
        {data.map((gender) => [<option>{gender}</option>])}
      </select>
    </div>
  );
}

export default Dropdown;
