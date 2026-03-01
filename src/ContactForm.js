import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("my-website-backend-production-9786.up.railway.app", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    setSuccess(data.message);

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="contact-form-wrapper">
      <h2>Contact Us</h2>

      {success && <p className="success-msg">{success}</p>}

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;