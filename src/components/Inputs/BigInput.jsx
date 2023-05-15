import React from "react";
import styles from "./Input.module.css";

function BigInput({ label,  }) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor="">
        {label}
      </label>
     
        <textarea
          className={styles.textarea}
          name=""
          id=""
          cols="20"
          rows="10"
        ></textarea>
      </div>
  );
}

export default BigInput;
