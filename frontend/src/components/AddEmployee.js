import React from "react";
import EmployeeForm from "./EmployeeForm";

function AddEmployee({ onAdd }) {
  const handleSubmit = (data) => {
    fetch("http://localhost:8000/api/employees/add/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data),
    })
      .then((response) => response.json())
      .then((data) => {
        onAdd();
      })
      .catch((error) => {
        console.error("Error adding employee:", error);
      });
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <EmployeeForm onSubmit={handleSubmit} />
    </div>
  );
}

export default AddEmployee;
