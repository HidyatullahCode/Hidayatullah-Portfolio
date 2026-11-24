import React from "react";
import { personalInfo } from "./data.js";

function Hero() {
  return (
    <section className="hero section-container" id="home">
      <div className="hero-content">
        <div className="availability">
          <span className="status-dot"></span>
          {personalInfo.availability}
        </div>

        <p className="hero-greeting">HELLO, WORLD! I'M</p>

        <h1>
          {personalInfo.name}
          <span className="gradient-text">.</span>
        </h1>

        <h2>
          A Full-Stack <span className="gradient-text">
            Web Developer Who Loves Creating Websites
            {/* {personalInfo.title} */}
          </span>
        </h2>

        <p className="hero-description">
          I build modern, responsive and user-friendly websites.
          I enjoy learning new technologies and turning ideas
          into real digital experiences.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            Explore My Work ↗
          </a>

          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>

        <div className="hero-socials">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          <span>•</span>
          <span>{personalInfo.location}</span>
        </div>
      </div>

   <div className="hero-visual">
  <div className="photo-container">
    <img
      src="/profile-photo.jpg"
      alt="Hidayatullah Zadran"
      className="hero-photo"
    />
  </div>
</div>

        <div className="floating-card card-one">
          <span>⚛️</span> React Developer
        </div>

        <div className="floating-card card-two">
          <span>💻</span> Creative Coder
        </div>

        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>
      </div>

      <a href="#about" className="scroll-down">
        ↓ Scroll to explore
      </a>
    </section>
  );
}

export default Hero;
