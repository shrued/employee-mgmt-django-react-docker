import React from "react";
import { Button } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

function DeleteEmployee({ employeeId, onDelete }) {
  const handleDelete = (event) => {
    onDelete(employeeId, event.target.value);
  };

  return (
    <div className="ms-2">
      <Button variant="danger" onClick={handleDelete}>
        <Trash />
      </Button>
    </div>
  );
}

export default DeleteEmployee;
