import React from "react";

function DeleteEmployee({ employeeId, onDelete }) {
  const handleDelete = (event) => {
    onDelete(employeeId, event.target.value);
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default DeleteEmployee;
