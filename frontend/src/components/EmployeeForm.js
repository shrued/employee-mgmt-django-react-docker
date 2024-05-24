import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="current">Current</option>
          <option value="former">Former</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default EmployeeForm;
