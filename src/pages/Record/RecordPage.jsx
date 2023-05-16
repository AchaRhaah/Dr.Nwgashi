import React, { useState } from "react";
import styles from "./RecordsPage.module.css";
import { Link } from "react-router-dom";
import { InputNoIcon, BigInput, Dropdown, Calendar, Time } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function RecordPage() {
  const gender = ["Male", "Female"];
  const status = ["Pending", "Rescheduled", "Passed"];
  const firstTimeOption = ["Yes", "No"];
  const [time, setTime] = useState("10:00");
  const [uniqueCode, setUniqueCode] = useState(0);
  const [name, setName] = useState("");
  const [sex, setSex] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [apptDate, setApptDate] = useState(0);
  const [firstTime, setFirstTime] = useState("No");
  const [reqDate, setReqDate] = useState(0);
  const [apptStatus, setApptStatus] = useState("pending");
  const [apptTime, setApptTime] = useState("00:00");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [beforeAppt, setBeforeAppt] = useState("");
  const [afterAppt, setAfterAppt] = useState("");

  const addAppointment = async () => {
    const data = await fetch("http://localhost:3001/record", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uniqueCode,
        name,
        sex,
        phone,
        email,
        apptDate,
        firstTime,
        reqDate,
        apptStatus,
        apptTime,
        address,
        city,
        beforeAppt,
        afterAppt,
      }),
    }).then((res) => res.json());
    console.log(data);
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
          <InputNoIcon
            width={"7"}
            label={"Unique Code"}
            name={"uniqueCode"}
            getValue={setUniqueCode}
          />
          {console.log("status", apptStatus)}
          <InputNoIcon label={"Name"} name={"name"} getValue={setName} />
          <Dropdown
            label={"Sex"}
            data={gender}
            name={"sex"}
            getValue={setSex}
          />
          <InputNoIcon label={"Phone"} name={"phone"} getValue={setPhone} />
          <InputNoIcon label={"Email"} name={"email"} getValue={setEmail} />
        </div>
        <hr className={styles.divider} />
        <h3 className={styles.heading}>Appointment Information</h3>
        <div className={styles.row2}>
          <Calendar
            label={"Appointment date"}
            name={"apptDate"}
            getDate={setApptDate}
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
          <Time label={"Appointment page"} getTime={setTime} />
        </div>
        <h3 className={styles.heading}>Address Information</h3>
        <div className={styles.row3}>
          <InputNoIcon
            width={"12"}
            label={"Address 1"}
            name={"addr"}
            getValue={setAddress}
          />
          <InputNoIcon
            width={"14"}
            label={"City"}
            name={"city"}
            getValue={setCity}
          />
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
        <div className={styles.saveBtn} onClick={addAppointment}>
          <p className={styles.save}>Save</p>
        </div>
      </div>
    </div>
  );
}

export default RecordPage;
