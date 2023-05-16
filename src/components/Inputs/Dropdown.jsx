import React, { useState } from "react";
import styles from "./Input.module.css";

function Dropdown({ label, data, getValue }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    const selectedIndex = event.target.selectedIndex;
    const newSelectedOption = event.target[selectedIndex].value;
    setSelectedOption(newSelectedOption);
    getValue(newSelectedOption); // pass the selected option to getValue function
    console.log("Selected option:", newSelectedOption);
  };

  return (
    <div className={styles.inputContainer}>
      <p className={styles.label}>{label}</p>
      <select
        className={styles.inputWrapper}
        onChange={handleChange}
        value={selectedOption}
      >
        {/* use the data array to generate the options */}
        <option value=""></option>
        {data.map((val, i) => (
          <option key={i} value={val}>
            {val}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
