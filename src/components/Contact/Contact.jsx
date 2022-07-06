import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_xeyb2jt",
      "template_71q2hdq",
      form.current,
      "SpJV4FOn0s3UCEhhm"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineMail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>akhilduggirala19@gmail.com</h5>
            <a href="mailto:akhilduggirala19@gmail.com">Send a message</a>
          </article>
          <article className="contact-option">
            <RiMessengerLine className="contact-option-icon" />
            <h4>Messenger</h4>
            <h5>akhilTutorials</h5>
            <a href="https://m.me/profile.php?id=100009563371517">
              Send a message
            </a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className="contact-option-icon" />
            <h4>Whatsapp</h4>
            <h5>+528496173</h5>
            <a href="https://api.whatsapp.com/send?phone+9652869884">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onClick={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
