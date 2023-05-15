import React from "react";
import styles from "./Status.module.css";

function Status({ text, bgcolor, textColor }) {
  return (
    <div style={{ background: `${bgcolor}` }} className={styles.container}>
      <p style={{ color: `${textColor}` }} className={styles.text}>
        {text}
      </p>
    </div>
  );
}

export default Status;
