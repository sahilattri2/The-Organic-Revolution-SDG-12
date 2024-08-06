import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Field.css";

function FieldVisitForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };

    try {
      const response = await fetch("http://localhost:8080/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
        
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        

        navigate("/"); 
      } else {
        console.error("Form submission failed");
        
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      
    }
  };

  return (
    <div className="field-visit-form-container">
      <div className="field-visit-form-box">
        <h2 className="field-visit-form-title">Field Visit Form</h2>
        <form className="field-visit-form" onSubmit={handleSubmit}>
          <div className="field-visit-form-input">
            <div className="user-box">
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="field-visit-form-input-field"
              />
              <label htmlFor="name" className="field-visit-form-label">
                Name
              </label>
            </div>
          </div>
          <div className="field-visit-form-input">
            <div className="user-box">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="field-visit-form-input-field"
              />
              <label htmlFor="email" className="field-visit-form-label">
                Email
              </label>
            </div>
          </div>
          <div className="field-visit-form-input">
            <div className="user-box">
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="field-visit-form-input-field"
              />
              <label htmlFor="phone" className="field-visit-form-label">
                Phone
              </label>
            </div>
          </div>
          <div className="field-visit-form-input">
            <div className="user-box">
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                required
                className="field-visit-form-textarea"
              ></textarea>
              <label htmlFor="message" className="field-visit-form-label">
                Message
              </label>
            </div>
          </div>
          <button type="submit" className="field-visit-form-submit-btn">
            Submit
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default FieldVisitForm;
