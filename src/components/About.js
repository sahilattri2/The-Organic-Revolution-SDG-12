import React from "react";
import Helpingteam from "../Assets/wheat.avif";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
      <img src={Helpingteam} alt="Doctor Group" className="about-image1" />
        
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Welcome to Organic Farming Plus, your trusted partner for sustainable agriculture. Our experts provide guidance on organic farming practices, promoting eco-friendly solutions for healthier ecosystems and nutritious food production. Join us on this journey towards a more sustainable future.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Choose Organic Practices"
          description="Explore organic farming techniques and choose sustainable practices for healthier soil, crops, and ecosystems."
        />

        <SolutionStep
          title="Plan Your Farming Schedule"
          description="Create a farming schedule that aligns with nature's cycles, optimizing yields while minimizing environmental impact."
        />

        <SolutionStep
          title="Implement Organic Solutions"
          description="Implement organic solutions for pest and weed control, soil fertility management, and crop rotation, ensuring sustainable farming practices."
        />
      </div>
    </div>
  );
}

export default About;
