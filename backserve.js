const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors middleware

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// Cors middleware to handle CORS headers
app.use(cors());

// Nodemailer transporter setup
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "xyz@gmail.com", // Replace with your Gmail email address
    pass: "abcd defg hijk hjkl", // Replace with your Gmail password or security key
  },
});

// Endpoint to send email
app.post("/sendEmail", async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: "xyx@gmail.com", // Sender address (should be same as auth.user)
      to, // Dynamic recipient email address fetched from the frontend
      subject,
      text,
    });

    console.log("Email sent:", info.messageId);
    res.status(200).send("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email.");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
