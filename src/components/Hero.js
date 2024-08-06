import React, { useEffect, useState } from "react";
import Farmer from "../Assets/cherry.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">🌱 Organic Farming</p>
          <h2 className="text-title">
            Connect with Farmers and Support Sustainable Agriculture
          </h2>
          <p className="text-descritpion">
            Explore the world of organic farming and sustainable agriculture.
            Connect with farmers, learn about eco-friendly practices, and support
            local, organic produce for a healthier planet.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Book a Visit 
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>3+</p>
              <p>Local Farms</p>
            </div>

            <div className="text-stats-container">
              <p>3+</p>
              <p>Organic Farmers</p>
            </div>

            <div className="text-stats-container">
              <p>3+</p>
              <p>Years of Sustainable Practices</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Farmer} alt="Farmer" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
