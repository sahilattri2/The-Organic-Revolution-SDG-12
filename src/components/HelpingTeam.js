// Farmers.js
import React from "react";
import FarmerCard from "./FarmerCard";
import profile1 from "../Assets/sahil.jpeg";
import profile2 from "../Assets/photo-1537721664796-76f77222a5d0.avif";
import profile3 from "../Assets/photo-1624720114708-0cbd6ee41f4e.avif";
import "../Styles/Farmers.css";

function Farmers() {
  return (
    <div className="farmer-section" id="farmers">
      <div className="fr-title-content">
        <h3 className="fr-title">
          <span>Meet Our </span> Farmers
        </h3>
        <p className="fr-description">
          Meet our exceptional team of specialist farmers, dedicated to providing top-notch services in organic farming. Trust in their knowledge and experience to lead you towards healthier and happier fields.
        </p>
      </div>

      <div className="fr-cards-content">
        <FarmerCard
          img={profile1}
          name="SAHIL ATTRI"
          title="WEB-DEVELOPER"
        />
        <FarmerCard
          img={profile2}
          name="Myur Patil"
          title="FARMER"
          stars="4.8"
          reviews="700"
        />
        <FarmerCard
          img={profile3}
          name="RAHUL"
          title="FARMER"
          stars="4.7"
          reviews="450"
        />
      </div>
    </div>
  );
}

export default Farmers;
