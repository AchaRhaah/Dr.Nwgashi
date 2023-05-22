import React, {useState, useEffect} from "react";
import styles from "./Input.module.css";

function Input({ label, name, getValue, value }) {
  const [value1, setValue1] = useState("");
   useEffect(() => {
     if (value !== undefined) {
       setValue1(value);
     }
   }, [value]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue1(newValue);
    getValue(newValue);
  };
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor="">
        {label}
      </label>
      <input
        name={name}
        className={styles.input}
        type="text"
        onChange={(e) => handleChange(e)}
        value={value1}
      />
    </div>
  );
}

export default Input;
