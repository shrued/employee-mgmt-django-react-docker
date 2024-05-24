import React, { useState } from "react";

function ImportCSV() {
  const [csvFile, setCsvFile] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setCsvFile(event.target.files[0]);
    setError(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!csvFile) {
      setError("Please select a CSV file.");
      return;
    }

    const formData = new FormData();
    formData.append("csv_file", csvFile);

    try {
      const response = await fetch(
        "http://localhost:8000/api/employees/import/",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        console.log("CSV import response:", response);
      } else {
        const data = await response.json();
        setError(data.error || "An error occurred during import.");
      }
    } catch (error) {
      setError("Network error. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input type="file" accept=".csv" onChange={handleFileChange} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Import CSV</button>
    </form>
  );
}

export default ImportCSV;
