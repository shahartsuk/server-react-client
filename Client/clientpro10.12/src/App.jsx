import { StudentList } from "./components/StudentsList/student.list";
import { AddStudent } from "./components/InsertStudents/insert.student";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { PagesContainer } from "./Latout/main/main.layout";
import { NotFoundPage } from "./components/notFound/NotFoundPage";

export const App = () => {
  return (
    <div className="App">
      <PagesContainer></PagesContainer>
      <Routes>
        <Route path="/home" element={<StudentList />} />
        <Route path="/api/students" element={<AddStudent />} />
        <Route path="/" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
};
