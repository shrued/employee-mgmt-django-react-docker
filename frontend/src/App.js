import React, { useState, useEffect } from "react";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";
import ImportCSV from "./components/ImportCSV";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/employees/");
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error("Error fetching employeess:", error);
      }
    };
    fetchEmployees();
  }, []);

  const refreshEmployeeList = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/employees/");
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const handleDeleteEmployee = (employeeId) => {
    fetch(`http://localhost:8000/api/employees/${employeeId}/delete/`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        refreshEmployeeList();
      })
      .catch((error) => {
        console.error("Error deleting employee:", error);
      });
  };

  const handleUpdateEmployee = async (employeeId, newStatus) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/employees/${employeeId}/update/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({ status: newStatus }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const updatedEmployee = await response.json();
      setEmployees(
        employees.map((employee) => {
          if (employee.id === employeeId) {
            return {
              ...employee,
              ...updatedEmployee,
            };
          } else {
            return employee;
          }
        })
      );
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  return (
    <div className="App">
      <h1>Employee Management System</h1>
      <AddEmployee onAdd={refreshEmployeeList} />
      <ImportCSV onImport={refreshEmployeeList} />
      <EmployeeList
        employees={employees}
        onDeleteEmployee={handleDeleteEmployee}
        onUpdateEmployee={handleUpdateEmployee}
      />
    </div>
  );
}

export default App;
