// FarmerCard.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons"; // Changed icon to a leaf icon for organic farming

function FarmerCard(props) {
  return (
    <div className="fc-card">
      <img src={props.img} alt={props.name} className="fc-card-img" />
      <p className="fc-card-name">{props.name}</p>
      <p className="fc-card-title">{props.title}</p>
      <p className="fc-card-icon">
        <FontAwesomeIcon
          icon={faLeaf}
          style={{ color: "#4CAF50", paddingRight: "6px" }}
        />
        Organic Farming Expert
      </p>
    </div>
  );
}

export default FarmerCard;
