import React from "react";
import DeleteEmployee from "./DeleteEmployee";
import UpdateEmployee from "./UpdateEmployee";

function EmployeeList({ employees, onDeleteEmployee, onUpdateEmployee }) {
  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.first_name} {employee.last_name} - {employee.email} -{" "}
            {employee.status}
            <DeleteEmployee
              employeeId={employee.id}
              onDelete={onDeleteEmployee}
            />
            <UpdateEmployee
              employeeId={employee.id}
              currentStatus={employee.status}
              onUpdate={onUpdateEmployee}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
