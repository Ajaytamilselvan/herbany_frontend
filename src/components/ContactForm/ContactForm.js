import React, { useState } from "react";
import axios from "axios";
import "./ContactForm.css"; // Import the CSS
import contactAnimation from '../assets/contactAnimation.json';
import Lottie from "lottie-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/contact", formData);
      if (response.status === 200) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setStatus("Error sending message. Try again.");
    }
  };

  return (
    <div className="contact-form-container">
        <Lottie animationData={contactAnimation} className="lottie-animation" />
         <h2>Contact Us</h2>
         {status && <p className="status-message">{status}</p>}
         <form className="contact-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required />

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
