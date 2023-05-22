import React from "react";
import styles from "../Login/login.module.css";
function Signup() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h3 className={`${styles.text} ${styles.heading}`}>
          Welcome to Dr. Ngashi's Clinic
        </h3>
        <p className={styles.prompt}>Sign up</p>
        <div className={styles.inputContainer}>
          <label htmlFor="" className={`${styles.text} ${styles.label}`}>
            Please enter your name
          </label>
          <input className={styles.input} type="text" placeholder="" />
        </div>
        <div className={styles.inputContainer}>
          <label className={`${styles.text} ${styles.label}`} htmlFor="">
            please enter your email
          </label>
          <input className={styles.input} type="text" placeholder="" />
        </div>{" "}
        <div className={styles.inputContainer}>
          <label className={`${styles.text} ${styles.label}`} htmlFor="">
            Confirm your password
          </label>
          <input className={styles.input} type="password" placeholder="" />
        </div>{" "}
        <button className={styles.signin}>Sing In</button>
      </form>
    </div>
  );
}

export default Signup;
