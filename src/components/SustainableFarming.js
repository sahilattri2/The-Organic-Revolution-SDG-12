import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/table.css";

const backendUrl = "http://localhost:8080/visit"; 
const emailServerUrl = "http://localhost:5000/sendEmail"; 
const correctPasskey = "your"; 

function SustainableFarming() {
  const [visits, setVisits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [acceptedVisitIds, setAcceptedVisitIds] = useState([]);
  const [acceptingVisitId, setAcceptingVisitId] = useState(null);
  const [acceptMessage, setAcceptMessage] = useState("");
  const [acceptName, setAcceptName] = useState("");
  const [acceptEmail, setAcceptEmail] = useState("");
  const [acceptDate, setAcceptDate] = useState("");
  const [acceptTime, setAcceptTime] = useState("");
  const [passkey, setPasskey] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchVisits = async () => {
      try {
        const response = await axios.get(backendUrl);
        setVisits(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching visits:", error);
        setError("Error fetching data. Please try again later.");
        setLoading(false);
      }
    };

    fetchVisits();
  }, []);

  useEffect(() => {
    
    const storedAcceptedVisitIds = localStorage.getItem("acceptedVisitIds");
    if (storedAcceptedVisitIds) {
      setAcceptedVisitIds(JSON.parse(storedAcceptedVisitIds));
    }
  }, []);

  const handleAccept = (id) => {
    setAcceptingVisitId(id);
  };

  const handleSubmit = async () => {
    
    setAcceptedVisitIds([...acceptedVisitIds, acceptingVisitId]);
    localStorage.setItem(
      "acceptedVisitIds",
      JSON.stringify([...acceptedVisitIds, acceptingVisitId])
    );

    try {
    
      await axios.post(emailServerUrl, {
        to: acceptEmail,
        subject: "Visit Accepted",
        text: `Dear ${acceptName}, Your visit request has been accepted for ${acceptDate} at ${acceptTime}. Message: ${acceptMessage}`,
      });

      console.log("Email sent successfully.");
    } catch (error) {
      console.error("Error sending email:", error);
    }

    setAcceptingVisitId(null); 
    setAcceptMessage(""); 
    setAcceptName("");
    setAcceptEmail("");
    setAcceptDate("");
    setAcceptTime("");
  };

  const isAccepted = (id) => {
    return acceptedVisitIds.includes(id);
  };

  const handlePasskeySubmit = (e) => {
    e.preventDefault();
    if (passkey === correctPasskey) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect passkey. Please try again.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div>
        <h2>Enter Passkey to access User data</h2>
        <form onSubmit={handlePasskeySubmit}>
          <input
            type="password"
            value={passkey}
            onChange={(e) => setPasskey(e.target.value)}
            placeholder="Enter passkey"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Visits Data</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Farmer Name</th>
            <th>Contact Number</th>
            <th>Gender</th>
            <th>Appointment Time</th>
            <th>Mode</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {visits.map((visit) => (
            <tr key={visit.id}>
              <td>{visit.id}</td>
              <td>{visit.farmerName}</td>
              <td>{visit.contactNumber}</td>
              <td>{visit.farmerGender}</td>
              <td>{visit.preferredAppointmentTime}</td>
              <td>{visit.preferredMode}</td>
              <td>{visit.email}</td>
              <td>
                {isAccepted(visit.id) ? (
                  <span>Accepted</span>
                ) : acceptingVisitId === visit.id ? (
                  <div>
                    <input
                      type="text"
                      placeholder="Message"
                      value={acceptMessage}
                      onChange={(e) => setAcceptMessage(e.target.value)}
                    />
                    <br />
                    <input
                      type="text"
                      placeholder="Name"
                      value={acceptName}
                      onChange={(e) => setAcceptName(e.target.value)}
                    />
                    <br />
                    <input
                      type="email"
                      placeholder="Email"
                      value={acceptEmail}
                      onChange={(e) => setAcceptEmail(e.target.value)}
                    />
                    <br />
                    <input
                      type="date"
                      placeholder="Date"
                      value={acceptDate}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => setAcceptDate(e.target.value)}
                    />
                    <br />
                    <input
                      type="time"
                      placeholder="Time"
                      value={acceptTime}
                      onChange={(e) => setAcceptTime(e.target.value)}
                    />
                    <br />
                    <button onClick={handleSubmit}>Submit</button>
                  </div>
                ) : (
                  <button onClick={() => handleAccept(visit.id)}>Accept</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SustainableFarming;
