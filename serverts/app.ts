import express, { Request, Response } from "express";
import { arrayOfStudents } from "./database/studentArr";
import { Logger } from "./middleWare";
import cors from "cors";
import { IStudent } from "./database/models/studentModel";

const app = express();
let studentsArr = arrayOfStudents;
app.use(cors());
app.use(express.json());
app.use(Logger);

//http://localhost:3000/api/students
app.get("/api/students", function (req: Request, res: Response) {
  res.send(studentsArr);
});
app.post("/api/students", function (req: Request, res: Response) {
  let students: IStudent = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: parseInt(req.body.age),
    operation: req.body.id,
  };
  arrayOfStudents.push(students);
  res.send(studentsArr);
});
app.delete("/api/students", function (req: Request, res: Response) {
  const index = studentsArr.indexOf(req.body.id);
  studentsArr.splice(index, 1);
  console.log(studentsArr);
  res.send(studentsArr);
});

app.listen(3000);
