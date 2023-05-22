import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../Login/login.module.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  var [error, setError] = useState("")
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (!response.ok) {
        const errorResponse = await response.json(); // get the error response from server
        throw new Error(errorResponse.message);
      }
      toast.success("Account created successfully");
      navigate("/dashboard");
    } catch (error) {
      setError(error.message)
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <ToastContainer />
      <form onSubmit={handleSubmit} className={styles.form}>
        <h3 className={`${styles.text} ${styles.heading}`}>
          Welcome to Dr. Ngashi's Clinic
        </h3>
        <p className={styles.prompt}>Sign up</p>
        <div className={styles.inputContainer}>
          <label htmlFor="" className={`${styles.text} ${styles.label}`}>
            Please enter your name
          </label>
          <input
            className={styles.input}
            type="text"
            placeholder=""
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={`${styles.text} ${styles.label}`} htmlFor="">
            Please enter your email
          </label>
          <input
            className={styles.input}
            type="text"
            placeholder=""
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={`${styles.text} ${styles.label}`} htmlFor="">
            Please enter your password
          </label>
          <input
            className={styles.input}
            type="password"
            placeholder=""
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <p className={styles.error}>{error}</p>
        <button type="submit" className={styles.signin}>
          Sign up
        </button>
      </form>
    </div>
  );
}

export default Signup;
