import React, { useState } from "react";
import styles from "./RecordsPage.module.css";
import { Link } from "react-router-dom";
import { Input, BigInput, Dropdown, Calendar, Time } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function RecordPage() {
  const gender = ["Male", "Female"];
  const status = ["Pending", "Rescheduled", "Passed"];
  const firstTimeOption = ["Yes", "No"];
  const [time, setTime] = useState("10:00");
  const [age, setAge] = useState(0);
  const [uniqueCode, setUniqueCode] = useState(0);
  const [name, setName] = useState("");
  const [sex, setSex] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [apptDate, setApptDate] = useState(Date.now());
  const [firstTime, setFirstTime] = useState("No");
  const [reqDate, setReqDate] = useState(Date.now());
  const [apptStatus, setApptStatus] = useState("pending");
  const [apptTime, setApptTime] = useState("00:00");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [beforeAppt, setBeforeAppt] = useState("");
  const [afterAppt, setAfterAppt] = useState("");
  const [errorMessage, setErrorMessage] = useState(false)

  const addAppointment = async () => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uniqueCode: uniqueCode,
          name: name,
          age: age,
          sex: sex,
          phone: phone,
          email: email,
          apptDate: apptDate,
          firstTime: firstTime,
          reqDate: reqDate,
          apptStatus: apptStatus,
          apptTime: apptTime,
          address: address,
          city: city,
          beforeAppt: beforeAppt,
          afterAppt: afterAppt,
        }),
      };
      const response = await fetch(
        "https://dr-ngwashi.onrender.com/record",
        requestOptions
      );
      if (response.status === 200) {
        setErrorMessage(false)
        alert("appointment created successfully");
      } else {
        setErrorMessage(true);

        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.error("Error saving appointment:", error.message);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.topContainer}>
        <Link to="/" className={styles.icon}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <h2>New Records</h2>
      </div>
      <div className={styles.navLine}></div>
      <div className={styles.container}>
        <h3 className={styles.heading}>General Information</h3>
        <div className={styles.row}>
          <Input
            width={"7"}
            label={"Unique Code"}
            name={"uniqueCode"}
            getValue={setUniqueCode}
          />
          <Input label={"Name"} name={"name"} getValue={setName} />
          <Dropdown
            label={"Sex"}
            data={gender}
            name={"sex"}
            getValue={setSex}
          />
          <Input label={"Phone"} name={"phone"} getValue={setPhone} />
          <Input label={"Email"} name={"email"} getValue={setEmail} />
        </div>
        <hr className={styles.divider} />
        <h3 className={styles.heading}>Appointment Information</h3>
        <div className={styles.row2}>
          <Calendar
            label={"Appointment date"}
            name={"apptDate"}
            getDate={setAfterAppt}
          />
          <Dropdown
            label={"First time"}
            data={firstTimeOption}
            name={"firstTime"}
            getValue={setFirstTime}
          />
          <Calendar
            label={"Request date"}
            name={"reqDate"}
            getDate={setReqDate}
          />
          <Dropdown
            label={"Appointment Status"}
            data={status}
            name={"apptStatus"}
            getValue={setApptStatus}
          />
          <Input label={"age"} getValue={setAge} />
        </div>
        <h3 className={styles.heading}>Address Information</h3>
        <div className={styles.row3}>
          <Input
            width={"12"}
            label={"Address 1"}
            name={"addr"}
            getValue={setAddress}
          />
          <Input width={"14"} label={"City"} name={"city"} getValue={setCity} />
        </div>
        <h3 className={styles.heading}>Notes</h3>
        <div className={styles.row4}>
          <BigInput
            label={"Before appointment"}
            width={"18"}
            name={"beforeAppt"}
            getValue={setBeforeAppt}
          />
          <BigInput
            label={"After appointment"}
            width={"18"}
            name={"afterAppt"}
            getValue={setAfterAppt}
          />
        </div>
        {errorMessage ? <p className={styles.error}>Fill in feilds correctly</p> : ""
        }
        <div className={styles.saveBtn} onClick={addAppointment}>
          <p className={styles.save}>Save</p>
        </div>
      </div>
    </div>
  );
}

export default RecordPage;
