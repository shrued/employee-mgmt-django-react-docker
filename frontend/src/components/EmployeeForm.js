import React, { useState } from "react";
import { Button } from "react-bootstrap";

function EmployeeForm({ onSubmit }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("current");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ firstName, lastName, email, status });
    setFirstName("");
    setLastName("");
    setEmail("");
    setStatus("current");
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column">
      <label className="mt-2">
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </label>
      <label className="mt-2">
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </label>
      <label className="mt-2">
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label className="mt-2">
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="current">Current</option>
          <option value="former">Former</option>
        </select>
      </label>
      <div className="mt-2">
        <Button variant="success" type="submit">
          Add
        </Button>
      </div>
    </form>
  );
}

export default EmployeeForm;
