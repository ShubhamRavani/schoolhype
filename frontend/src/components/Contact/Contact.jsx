import React, { useState } from "react";
import styles from "../../styles/Contact.module.css";
import { BsTelephone, BsGlobe2 } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3333/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, message }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Message sent!");
        } else {
          console.log("Message failed to send.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={styles.container}>
      <div data-aos="fade-right" className={styles.contactLinks}>
        <div className={styles.medium}>
          <BsTelephone color="#2F80ED" /> Call us
          <div
            style={{
              marginTop: "15px",
              fontWeight: "300",
              fontSize: "20px",
              lineHeight: "24px",
              textAlign: "center",
            }}
          >
            +91 93545 66860
          </div>
        </div>
        <div className={styles.medium}>
          <CiLocationOn color="#2F80ED" /> Location
          <div
            style={{
              marginTop: "15px",
              fontWeight: "300",
              fontSize: "20px",
              lineHeight: "24px",
              textAlign: "center",
            }}
          >
            Ghaziabad, Uttar Pradesh
          </div>
        </div>
        <div className={styles.medium}>
          <BsGlobe2 color="#2F80ED" /> Mail Us
          <div
            style={{
              marginTop: "15px",
              fontWeight: "300",
              fontSize: "20px",
              lineHeight: "24px",
              textAlign: "center",
            }}
          >
            info@markall.in
          </div>
        </div>
      </div>

      <div data-aos="fade-left" className={styles.contactForm}>
        <form onSubmit={handleSubmit}>
          <div className={styles.contactHeader}>
            <span
              style={{
                marginTop: "15px",
                fontWeight: "600",
                fontSize: "48px",
                lineHeight: "68px",
                color: "#000000",
              }}
            >
              Contact Now
            </span>
            <br />
            In diam consequat nec eu. Eu sem nec vel, sollicitudin ipsum viverra
            sed nibh amet. Nunc, et pharetra, duis tortor dictum nisl. Id
            vestibulum tincidunt adipiscing gravida risus.
          </div>

          <div className={styles.fieldsContainer}>
            <div className={styles.inputGroup}>
              <input
                className={styles.dataFields}
                type="text"
                id="name"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                className={styles.dataFields}
                type="email"
                id="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                className={styles.dataFields}
                type="phone"
                id="phone"
                value={phone}
                placeholder="Phone*"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                className={styles.dataFields}
                id="message"
                value={message}
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button className={styles.submitBtn} type="submit">
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
