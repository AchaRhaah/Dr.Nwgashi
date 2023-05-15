import React from "react";
import styles from "./Input.module.css";

function InputNoIcon({ label, height }) {
    return (
      <div className={styles.inputContainer}>
        <label className={styles.label} htmlFor="">
          {label}
        </label>
          <input className={styles.input} type="text" />
      </div>
    );
}

export default InputNoIcon;
