import React, { useState, useEffect } from "react";
import "./App.css";
import ContactForm from "./ContactForm";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  // Detect active section on scroll (professional touch)
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "features", "pricing", "about", "contact"];

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveTab(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="app">

      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <div className="section-container nav-container">

          <div className="nav-logo">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">TechNova</span>
          </div>

          <ul className="nav-links">
            {["home", "features", "pricing", "about", "contact"].map((tab) => (
              <li key={tab}>
                <a
                  href={`#${tab}`}
                  className={activeTab === tab ? "active" : ""}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button className="btn btn-ghost">Sign In</button>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section id="home" className="hero">
        <div className="section-container hero-container">
          <div className="hero-content">

            <span className="hero-badge">
              🚀 New: AI-Powered Analytics
            </span>

            <h1 className="hero-title">
              Build the Future of{" "}
              <span className="gradient-text">Your Business</span>
            </h1>

            <p className="hero-description">
              Transform your workflow with intelligent automation and real-time insights.
            </p>

            <div className="hero-buttons">
              <button className="btn btn-primary btn-lg">
                Start Free Trial →
              </button>

              <button className="btn btn-outline btn-lg">
                Watch Demo
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section id="features" className="features section-padding">
        <div className="section-container">

          <div className="section-header">
            <span className="section-tag">Features</span>
            <h2 className="section-title">Everything You Need</h2>
            <p className="section-description">
              Powerful features to help you grow your business faster.
            </p>
          </div>

          <div className="features-grid">
            {[
              ["📊", "Real-time Analytics"],
              ["🤖", "AI Automation"],
              ["🔒", "Enterprise Security"],
              ["🌐", "Global Scale"],
              ["⚡", "Lightning Fast"],
              ["📱", "Mobile First"]
            ].map(([icon, title], i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">{icon}</div>
                <h3>{title}</h3>
                <p>High quality platform feature description goes here.</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section id="pricing" className="pricing section-padding">
        <div className="section-container">

          <div className="section-header">
            <span className="section-tag">Pricing</span>
            <h2 className="section-title">Simple, Transparent Pricing</h2>
            <p className="section-description">
              Choose the plan that fits your business needs.
            </p>
          </div>

          <div className="pricing-grid">
            {[
              {
                name: "Starter",
                price: "$19",
                features: ["Basic Analytics", "Email Support", "5 Projects"]
              },
              {
                name: "Professional",
                price: "$49",
                features: ["Advanced Analytics", "Priority Support", "Unlimited Projects"],
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: ["AI Automation", "Dedicated Support", "Custom Integrations"]
              }
            ].map((plan, i) => (
              <div
                key={i}
                className={`pricing-card ${plan.popular ? "popular" : ""}`}
              >
                {plan.popular && (
                  <span className="popular-badge">Most Popular</span>
                )}
                <h3>{plan.name}</h3>
                <div className="price">
                  {plan.price}
                  {plan.price !== "Custom" && <span>/mo</span>}
                </div>

                <ul>
                  {plan.features.map((feature, j) => (
                    <li key={j}>✓ {feature}</li>
                  ))}
                </ul>

                <button className="btn btn-primary btn-lg">
                  Get Started
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="about section-padding">
        <div className="section-container about-container">

          <div className="about-content">
            <span className="section-tag">About Us</span>
            <h2 className="section-title">
              We Build Technology That Empowers Businesses
            </h2>

            <p className="section-description">
              TechNova delivers innovative AI-driven solutions that help businesses
              automate processes, gain insights, and scale globally.
            </p>

            <p className="section-description">
              Our mission is to simplify complex technology and make powerful tools
              accessible to companies of all sizes.
            </p>

            <button className="btn btn-primary btn-lg">
              Learn More
            </button>
          </div>

          <div className="about-visual">
            <div className="about-card">
              <h4>Our Impact</h4>
              <p>10,000+ businesses trust TechNova worldwide.</p>
            </div>

            <div className="about-card">
              <h4>Innovation First</h4>
              <p>AI-powered solutions built for the future.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="section-padding">
        <div className="section-container">
          <ContactForm />
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer section-padding">
        <div className="section-container">

          <div className="footer-grid">

            <div className="footer-brand">
              <div className="nav-logo">
                <span className="logo-icon">⚡</span>
                <span className="logo-text">TechNova</span>
              </div>
              <p>
                Building the future of business technology, one innovation at a time.
              </p>
            </div>

            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Integrations", "Changelog"]
              },
              {
                title: "Company",
                links: ["About", "Blog", "Careers", "Press"]
              },
              {
                title: "Support",
                links: ["Help Center", "Documentation", "API Reference", "Status"]
              }
            ].map((section, i) => (
              <div key={i} className="footer-links">
                <h4>{section.title}</h4>
                <ul>
                  {section.links.map((link, j) => (
                    <li key={j}><a href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}>{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}

          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} TechNova. All rights reserved.</p>
            <div className="footer-social">
             <a href="https://twitter.com">Twitter</a>
             <a href="https://linkedin.com">LinkedIn</a>
             <a href="https://github.com">GitHub</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}

export default App;