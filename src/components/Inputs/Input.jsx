import React, {useState} from "react";
import styles from "./Input.module.css";

function Input({ label, name, getValue }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
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
      />
    </div>
  );
}

export default Input;
