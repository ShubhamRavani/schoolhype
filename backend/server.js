const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());
const port = 3333;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Replace with your own SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post("/contact", (req, res) => {
  const { name, email, phone, message } = req.body;

  const msg = {
    to: "assignment@spreadinindia.in", // Replace with your own email address
    from: email,
    subject: "Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
