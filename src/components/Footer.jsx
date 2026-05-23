import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left fade-in-up">
          <div className="contact-header">
            <span className="contact-number">05</span>
            <h2 className="contact-title">CONTACT</h2>
          </div>

          <div className="contact-info">
            <div className="info-item">
              <span className="icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </span>
              <div>
                <p className="info-label">Phone</p>
                <p className="info-value">(219) 555-0114</p>
              </div>
            </div>

            <div className="info-item">
              <span className="icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </span>
              <div>
                <p className="info-label">Email</p>
                <p className="info-value">robertfox@example.com</p>
              </div>
            </div>

            <div className="info-item">
              <span className="icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </span>
              <div>
                <p className="info-label">Address</p>
                <p className="info-value">
                  4517 Washington Ave. Manchester, Kentucky 39495
                </p>
              </div>
            </div>
            <div className="social-icons1">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <span>in</span>
              </a>
              <a href="#" className="social-link" aria-label="Website">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

        </div>

        <div className="footer-right fade-in-up delay-1">
          <h3 className="form-title">
            I'm always open to discussing <span>product design work</span> or
            partnership
          </h3>

          <form className="contact-form">
            <div className="form-row">
              <div className="input-group">
                <label>Your name*</label>
                <input type="text" placeholder="Enter your name here" />
              </div>
              <div className="input-group">
                <label>Email Address*</label>
                <input type="email" placeholder="Enter your email address" />
              </div>
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea
                rows="4"
                placeholder="Write your message here"
              ></textarea>
            </div>

            <button type="button" className="submit-btn">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright <strong>Banana Studio</strong> 2022 All Right Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
