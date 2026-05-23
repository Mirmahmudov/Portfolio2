import React from "react";
import "./Home.css";
import { MdOutlineFileDownload } from "react-icons/md";
import {
  FiEdit,
  FiGrid,
  FiBarChart2,
  FiMonitor,
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";

function Home() {
  return (
    <>
      <div className="hero-container" id="home">
        <h1 className="bg-text">Robert Fox</h1>


        <main className="main-content">
          <div className="text-content">
            <h3 className="hello-text">
              <span className="orange-text">Hello,</span> I'm
            </h3>
            <h1 className="name-text">Robert Fox</h1>
            <p className="role-text">Professional Product Designer</p>
            <button className="btn-primary">Let's Talk</button>
          </div>

          <div className="image-content">
            <img src="/img/Image.svg" alt="Robert Fox" className="hero-image" />
          </div>
        </main>
      </div>

      <section className="about-section" id="about">
        <div className="about-container">
          <div className="about-col col-1">
            <div className="img-box img-1">
              <img src="/img/Image(1).svg" alt="Person with crossed arms" />
            </div>
            <div className="stat-box stat-customers">
              <div className="stat-text">
                Satisfied
                <br />
                Customers
              </div>
              <div className="stat-num">25</div>
            </div>
          </div>

          <div className="about-col col-2">
            <div className="stat-box stat-years">
              <div className="stat-num">8</div>
              <div className="stat-text">
                Year
                <br />
                of experience
              </div>
            </div>
            <div className="img-box img-2">
              <img src="/img/Image(2).svg" alt="Typing on laptop" />
            </div>
          </div>

          <div className="about-col col-3">
            <div className="about-heading-box">
              <span className="heading-num">01</span>
              <h2 className="heading-text">ABOUT ME</h2>
            </div>
            <div className="about-desc">
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="partners-logos">
          <img src="/img/behance.svg" alt="Behance" />
          <img src="/img/slack.svg" alt="Slack" />
          <img src="/img/dribbble.svg" alt="Dribbble" />
          <img src="/img/twilio.svg" alt="Twilio" />
          <img src="/img/github.svg" alt="GitHub" />
        </div>

        <div className="cta-banner">
          <h2>Let's Work Together On Your Next Project</h2>
          <button className="btn-hire">HIRE ME NOW</button>
          <a href="#" className="download-cv">
            <span className="download-icon">
              <MdOutlineFileDownload />
            </span>{" "}
            Download CV
          </a>
        </div>
      </section>

      <section className="services-section" id="service">
        <div className="services-heading-container">
          <span className="heading-num">02</span>
          <h2 className="heading-text text-black">MY SERVICE</h2>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <FiEdit />
            </div>
            <h3 className="service-title">UI/UX Design</h3>
            <p className="service-desc">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Vuis enim velit ullamco
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <FiGrid />
            </div>
            <h3 className="service-title">Product Design</h3>
            <p className="service-desc">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Vuis enim velit ullamco
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <FiBarChart2 />
            </div>
            <h3 className="service-title">Brand Identity</h3>
            <p className="service-desc">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Vuis enim velit ullamco
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <FiMonitor />
            </div>
            <h3 className="service-title">Website Design</h3>
            <p className="service-desc">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Vuis enim velit ullamco
            </p>
          </div>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="portfolio-header">
          <div className="portfolio-heading-container">
            <span className="heading-num">03</span>
            <h2 className="heading-text text-black">PORTFOLIO</h2>
          </div>

          <div className="portfolio-filters">
            <button className="filter-btn active">ALL</button>
            <button className="filter-btn">UI/UX DESIGN</button>
            <button className="filter-btn">PRODUCT DESIGN</button>
            <button className="filter-btn">BRANDING</button>
            <button className="filter-btn">WEB DESIGN</button>
          </div>

          <div className="portfolio-arrows">
            <button className="arrow-btn">
              <FiArrowLeft />
            </button>
            <button className="arrow-btn">
              <FiArrowRight />
            </button>
          </div>
        </div>

        <div className="portfolio-slider">
          <div className="portfolio-slide">
            <img src="/img/Rectangle 9.svg" alt="Mobile Design" />
            <div className="portfolio-overlay">
              <h3>MOBILE DESIGN</h3>
              <p>UI/UX Design</p>
            </div>
          </div>
          <div className="portfolio-slide">
            <img src="/img/Image(4).svg" alt="Project 2" />
            <div className="portfolio-overlay">
              <h3>PROJECT TITLE</h3>
              <p>Product Design</p>
            </div>
          </div>
          <div className="portfolio-slide">
            <img src="/img/Image(5).svg" alt="Project 3" />
            <div className="portfolio-overlay">
              <h3>PROJECT TITLE</h3>
              <p>Web Design</p>
            </div>
          </div>
        </div>

        <div className="portfolio-pagination">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="testimonial-container">
          <div className="testimonial-left">
            <img src="/img/Image(6).svg" alt="Testimonial Author" />
          </div>

          <div className="testimonial-right">
            <div className="testimonial-header">
              <div className="heading-box">
                <span className="heading-num">04</span>
                <h2 className="heading-text text-black">TESTIMONIAL</h2>
              </div>
              <div className="testimonial-counter">
                <span className="current">01</span>/03
              </div>
            </div>

            <div className="quote-mark">❝</div>

            <p className="testimonial-desc">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>

            <div className="testimonial-author">
              <h4 className="author-name">Esther Howard</h4>
              <p className="author-role">CEO of Adebe</p>
            </div>

            <div className="testimonial-controls">
              <div className="testimonial-lines">
                <span className="t-line active"></span>
                <span className="t-line"></span>
                <span className="t-line"></span>
              </div>

              <div className="testimonial-arrows">
                <button className="arrow-btn">
                  <FiArrowLeft />
                </button>
                <button className="arrow-btn">
                  <FiArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
