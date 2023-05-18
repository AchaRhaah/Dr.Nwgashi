import React, { useState } from "react";
import styles from "./Input.module.css";

function BigInput({ label, getValue }) {
  const [value, setValue] = useState();

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    const lastLetter = inputValue.charAt(inputValue.length - 1);
    getValue(lastLetter);
  };

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
        onChange={(e) => handleChange(e)}
      ></textarea>
    </div>
  );
}

export default BigInput;
