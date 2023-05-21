import React, { useState, useEffect } from "react";
import styles from "../Record/RecordsPage.module.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Input, BigInput, Dropdown, Calendar, Time } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";

function UpdateRecord() {
  let { id } = useParams();
  var [data, setData] = useState({});

  const gender = ["Male", "Female"];
  const status = ["Pending", "Rescheduled", "Passed"];
  const firstTimeOption = ["Yes", "No"];
  const [time, setTime] = useState("10:00");
  const [age, setAge] = useState(data.age);
  const [uniqueCode, setUniqueCode] = useState(0);
  const [name, setName] = useState("");
  const [sex, setSex] = useState("female");
  const [phone, setPhone] = useState("");
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
  const [errorMessage, setErrorMessage] = useState(false);

  const fetchData = () => {
    fetch(`http://localhost:3001/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setAge(data.age);
        setUniqueCode(data.uniqueCode);
        setPhone(data.phone);
        setAddress(data.address);
        setFirstTime(data.firstTime);
        setReqDate(data.reqDate);
        setSex(data.sex);
        setEmail(data.email);
        setApptDate(data.apptDate);
        setApptStatus(data.apptStatus);
        setCity(data.city);
        setName(data.name);
        setSex(data.sex);
      })
      .catch((error) => console.error(error));
  };
  useEffect(fetchData, []);
  const handleSubmit = () => {
    fetch(`http://localhost:3001/update/${id}`, {
      method: "PATCH",
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
    })
      .then((res) => {
        // console.log(res);
        if (res.ok) {
          alert("Field updated successfully");
        } else {
          alert("Update not successful");
        }
      })
      .catch((err) => {
        console.log("This is the error", err);
      });
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.topContainer}>
        <Link to="/" className={styles.icon}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <h2>Update Record</h2>
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
            value={data.uniqueCode}
          />
          <Input
            label={"Name"}
            name={"name"}
            value={data.name}
            getValue={setName}
          />

          <Dropdown
            label={"Sex"}
            data={gender}
            name={"sex"}
            getValue={setSex}
            value={data.sex}
          />
          <Input
            label={"Phone"}
            name={"phone"}
            getValue={setPhone}
            value={data.phone}
          />
          <Input
            label={"Email"}
            name={"email"}
            getValue={setEmail}
            value={data.email}
          />
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
            value={data.firstTime}
          />
          <Calendar
            label={"Request date"}
            name={"reqDate"}
            getDate={setReqDate}
            value={data.reqDate}
          />
          <Dropdown
            label={"Appointment Status"}
            data={status}
            name={"apptStatus"}
            getValue={setApptStatus}
            value={data.apptStatus}
          />
          <Input label={"age"} getValue={setAge} value={data.age} />
        </div>
        <h3 className={styles.heading}>Address Information</h3>
        <div className={styles.row3}>
          <Input
            width={"12"}
            label={"Address 1"}
            name={"addr"}
            getValue={setAddress}
            value={data.address}
          />
          <Input
            width={"14"}
            label={"City"}
            name={"city"}
            getValue={setCity}
            value={data.city}
          />
        </div>
        <h3 className={styles.heading}>Notes</h3>
        <div className={styles.row4}>
          <BigInput
            label={"Before appointment"}
            width={"18"}
            name={"beforeAppt"}
            getValue={setBeforeAppt}
            value={data.beforeAppt}
          />
          <BigInput
            label={"After appointment"}
            width={"18"}
            name={"afterAppt"}
            getValue={setAfterAppt}
            value={data.setAfterAppt}
          />
        </div>
        {errorMessage ? (
          <p className={styles.error}>Fill in feilds correctly</p>
        ) : (
          ""
        )}
        <div className={styles.saveBtn}>
          <p className={styles.save} onClick={handleSubmit}>
            Save
          </p>
        </div>
      </div>
    </div>
  );
}

export default UpdateRecord;
