import React, { useState } from "react";
import { personalInfo, skills, projects, journey } from "./data.js";

function SectionTitle({ subtitle, title, description }) {
  return (
    <div className="section-heading">
      <p className="section-subtitle">{subtitle}</p>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function Sections() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "React", "JavaScript"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <>
      {/* ABOUT SECTION */}
      <section className="section-container section" id="about">
        <SectionTitle
          subtitle="GET TO KNOW ME"
          title="About Me"
          description="A little introduction about who I am."
        />

        <div className="about-grid">
          <div className="about-card">
            <div className="about-icon">👨‍💻</div>
            <h3>Who Am I?</h3>
            <p>{personalInfo.description}</p>
          </div>

          <div className="about-details">
            <div className="detail-item">
              <span>Full Name</span>
              <strong>{personalInfo.name}</strong>
            </div>

            <div className="detail-item">
              <span>Profession</span>
              <strong>{personalInfo.title}</strong>
            </div>

            <div className="detail-item">
              <span>Education</span>
              <strong>{personalInfo.education}</strong>
            </div>

            <div className="detail-item">
              <span>Location</span>
              <strong>{personalInfo.location}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="section-container section" id="education">
        <SectionTitle
          subtitle="MY EDUCATION"
          title="Academic Background"
          description="Building a strong foundation in computer science."
        />

        <div className="education-card">
          <div className="education-icon">🎓</div>
          <div>
            <span className="tag">Computer Science</span>
            <h3>University Student</h3>
            <p>
              Studying Computer Science at Salam University.
              Learning programming, computer systems and
              software development.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="section-container section" id="skills">
        <SectionTitle
          subtitle="WHAT I WORK WITH"
          title="My Technical Skills"
          description="Technologies and tools I am learning and using."
        />

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              className="skill-card"
              key={skill.name}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <span className="skill-icon">{skill.icon}</span>
              <h3>{skill.name}</h3>
              <p>{skill.level}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JOURNEY SECTION */}
      <section className="section-container section" id="journey">
        <SectionTitle
          subtitle="CONTINUOUS IMPROVEMENT"
          title="My Learning Journey"
          description="My journey of learning, practicing and building."
        />

        <div className="timeline">
          {journey.map((item, index) => (
            <div className="timeline-item" key={item.title}>
              <div className="timeline-dot"></div>

              <div className="timeline-card">
                <span className="timeline-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="section-container section" id="projects">
        <SectionTitle
          subtitle="MY RECENT WORK"
          title="Featured Projects"
          description="Some projects I have created or am currently developing."
        />

        <div className="project-filters">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={filter === category ? "filter-btn selected" : "filter-btn"}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-preview">
                <span className="project-number">
                  0{project.id}
                </span>
                <span className="project-symbol">{"</>"}</span>
                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <div className="project-info">
                <span className="tag">{project.status}</span>

                <h3>{project.name}</h3>

                <p>{project.description}</p>

                <div className="tech-list">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View on GitHub ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="section-container section" id="experience">
        <SectionTitle
          subtitle="MY DEVELOPMENT EXPERIENCE"
          title="Learning Through Practice"
          description="I focus on building projects and improving my technical knowledge."
        />

        <div className="experience-grid">
          <div className="experience-card">
            <span>01</span>
            <h3>Frontend Development</h3>
            <p>
              Practicing responsive layouts, interactive interfaces
              and React components.
            </p>
          </div>

          <div className="experience-card">
            <span>02</span>
            <h3>Programming</h3>
            <p>
              Improving programming logic and learning Python
              through practical exercises.
            </p>
          </div>

          <div className="experience-card">
            <span>03</span>
            <h3>Database Learning</h3>
            <p>
              Developing knowledge of SQL, MySQL and
              database management.
            </p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="section-container cta-section">
        <p>HAVE A PROJECT IN MIND?</p>
        <h2>Let's Build Something Great Together.</h2>
        <a href="#contact" className="btn btn-primary">
          Get In Touch ↗
        </a>
      </section>
    </>
  );
}

export default Sections;