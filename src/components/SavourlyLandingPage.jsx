import React, { useState, useEffect } from 'react';
import './SavourlyLandingPage.css';

function SavourlyLandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="logo-container">
            <img src="/logo.png" alt="Savourly Logo" className="logo" />
            <span className="logo-text">Savourly</span>
          </div>
          <div className="nav-links">
            <a href="#features" className="nav-link">Features</a>
            <a href="#how-it-works" className="nav-link">How It Works</a>
            <a href="#download" className="nav-link">Download</a>
          </div>
          <a href="#download" className="download-button">
            <span className="download-icon">↓</span>
            Download
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              From TikTok to <span className="highlight">Your Kitchen</span>
            </h1>
            <p className="hero-description">
              Savourly instantly transforms TikTok recipe videos into detailed ingredient lists and step-by-step instructions, making cooking easier than ever.
            </p>
            <div className="hero-buttons">
              <a href="#download" className="primary-button">
                Download Now
                <span className="arrow-icon">→</span>
              </a>
              <a href="#how-it-works" className="secondary-button">
                Learn More
              </a>
            </div>
          </div>
          <div className="hero-image-container">
            <div className="app-screenshot-wrapper">
              <img
                src="/app-screenshot.png"
                alt="Savourly App Screenshot"
                className="app-screenshot"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="section-container">
          <h2 className="section-title">
            Make Cooking <span className="highlight">Simple</span>
          </h2>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="feature-title">AI-Powered Analysis</h3>
              <p className="feature-description">
                Our advanced AI instantly recognizes ingredients and cooking steps from any TikTok recipe video.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="feature-title">Organized Recipe Cards</h3>
              <p className="feature-description">
                Get clear, structured recipes with ingredient lists and step-by-step instructions for easy cooking.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="feature-title">Save Your Favorites</h3>
              <p className="feature-description">
                Create a personal cookbook by saving your favorite recipes for quick access anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-section">
        <div className="section-container">
          <h2 className="section-title">
            How <span className="highlight">It Works</span>
          </h2>

          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h3 className="step-title">Find a Recipe Video</h3>
              <p className="step-description">
                Discover a delicious recipe on TikTok that you want to try.
              </p>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <h3 className="step-title">Share with Savourly</h3>
              <p className="step-description">
                Copy the video link and paste it into the Savourly app.
              </p>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <h3 className="step-title">Get Your Recipe</h3>
              <p className="step-description">
                Instantly receive a complete recipe with ingredients and instructions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots Section */}
      <section className="screenshots-section">
        <div className="section-container">
          <h2 className="section-title">
            App <span className="highlight">Screenshots</span>
          </h2>

          <div className="screenshots-container">
            <div className="screenshot-wrapper">
              <img
                src="/screenshot1.png"
                alt="Savourly App Screenshot 1"
                className="screenshot"
              />
            </div>
            <div className="screenshot-wrapper">
              <img
                src="/screenshot2.png"
                alt="Savourly App Screenshot 2"
                className="screenshot"
              />
            </div>
            <div className="screenshot-wrapper">
              <img
                src="/screenshot3.png"
                alt="Savourly App Screenshot 3"
                className="screenshot"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="download-section">
        <div className="section-container">
          <h2 className="download-title">
            Download Savourly Today
          </h2>
          <p className="download-description">
            Transform the way you cook with TikTok recipes. Available now on iOS and Android.
          </p>

          <div className="store-buttons">
            <a href="#" className="store-button apple">
              <svg className="store-icon apple-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5645 12.6775C17.5484 10.2515 19.6174 9.1075 19.6965 9.0615C18.5116 7.3075 16.6855 7.0755 16.0247 7.0595C14.4746 6.8995 12.9775 8.0195 12.1905 8.0195C11.3876 8.0195 10.1836 7.0755 8.8784 7.0975C7.1976 7.1195 5.6465 8.0795 4.7773 9.6315C2.9746 12.7855 4.3174 17.4475 6.0465 19.8315C6.9147 20.9995 7.9131 22.3155 9.2184 22.2675C10.4883 22.2155 10.9697 21.4575 12.4825 21.4575C13.9785 21.4575 14.4375 22.2675 15.7587 22.2355C17.1172 22.2155 17.9824 21.0475 18.8174 19.8635C19.8164 18.5155 20.2173 17.1835 20.2334 17.1195C20.1982 17.1035 17.5815 16.0395 17.5645 12.6775Z" />
                <path d="M15.4346 5.8555C16.1553 4.9855 16.6377 3.7855 16.4844 2.5695C15.4834 2.6055 14.2295 3.2695 13.4766 4.1235C12.8037 4.8815 12.2236 6.1135 12.3945 7.2975C13.5305 7.3655 14.6816 6.7095 15.4346 5.8555Z" />
              </svg>
              <div className="store-text">
                <div className="store-label">Download on the</div>
                <div className="store-name">App Store</div>
              </div>
            </a>

            <a href="#" className="store-button google">
              <svg className="store-icon google-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.60156 21.5C3.39844 21.5 3.19531 21.4219 3.04688 21.2734C2.85938 21.0859 2.75 20.8203 2.75 20.5547V3.44531C2.75 3.17969 2.85938 2.91406 3.04688 2.72656L12.3906 12L3.04688 21.2734C2.89844 21.4219 2.75 21.5 2.55469 21.5H3.60156Z" />
                <path d="M12.3906 12L3.04688 2.72656C3.19531 2.57812 3.39844 2.5 3.60156 2.5H3A0.6875 0.6875 0 013.04688 2.72656L12.3906 12L3.04688 21.2734C2.92188 21.3984 2.77344 21.4766 2.60156 21.5H3.60156C3.80469 21.5 4.00781 21.4219 4.15625 21.2734L12.3906 12Z" />
                <path d="M19.7812 12.7812L16.6016 14.6875L13.4531 12L16.6016 9.3125L19.7812 11.2188C20.7344 11.7656 20.7344 12.2344 19.7812 12.7812Z" />
                <path d="M16.6016 9.3125V14.6875L13.4531 12L16.6016 9.3125Z" />
              </svg>
              <div className="store-text">
                <div className="store-label">GET IT ON</div>
                <div className="store-name">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src="/logo.png" alt="Savourly Logo" className="footer-logo-img" />
              <span className="footer-logo-text">Savourly</span>
            </div>

            <div className="footer-links">
              <ul className="footer-menu">
                <li><a href="#" className="footer-link">Privacy</a></li>
                <li><a href="#" className="footer-link">Terms</a></li>
                <li><a href="#" className="footer-link">Contact</a></li>
              </ul>
            </div>

            <div className="social-links">
              <a href="#" className="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="copyright">
            &copy; {new Date().getFullYear()} Savourly. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SavourlyLandingPage;