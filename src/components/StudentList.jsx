import React, { useContext } from "react";
import { StudentContext } from "./StudentContext";

function StudentList() {
  const { students } = useContext(StudentContext);

  return (
    <div>
      <h2>Student List</h2>
      {students.length === 0 ? (
        <p>No students added yet.</p>
      ) : (
        <ul>
          {students.map((s, index) => (
            <li key={index}>
              {s.name} - Roll: {s.roll}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudentList;
