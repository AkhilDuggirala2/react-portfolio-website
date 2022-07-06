import React from "react";
import "./footer.css";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer-logo">
        Web DESIGNER
      </a>

      <ul className="premalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer-socials">
        <a href="https://facebook.com">
          <FiFacebook />
        </a>
        <a href="https://instagram.com">
          <FiInstagram />
        </a>
        <a href="https://youtube.com">
          <FiYoutube />
        </a>
      </div>

      <div className="footer-copy">
        <small>&copy; WEB DESIGNER Tutorials. All Rights Reversed.</small>
      </div>
    </footer>
  );
};

export default Footer;
