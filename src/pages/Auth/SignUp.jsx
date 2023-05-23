import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Navbar } from "../../components";
import "react-toastify/dist/ReactToastify.css";
import styles from "./auth.module.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://dr-ngwashi.onrender.com/sign_up", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("authToken"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        // get the error response from server

        throw new Error(errorResponse.message);
      }

      toast.success("Account created successfully");
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const selectedIndex = event.target.selectedIndex;
    const newSelectedRole = event.target[selectedIndex].value;
    setSelectedRole(newSelectedRole);
  };

  return (
    <div className={styles.container}>
      <Navbar icon={false} />
      <ToastContainer />
      <form onSubmit={handleSubmit} className={styles.form}>
        <h3 className={`${styles.text} ${styles.heading}`}>Add a user</h3>
        <div className={styles.inputContainer}>
          <label htmlFor="" className={`${styles.text} ${styles.label}`}>
            Please enter your name
          </label>
          <input
            type="text"
            className={`${styles.text} ${styles.input}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="" className={`${styles.text} ${styles.label}`}>
            Please enter your email
          </label>
          <input
            type="email"
            className={`${styles.text} ${styles.input}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="" className={`${styles.text} ${styles.label}`}>
            Please select your role
          </label>
          <select
            name="role"
            className={`${styles.text} ${styles.dropdown}`}
            value={selectedRole}
            onChange={handleChange}
          >
            <option value="admin" selected={selectedRole === "admin"}>
              Admin
            </option>
            <option value="secretary" selected={selectedRole === "secretary"}>
              secretary
            </option>
          </select>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="" className={`${styles.text} ${styles.label}`}>
            Please enter your password
          </label>
          <input
            type="password"
            className={`${styles.text} ${styles.input}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p className={styles.error}>{error}</p>
        <button type="submit" onClick={handleSubmit} className={styles.signin}>
          Add user
        </button>
      </form>
    </div>
  );
}

export default Signup;
