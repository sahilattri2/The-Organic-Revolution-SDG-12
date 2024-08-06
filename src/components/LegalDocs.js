import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Organic <span className="legal-siteSign">Farm</span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
          Welcome to Organic Farm, your trusted platform for promoting sustainable agriculture and organic farming. Our mission is to provide resources and information to individuals interested in eco-friendly farming practices and healthier living. By using our platform, you agree to support sustainable agriculture initiatives and adopt eco-friendly practices.
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
          Your privacy is important to us. Our Privacy Policy outlines how we collect, use, and protect your personal information. We are committed to transparent data handling practices and ensuring the security of your information.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
          When using Organic Farm, you agree to our Terms of Service. This includes guidelines for using our platform, participating in community activities, and contributing to sustainable agriculture initiatives. It's important to understand and abide by these terms to create a supportive and eco-conscious community.
        </p>

        <p className="legal-title">Consultations</p>
        <p className="legal-description">
          Our platform connects you with experts in sustainable agriculture and organic farming. While our consultations provide valuable insights and advice, they are not a substitute for professional agricultural services. It's essential to seek guidance from certified professionals for specific farming needs and challenges.
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
          Organic Farm simplifies access to resources and information for sustainable agriculture. You can explore articles, connect with experts, and participate in community discussions. Our platform aims to empower individuals to make informed decisions and take meaningful actions towards sustainable living.
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2013-2023 Organic Farm. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
