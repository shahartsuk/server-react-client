import React, { useState } from "react";
import { addStudent } from "../StudentRow/student.services";
import "./style.css";

export const AddStudent = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState(0);
  const addNewStudent = async () => {
    setId((prev)=>prev=prev+1)
    await addStudent({ id:id,firstName: firstName, lastName: lastName, age: age });
    alert(`New student saved`);
  };
  return (
    <div className="insert-container">
      <div className="input-group mb-3 size">
        <span className="input-group-text" id="basic-addon1">
          Set
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(o) => setFirstName(o.target.value)}
          //value={firstName}
        />
      </div>
      <div className="input-group mb-3 size">
        <span className="input-group-text" id="basic-addon1">
          Set
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(o) => setLastName(o.target.value)}
          //alue={lastName}
        />
      </div>
      <div className="input-group mb-3 size">
        <span className="input-group-text" id="basic-addon1">
          Set
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Age"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(o) => setAge(o.target.value)}
          //value={age}
        />
      </div>
      <button
        className="btn btn-primary"
        type="button"
        id="button-addon2"
        onClick={addNewStudent}
      >
        Add Student
      </button>
    </div>
  );
};
