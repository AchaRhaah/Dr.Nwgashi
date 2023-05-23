import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./auth.module.css";
import { Navbar } from "../../components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  var [error, setError] = useState("");
  const navigate = useNavigate();
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://dr-ngwashi.onrender.com/sign_in", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("authToken"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      navigate("/dashboard");

      toast.success("Login successful!");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
      <div className={styles.container}>
          <Navbar icon={false} />
      <ToastContainer />
      <form onSubmit={handleSubmit} className={styles.form}>
        <h3 className={`${styles.text} ${styles.heading}`}>Welcome Back!</h3>
        <p className={styles.prompt}>Login</p>
        <div className={styles.inputContainer}>
          <label htmlFor="email" className={`${styles.text} ${styles.label}`}>
            Please enter your email
          </label>
          <input
            id="email"
            className={styles.input}
            type="email"
            placeholder=""
            required
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className={styles.inputContainer}>
          <label
            htmlFor="password"
            className={`${styles.text} ${styles.label}`}
          >
            please enter your password
          </label>
          <input
            id="password"
            className={styles.input}
            type="password"
            placeholder=""
            required
            value={password}
            onChange={handlePassword}
          />
        </div>
        <p className={styles.error}>{error}</p>
        <button className={styles.signin} type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;
