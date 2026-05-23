import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page-wrapper">
      <section className="about-hero-section">
        <h1 className="about-bg-text">ABOUT ME</h1>
        <div className="about-hero-content">
          <h2 className="about-main-title">ABOUT</h2>
          <p className="about-breadcrumb">
            <span className="breadcrumb-home">Home</span> /{" "}
            <span className="breadcrumb-current">About</span>
          </p>
        </div>
      </section>

      <section className="about-details-section">
        <div className="about-details-container">
          <div className="about-image-column">
            <div className="red-bg-square">
              <img
                src="/img/9ecd27148883e577d25fa7b57efee200b85e4f5f.png"
                alt="Profile"
                className="profile-img"
              />
            </div>
          </div>

          <div className="about-text-column">
            <div className="section-header">
              <span className="section-number">01</span>
              <h2 className="section-title">ABOUT ME</h2>
            </div>

            <h3 className="about-subtitle">
              I'm Professional Designer And Front-End Web Developer That Solve
              Your Problems
            </h3>

            <p className="about-text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>

            <p className="about-text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">8</span>
                <span className="stat-text">
                  Year <br /> of experience
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">25</span>
                <span className="stat-text">
                  Satisfied <br /> Customers
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="skills-container">
          <div className="skills-left">
            <div className="section-header">
              <span className="section-number">02</span>
              <h2 className="section-title">MY SKILLS</h2>
            </div>
            <p className="about-text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <button className="download-btn">DOWNLOAD CV</button>
          </div>

          <div className="skills-right">
            <div className="skill-item-bar">
              <div className="skill-info">
                <span className="skill-name">UI/UX Design</span>
                <span className="skill-percentage">90%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="skill-item-bar">
              <div className="skill-info">
                <span className="skill-name">Front End Developer</span>
                <span className="skill-percentage">95%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: "95%" }}></div>
              </div>
            </div>
            <div className="skill-item-bar">
              <div className="skill-info">
                <span className="skill-name">Graphic Design</span>
                <span className="skill-percentage">90%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="skill-item-bar">
              <div className="skill-info">
                <span className="skill-name">Product Design</span>
                <span className="skill-percentage">85%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: "85%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="experience-section">
        <div className="experience-header">
          <span className="section-number">03</span>
          <h2 className="section-title">MY EXPERIENCES</h2>
        </div>

        <div className="experience-container">
          <div className="experience-item item-1">
            <h3 className="company-logo linkedin">
              Linked<span>in</span>
            </h3>
            <div className="experience-role-box">
              <span className="experience-num">01</span>
              <div className="role-details">
                <h4>Lead Web Developer</h4>
                <span className="experience-date">2016-2020</span>
              </div>
            </div>
            <p className="experience-text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Vuis enim velit ullamco
            </p>
          </div>

          <div className="experience-item item-2">
            <h3 className="company-logo yahoo">yahoo!</h3>
            <div className="experience-role-box">
              <span className="experience-num">02</span>
              <div className="role-details">
                <h4>Lead Web Developer</h4>
                <span className="experience-date">2016-2020</span>
              </div>
            </div>
            <p className="experience-text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Vuis enim velit ullamco
            </p>
          </div>

          <div className="experience-item item-3">
            <h3 className="company-logo zendesk">zendesk</h3>
            <div className="experience-role-box">
              <span className="experience-num">03</span>
              <div className="role-details">
                <h4>Lead Web Developer</h4>
                <span className="experience-date">2016-2020</span>
              </div>
            </div>
            <p className="experience-text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Vuis enim velit ullamco
            </p>
          </div>

          <div className="experience-item item-4">
            <h3 className="company-logo webflow">webflow</h3>
            <div className="experience-role-box">
              <span className="experience-num">04</span>
              <div className="role-details">
                <h4>Lead Web Developer</h4>
                <span className="experience-date">2016-2020</span>
              </div>
            </div>
            <p className="experience-text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Vuis enim velit ullamco
            </p>
          </div>
        </div>
      </section>

      <section className="partners-section">
        <div className="partners-container">
          <div className="experience-header">
            <span className="section-number">04</span>
            <h2 className="section-title">MY PARTNERS</h2>
          </div>

          <div className="partners-logos">
            <span className="partner-logo logo-behance">Bēhance</span>
            <span className="partner-logo logo-slack"># slack</span>
            <span className="partner-logo logo-dribbble">dribbble</span>
            <span className="partner-logo logo-twilio">twilio</span>
            <span className="partner-logo logo-github">GitHub</span>

            <span className="partner-logo logo-chargebee">Chargebee</span>
            <span className="partner-logo logo-udemy">Udemy</span>
            <span className="partner-logo logo-instagram">Instagram</span>
            <span className="partner-logo logo-mapbox">mapbox</span>
          </div>

          <div className="cta-banner1">
            <h2 className="cta-title">
              Let's Work Together On Your Next Project
            </h2>
            <button className="hire-btn">HIRE ME NOW</button>
            <a href="#" className="download-link">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="download-icon"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </section>
      <div className="about-footer-bottom">
        <p>
          Copyright <strong>Banana Studio</strong> 2022 All Right Reserved
        </p>
      </div>
    </div>
  );
}

export default About;
