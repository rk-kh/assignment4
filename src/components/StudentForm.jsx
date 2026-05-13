import React, { useState, useContext } from "react";
import { StudentContext } from "./StudentContext";

function StudentForm() {
  const { addStudent } = useContext(StudentContext);
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && roll) {
      addStudent({ name, roll });
      setName("");
      setRoll("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Add Student</h2>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Roll Number"
        value={roll}
        onChange={(e) => setRoll(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default StudentForm;
