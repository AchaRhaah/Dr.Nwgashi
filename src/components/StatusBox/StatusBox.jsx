import React from "react";
import styles from "./StatusBox.module.css";

function StatusBox({ title, amount, bgcolor, textColor }) {
  return (
    <div
      className={styles.container}
      style={{
        background: `${bgcolor}`,
      }}
    >
      <p className={styles.title}>{title}</p>
      <p className={styles.amount} style={{color: `${textColor}`}}>{ amount}</p>
    </div>
  );
}

export default StatusBox;
