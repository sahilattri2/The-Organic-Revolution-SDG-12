import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "../Styles/AppointmentForm.css";

function AppointmentForm() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [farmerName, setFarmerName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [farmerGender, setFarmerGender] = useState("default");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [preferredMode, setPreferredMode] = useState("default");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (!farmerName.trim()) {
      errors.farmerName = "Farmer's name is required";
    }
    if (!contactNumber.trim()) {
      errors.contactNumber = "Contact number is required";
    } else if (contactNumber.trim().length !== 10) {
      errors.contactNumber = "Contact number must be of 10 digits";
    }
    if (farmerGender === "default") {
      errors.farmerGender = "Please select farmer's gender";
    }
    if (!appointmentTime) {
      errors.appointmentTime = "Appointment time is required";
    }
    if (preferredMode === "default") {
      errors.preferredMode = "Please select preferred mode";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please enter a valid email address";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Send data to backend
    const formData = {
      farmerName,
      contactNumber,
      farmerGender,
      appointmentTime,
      preferredMode,
      email,
    };

    fetch("http://localhost:8080/visit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          navigate("/"); 
         //toast.success("Appointment Scheduled!", {
            //position: toast.POSITION.TOP_CENTER,
           // onOpen: () => {
              //setIsSubmitted(true);
              //setTimeout(() => {
               // setIsSubmitted(false);
               // navigate("/"); // Redirect to home page
              //}, 3000); // Redirect after 3 seconds
           // },
          //});
          // Reset form fields and errors after successful submission
          setFarmerName("");
          setContactNumber("");
          setFarmerGender("default");
          setAppointmentTime("");
          setPreferredMode("default");
          setEmail("");
          setFormErrors({});
        } else {
          toast.error("Failed to schedule appointment. Please try again later.", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("An error occurred. Please try again later.", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  return (
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Organic Farming <span className="legal-siteSign">+</span>
        </Link>
      </h1>

      <div className="form-container">
        <h2 className="form-title">
          <span>Book an Organic Farming Session</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            Farmer's Name:
            <input
              type="text"
              value={farmerName}
              onChange={(e) => setFarmerName(e.target.value)}
              required
            />
            {formErrors.farmerName && <p className="error-message">{formErrors.farmerName}</p>}
          </label>

          <br />
          <label>
            Contact Number:
            <input
              type="text"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
            />
            {formErrors.contactNumber && <p className="error-message">{formErrors.contactNumber}</p>}
          </label>

          <br />
          <label>
            Farmer's Gender:
            <select
              value={farmerGender}
              onChange={(e) => setFarmerGender(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {formErrors.farmerGender && <p className="error-message">{formErrors.farmerGender}</p>}
          </label>

          <br />
          <label>
            Preferred Appointment Time:
            <input
              type="datetime-local"
              value={appointmentTime}
              min={new Date().toISOString().slice(0, 16)}
              onChange={(e) => setAppointmentTime(e.target.value)}
              required
            />
            {formErrors.appointmentTime && <p className="error-message">{formErrors.appointmentTime}</p>}
          </label>

          <br />
          <label>
            Preferred Mode:
            <select
              value={preferredMode}
              onChange={(e) => setPreferredMode(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="phone">Phone Call</option>
              <option value="video">Video Call</option>
            </select>
            {formErrors.preferredMode && <p className="error-message">{formErrors.preferredMode}</p>}
          </label>

          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {formErrors.email && <p className="error-message">{formErrors.email}</p>}
          </label>

          <br />
          <button type="submit" className="text-appointment-btn">
            Confirm Appointment
          </button>

          {isSubmitted && (
            <p className="success-message">
              Appointment details will be sent to your email.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default AppointmentForm;