import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Info from "../components/Info";
import About from "../components/About";
import BookAppointment from "../components/BookAppointment";
import Doctors from "../components/HelpingTeam";
import Footer from "../components/Footer";
import FieldVisitForm from "../components/FieldVisitForm";

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      <Info />
      <About />
      <BookAppointment />
      <Doctors />
      <Footer />
    </div>
  );
}

export default Home;
