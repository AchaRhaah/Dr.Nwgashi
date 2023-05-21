import React, { useState, useEffect } from "react";
import styles from "./Input.module.css";

function BigInput({ label, getValue, value }) {
  const [value1, setValue1] = useState("");

  useEffect(() => {
    if (value !== undefined) {
      setValue1(value);
    }
  }, [value]);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue1(inputValue);
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
        value={value1}
      ></textarea>
    </div>
  );
}

export default BigInput;
