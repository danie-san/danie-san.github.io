import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./modalContent.css";

function Contact() {
  return (
    <div className="modal-inner">
      <div className="sidebar-text sidebar-contact">
        <span className="vertical-text">Contact Me</span>
      </div>
      <div className="main-content main-contact">
        <h1 className="main-titled">Email</h1>
        <p>
          <a href="mailto:danielleliz1721@gmail.com">
            <MdEmail className="contact-icon" /> daniesantos1721@gmail.com
          </a>
        </p>

        <h1 className="main-titled">LinkedIn</h1>
        <p>
          <a
            href="https://www.linkedin.com/in/danielle-liz-santos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="contact-icon" /> Danielle Liz Santos
          </a>
        </p>

        <h1 className="main-titled">GitHub</h1>
        <p>
          <a
            href="https://www.github.com/danie-san"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="contact-icon" /> danie-san
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
