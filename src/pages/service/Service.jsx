import React, { useState } from 'react';
import "./service.css";
import { FiEdit, FiGrid, FiBarChart2, FiTrendingUp, FiChevronDown } from 'react-icons/fi';

function Service() {
  const services = [
    { id: 1, icon: <FiEdit />, title: 'UI/UX Design', desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco' },
    { id: 2, icon: <FiGrid />, title: 'Product Design', desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco' },
    { id: 3, icon: <FiBarChart2 />, title: 'Brand Identity', desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco' },
    { id: 4, icon: <FiTrendingUp />, title: 'Website Design', desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco' }
  ];

  const partners = ['Behance', 'slack', 'dribbble', 'twilio', 'GitHub', 'Chargebee', 'Udemy', 'Instagram', 'mapbox'];

  const [activeFaq, setActiveFaq] = useState(0);

  const faqs = [
    { q: "Where Can I Find More Information?", a: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Hext office-consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
    { q: "What Kinds of Payment Do You Accept?", a: "We accept all major credit cards, PayPal, and bank transfers for our ongoing web projects." },
    { q: "What Are Your Terms and Conditions?", a: "Our projects follow a milestone-based agreements contract with clearly defined scopes of service delivery." }
  ];

  return (
    <>
      <section className="service-hero">
        <div className="bg-watermark">MY SERVICE</div>
        <div className="hero-content">
          <h1 className="hero-title">SERVICE</h1>
          <div className="breadcrumb">
            <span className="bread-home">Home</span>
            <span className="bread-separator">/</span>
            <span className="bread-current">Service</span>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="services-header">
          <span className="header-number">01</span>
          <h2 className="header-text">MY SERVICE</h2>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="card-icon">{service.icon}</div>
              <h3 className="card-title">{service.title}</h3>
              <p className="card-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="partners-section">
        <div className="section-title-center">
          <span className="sec-num">02</span>
          <h2 className="sec-txt">MY PARTNERS</h2>
        </div>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-logo">{partner}</div>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-content">
          <h2>Let's Work Together On Your Next Project</h2>
          <button className="cta-btn">HIRE ME NOW!</button>
          <a href="#" className="download-cv">📋 Download CV</a>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="testimonial-container">
          <div className="testimonial-image">
            <img src="/imgs/s.jpg" alt="Testimonial User" />
          </div>
          <div className="testimonial-content">
            <div className="testimonial-header">
              <div>
                <span className="sec-num">03</span>
                <h2 className="sec-txt">TESTIMONIAL</h2>
              </div>
              <span className="testimonial-count">01/03</span>
            </div>
            <div className="quote-icon">“</div>
            <p className="testimonial-desc">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <h4 className="client-name">Esther Howard</h4>
            <p className="client-role">CEO of Apple</p>
            <div className="slider-controls">
              <button className="control-btn">←</button>
              <button className="control-btn active">→</button>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="section-title-center">
          <span className="sec-num">04</span>
          <h2 className="sec-txt">HAVE ANY QUESTIONS?</h2>
        </div>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${activeFaq === index ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}>
                <h3>{faq.q}</h3>
                <FiChevronDown className="faq-arrow" />
              </div>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Service;