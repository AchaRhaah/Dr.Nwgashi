import React from "react";
import styles from "./Input.module.css";

function InputRightIcon({ label, width }) {
  return (
    <div className={styles.inputContainer}>
      <p className={styles.label}>{label}</p>
      <div className={styles.inputWrapper}>
        <input
          
          className={styles.input}
          type="text"
        />
      </div>
    </div>
  );
}

export default InputRightIcon;
