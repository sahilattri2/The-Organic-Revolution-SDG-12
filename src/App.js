import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import Info from "./components/Info";
import OrganicProduce from "./components/OrganicProduce";
import SustainableFarming from "./components/SustainableFarming";
import SeedSaving from "./components/SeedSaving";
import Login from "./components/Login";
import BookAppointment from "./components/BookAppointment";
import FieldVisitForm from "./components/FieldVisitForm";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Router >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/organic-produce" element={<OrganicProduce />} />
          <Route path="/sustainable-farming" element={<SustainableFarming />} />
          <Route path="/seed-saving" element={<SeedSaving />} />
          <Route path="/Login" element={<Login/>}/>
          <Route path="/BookAppointment" element={<BookAppointment/>}/>
          <Route path="/FieldVisitForm" element={<FieldVisitForm/>}/>
          <Route path="/Register" element={<Register/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;