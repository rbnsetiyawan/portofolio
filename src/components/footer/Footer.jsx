import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Robin Setiyawan</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portofolio" className="footer__link">
              Project
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/robin_setiyawan/"
            className="home__social-icon"
          >
            <i class="uil uil-instagram-alt"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/robin-setiyawan-2885531a9/"
            className="home__social-icon"
          >
            <i class="uil uil-github"></i>
          </a>
          <a
            href="https://github.com/rbnsetiyawan?tab=repositories"
            className="home__social-icon"
          >
            <i class="uil uil-linkedin"></i>
          </a>
        </div>

        <div className="footer__copy">
          &#169; Crypicalcoder. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
