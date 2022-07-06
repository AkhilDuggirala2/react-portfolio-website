/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about-card">
              <FiUsers className="about-icon" />
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article>

            <article className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>60+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id sem aliquam, interdum leo quis, placerat augue. Donec dictum sollicitudin velit, vitae sollicitudin nisi vehicula eu. Nulla congue purus nec enim sollicitudin lobortis. Morbi mauris eros, scelerisque ac metus ut, fermentum eleifend elit. Curabitur tristique varius ante egestas ullamcorper. In vel turpis commodo nisi lacinia ornare non quis nunc. Duis sodales auctor tellus. Nullam congue diam ut dictum dictum. Etiam ex erat, pretium elementum dapibus vitae, suscipit et urna. Quisque venenatis arcu non odio pulvinar, a venenatis orci facilisis. Donec accumsan lacinia sagittis. Curabitur sodales mauris euismod ante imperdiet placerat nec in velit.
            </p>

            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
