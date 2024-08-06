// BookAppointment.js
import React from "react";
import Farmer from "../Assets/gold.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/FieldVisitForm");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={Farmer} alt="Farmer with clipboard" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Join Organic Farming Community </span>
        </h3>
        <p className="ba-description">
          Discover the reasons to choose organic farming for sustainable agriculture and healthier living. Experience eco-friendly practices, nutritious produce, and a greener future. Join us on a journey towards sustainable farming and a healthier planet.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Environmentally Friendly
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Chemical-Free Farming
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Supports Biodiversity
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Healthier Living
        </p>

        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Contact US
        </button>
      </div>
    </div>
  );
}

export default BookAppointment;
