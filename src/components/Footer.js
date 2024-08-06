// Footer.js
import React from "react";
import "../Styles/Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faCode } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
              Organic <span className="ft-sign">Farming</span>
            </p>
            <p className="ft-description">
              Explore the world of organic farming and sustainable agriculture. Learn about eco-friendly practices and join us in promoting a healthier planet.
            </p>
          </div>
        </div>
      </div>

      <div className="ft-copyright">
        <p>© Organic Farming. All rights reserved.</p>

        <ul className="ft-social-links">
          <li>
            <a
              href="https://www.linkedin.com/in/sahilattri1"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/sahilattri2"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://leetcode.com/Sahilattri01/"
              title="LeetCode"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faCode} className="social-icon" />
            </a>
          </li>
          <li>
            <a
              href="mailto:Sahilattri01@gmail.com"
              title="Email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
