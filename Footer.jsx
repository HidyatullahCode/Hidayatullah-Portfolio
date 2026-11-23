import React from "react";
import { personalInfo } from "./data.js";

function Footer() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const subject = encodeURIComponent(
      `Portfolio Contact from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    if (!personalInfo.email) {
      alert("Please add your email address in data.js first.");
      return;
    }

    window.location.href =
      `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <section className="section-container section contact-section" id="contact">
        <div className="section-heading">
          <p className="section-subtitle">GET IN TOUCH</p>
          <h2>Let's Connect</h2>
          <p>
            Have a question or an opportunity? Feel free to contact me.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's talk about your ideas.</h3>

            <p>
              I am always interested in learning, connecting
              and exploring new opportunities.
            </p>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <span>💻</span>
              <div>
                <small>GitHub</small>
                <strong>HidyatullahCode ↗</strong>
              </div>
            </a>

            <div className="contact-item">
              <span>📍</span>
              <div>
                <small>Location</small>
                <strong>{personalInfo.location}</strong>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
            />

            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />

            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message..."
              required
            ></textarea>

            <button type="submit" className="btn btn-primary">
              Send Message ↗
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <a href="#home" className="logo">
            H<span>.</span>
          </a>

          <p>
            © {new Date().getFullYear()} Hidayatullah.
            Built with React and passion.
          </p>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;