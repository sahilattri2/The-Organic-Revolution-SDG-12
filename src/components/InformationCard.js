import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "../Styles/InformationCard.css";

function InformationCard({ title, description, icon, link }) {
  return (
    <div className="information-card">
      <FontAwesomeIcon icon={icon} className="card-icon" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <Link to={link} className="card-button">Click to access</Link>
    </div>
  );
}

export default InformationCard;
