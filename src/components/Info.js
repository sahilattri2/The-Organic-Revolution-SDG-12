import React from "react";
import InformationCard from "./InformationCard";
import { faLeaf, faTree, faSeedling } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          We promote sustainable agriculture and organic farming, offering a comprehensive
          range of services tailored to support eco-friendly practices and healthier living. Our
          platform allows you to connect with local farmers, learn about organic farming techniques,
          and access fresh, organic produce for a healthier lifestyle.
        </p>
      </div>
      <div className="info-cards-content">
        <InformationCard
          title="BLOGS SECTION"
          description="Explore our collection of informative blogs covering various aspects of organic farming, sustainable living, and healthy eating. Gain insights, tips, and inspiration from our expert writers and passionate community members."
          icon={faLeaf}
          link="/organic-produce"
        />
        <InformationCard
          title="Farmer's Data"
          description="Access comprehensive data about local farmers, their farming practices, and the produce they offer. Learn about their commitment to sustainable agriculture, organic certifications, and the unique stories behind their farms."
          icon={faTree}
          link="/sustainable-farming"
        />
        <InformationCard
          title="UPLOAD BLOGS"
          description="Share your knowledge and experiences with our community by uploading your own blogs related to organic farming, gardening, sustainability, or any other relevant topic. Contribute to the wealth of information and engage with like-minded individuals."
          icon={faSeedling}
          link="/seed-saving"
        />
      </div>
    </div>
  );
}

export default Info;