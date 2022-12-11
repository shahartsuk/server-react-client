import React, { useEffect, useState } from "react";
import { getStudent } from "../StudentRow/student.services";
import axios from "axios";

import "./studentList.css";

export const StudentList = (props) => {
  const [studentArr, setStudentArr] = useState([]);
  const initComponent = async () => {
    let students = await getStudent();
    setStudentArr(students);
  };
  useEffect(() => {
    initComponent();
  }, []);
  const removeStudent = async (id) => {
    await axios.delete("http://localhost:3000/api/students", id);
  };
  return (
    <div className="tableContainer">
      <div className="header">
        <div className="space">First Name</div>
        <div className="space">Last Name</div>
        <div className="space">Age</div>
        <div className="space">Operation</div>
      </div>
      {studentArr &&
        studentArr.map((s) => {
          return (
            <StudentInfo
              id={s.id}
              removeStudent={removeStudent}
              firstName={s.firstName}
              lastName={s.lastName}
              age={s.age}
            ></StudentInfo>
          );
        })}
    </div>
  );
};

const StudentInfo = ({ id, removeStudent, firstName, lastName, age }) => {
  const deleteStudent = () => {
    removeStudent(id);
  };
  return (
    <div className="data">
      <div className="space">{firstName}</div>
      <div className="space">{lastName}</div>
      <div className="space">{age}</div>
      <button onClick={deleteStudent} className="btn btn-danger">
        Remove
      </button>
    </div>
  );
};
