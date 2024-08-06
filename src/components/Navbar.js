import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      toast.info("Experiencing high traffic, Please wait a moment.", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };

  return (
    <nav className={`navbar-section ${nav ? "open-nav" : ""}`}>
      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
          <span></span>
        </li>
        <li>
          <a href="#services" className="navbar-links">
            Services
          </a>
          <span></span>
        </li>
        <li>
          <a href="#about" className="navbar-links">
            About
          </a>
          <span></span>
        </li>
        <li>
          <a href="/FieldVisitForm" className="navbar-links">
            Contact
          </a>
          <span></span>
        </li>
        <div className="auth-buttons">
          <Link to="/login" className="navbar-button login">Login</Link>
          <Link to="/Register" className="navbar-button register">Register</Link>
        </div>
      </ul>

      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={openNav} to="/FieldVisitForm">
              Contact
            </a>
          </li>
          <li>
            <Link onClick={openNav} to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/register">
              Register
            </Link>
          </li>
        </ul>
      </div>

      <div className="mobile-nav">
        <FontAwesomeIcon icon={faBars} onClick={openNav} className="hamb-icon" />
      </div>
    </nav>
  );
}

export default Navbar;
