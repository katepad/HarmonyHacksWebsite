import React from 'react';
import '../styles/Global.css'; 

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* About */}
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5>Harmony Hacks</h5>
            <p>
              Empowering CSUSM and high school students through innovation, coding, and collaboration.
            </p>
          </div>

          {/* Links */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5>Links</h5>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/resources">Resources</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5>Follow Us</h5>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bottom-bar text-center">
        © 2025 Harmony Hacks — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
