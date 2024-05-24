import React, { useState } from "react";

function UpdateEmployee({ employeeId, currentStatus, onUpdate }) {
  const [selectedStatus, setSelectedStatus] = useState(currentStatus);

  const handleChange = (event) => {
    setSelectedStatus(event.target.value);
    onUpdate(employeeId, event.target.value);
  };

  return (
    <select value={selectedStatus} onChange={handleChange} className="ms-2">
      <option value="current">Current</option>
      <option value="former">Former</option>
    </select>
  );
}

export default UpdateEmployee;
