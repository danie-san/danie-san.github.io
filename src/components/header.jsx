import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import resume from "../media/santos_danielle_resume.pdf";

function Header({ isModalOpen, openModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (!isModalOpen) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const handleModalOpen = (modalName) => {
    setIsMenuOpen(false);
    openModal(modalName);
  };

  return (
    <div className="item header">
      <h1 className="logo-text">
        <Link to="/">Danielle Liz Santos</Link>
      </h1>
      <div
        className={`nav-toggle-label ${isMenuOpen ? "open" : ""} ${isModalOpen ? "disabled" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={isMenuOpen ? "nav-open" : ""}>
        <ul>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Danielle Liz Santos
            </Link>
          </li>
          <li>
            <button onClick={() => handleModalOpen("about")}>About</button>
          </li>
          <li>
            <Link to="/projects" onClick={() => setIsMenuOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <button onClick={() => handleModalOpen("contact")}>Contact</button>
          </li>
          <li>
            <a href={resume} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
