import React, { useState } from 'react';
import "./portfolio.css";

function Portfolio() {
   
    const [activeFilter, setActiveFilter] = useState('ALL');

    const categories = ['ALL', 'UI/UX DESIGN', 'PRODUCT DESIGN', 'BRANDING', 'WEB DESIGN'];

    
    const projects = [
        {
            id: 1,
            category: 'UI/UX DESIGN',
            title: 'MOBILE DESIGN',
            subtitle: 'UI/UX Design',
            img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600'
        },
        {
            id: 2,
            category: 'PRODUCT DESIGN',
            title: 'DASHBOARD UI',
            subtitle: 'Product Design',
            img: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=600'
        },
        {
            id: 3,
            category: 'WEB DESIGN',
            title: 'MACBOOK MOCKUP',
            subtitle: 'Web Design',
            img: 'https://api.cabinet.smart-market.uz/uploads/images/8a8386023111a1b4192562e4'
        }
    ];

    const partners = ['Behance', 'slack', 'dribbble', 'twilio', 'GitHub', 'Chargebee', 'Udemy', 'Instagram', 'mapbox'];

    
    const filteredProjects = activeFilter === 'ALL'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <>
           
            <section className="portfolio-hero">
                <div className="bg-watermark">PORTFOLIO</div>
                <div className="hero-content">
                    <h1 className="hero-title">PORTFOLIO</h1>
                    <div className="breadcrumb">
                        <span className="bread-home">Home</span>
                        <span className="bread-separator">/</span>
                        <span className="bread-current">Portfolio</span>
                    </div>
                </div>
            </section>

           
            <section className="portfolio-section">
                <div className="portfolio-header">
                    <div className="portfolio-title-left">
                        <span className="sec-num">01</span>
                        <h2 className="sec-txt">PORTFOLIO</h2>
                    </div>

                    
                    <div className="filter-menu">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                                onClick={() => setActiveFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                   
                    <div className="portfolio-controls">
                        <button className="port-arrow">←</button>
                        <button className="port-arrow active">→</button>
                    </div>
                </div>

              
                <div className="portfolio-grid">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-img-wrapper">
                                <img src={project.img} alt={project.title} />
                                <div className="project-overlay">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-subtitle">{project.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                
                <div className="portfolio-dots">
                    <span className="dot active"></span>
                    <span className="dot"></span>
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
        </>
    );
}

export default Portfolio;