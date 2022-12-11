import axios from "axios";

export const getStudent = async ()=>{
   let result = await fetch("http://localhost:3000/api/students");
   let studentArr = await result.json();
   return studentArr;
}

export const addStudent = async (student)=>{
await axios.post('http://localhost:3000/api/students',student)
}
