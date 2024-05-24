import React from "react";
import DeleteEmployee from "./DeleteEmployee";
import UpdateEmployee from "./UpdateEmployee";

function EmployeeList({ employees, onDeleteEmployee, onUpdateEmployee }) {
  return (
    <div>
      <h2 className="mt-5">Employees</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id} className="d-flex mt-2">
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
