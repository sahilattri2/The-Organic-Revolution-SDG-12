import React, { useState } from "react";

function OrganicProcedureUploadPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
; 
  };

  return (
    <div>
      <h2>Upload Organic Procedure Content</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default OrganicProcedureUploadPage;
