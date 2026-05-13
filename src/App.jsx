import React from "react";
import { StudentProvider } from "./components/StudentContext";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import ApiData from "./components/ApiData";
import "./App.css";

function App() {
  return (
    <StudentProvider>
      <div className="app-container">
        <h1 className="app-title"> Student Information App</h1>
        <div className="card">
          <StudentForm />
        </div>
        <div className="card">
          <StudentList />
        </div>
        <div className="card">
          <ApiData />
        </div>
      </div>
    </StudentProvider>
  );
}

export default App;
