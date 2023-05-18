import React, { useEffect, useState } from "react";
import { StatusBox, Table } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import styles from "./HomePage.module.css";

function HomePage() {
  const [appt, setAppt] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(7);
  const [sort, setSort] = useState("");

  useEffect(() => {
    GetAppointments();
  }, []);

  function sortArrayByName(arr) {
    arr.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
    return arr;
  }

  function codeInOrder(arr) {
    arr.sort((a, b) => {
      if (a.uniqueCode < b.uniqueCode) {
        return -1;
      } else if (a.uniqueCode > b.uniqueCode) {
        return 1;
      } else {
        return 0;
      }
    });
    return arr;
  }

  function sortArrayByAge(arr) {
    arr.sort((a, b) => {
      return a.age - b.age;
    });
    return arr;
  }

  function sortArrayByAddress(arr) {
    arr.sort((a, b) => {
      if (a.address < b.address) {
        return -1;
      } else if (a.address > b.address) {
        return 1;
      } else {
        return 0;
      }
    });
    return arr;
  }

  const GetAppointments = () => {
    fetch("http://localhost:3001/")
      .then((res) => res.json())
      .then((data) => setAppt(data))
      .catch((e) => console.error("Error", e));
  };

  if (sort === "nameInAlph") {
    sortArrayByName(appt)
    console.log(appt);
  }

  // Logic for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = appt.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log("sort", sort);
  return (
    <div className={styles.homePage}>
      <div className={styles.container1}>
        <div>
          <p className={styles.appointment}>
            Ap<span className={styles.underline}>pointme</span>nts
          </p>
        </div>
        <div className={styles.inputWrapper}>
          <input className={styles.search} placeholder="Search" type="text" />
          <FontAwesomeIcon
            className={styles.searchIcon}
            icon={faMagnifyingGlass}
          />
        </div>
      </div>
      <div className={styles.status}>
        <StatusBox
          textColor={"#D92B2E"}
          title="Missed"
          bgcolor={"#EECECF"}
          amount={15}
        />
        <StatusBox
          title="Rescheduled"
          textColor={"#E28F1E"}
          bgcolor={"#EEDAC1"}
          amount={21}
        />
        <StatusBox
          title="Passed"
          bgcolor={"#CFD6CF"}
          textColor={"#4E7A66"}
          amount={5}
        />
      </div>
      <Table tableData={currentItems} getSortCriteria={setSort} />
      <div className={styles.pagination}>
        {appt.length > itemsPerPage ? (
          <ul className={styles.paginationList}>
            <li className="previous">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
              >
                {"<"}
              </button>
            </li>
            {new Array(Math.ceil(appt.length / itemsPerPage))
              .fill("")
              .map((_, index) => {
                let page;

                if (
                  index === 0 ||
                  index === Math.ceil(appt.length / itemsPerPage) - 1 ||
                  (index > currentPage - 3 && index < currentPage + 1)
                ) {
                  page = (
                    <li
                      key={index}
                      className={currentPage === index + 1 ? styles.active : ""}
                    >
                      <button onClick={() => setCurrentPage(index + 1)}>
                        {index + 1}
                      </button>
                    </li>
                  );
                } else if (
                  (index === 1 && currentPage > 4) ||
                  (index === Math.ceil(appt.length / itemsPerPage) - 2 &&
                    currentPage < Math.ceil(appt.length / itemsPerPage) - 3) ||
                  index === currentPage - 3 ||
                  index === currentPage + 1
                ) {
                  page = (
                    <li key={index} className={styles.disabled}>
                      <span>{"..."}</span>
                    </li>
                  );
                } else {
                  return null;
                }

                return page;
              })}
            <li className="next">
              <button
                disabled={currentPage === Math.ceil(appt.length / itemsPerPage)}
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >
                {">"}
              </button>
            </li>
          </ul>
        ) : null}
      </div>
      <div className={styles.bottomContainer}>
        <div></div>
        <div className={styles.plus}>
          <Link className={styles.plus} to="/records">
            +
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
