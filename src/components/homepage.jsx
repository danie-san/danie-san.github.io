import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./modal";
import WorkExperience from "./workExperience";
import Education from "./education";
import Contact from "./contact";
import About from "./about";
import Header from "./header";
import "./homepage.css";
import photo from "../media/IMG_8199.jpeg";

function HomePage() {
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalName) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const goToProjects = () => {
    navigate("/projects");
  };

  return (
    <div className="home-container">
      <Header openModal={openModal} isModalOpen={!!activeModal} />

      <div className="item programming-projects">
        <button onClick={goToProjects} className="home-buttons">
          Projects
        </button>
      </div>

      <div className="item photo">
        <img src={photo} alt="Danielle at GHC" />
      </div>

      <div className="item intro">
        Hello! <br /> My name is Danielle Santos. <br /> I am a Computer Science
        and UI/UX Student.
      </div>

      <div className="item work-experience">
        <button onClick={() => openModal("work")} className="home-buttons">
          Work Experience
        </button>
      </div>

      <div className="item education">
        <button onClick={() => openModal("education")} className="home-buttons">
          Education
        </button>
      </div>

      <div className="item contact">
        <button onClick={() => openModal("contact")} className="home-buttons">
          Contact
        </button>
      </div>

      <div className="item about">
        <button onClick={() => openModal("about")} className="home-buttons">
          About
        </button>
      </div>

      <Modal isOpen={activeModal === "work"} onClose={closeModal} tall>
        <WorkExperience />
      </Modal>

      <Modal isOpen={activeModal === "education"} onClose={closeModal} tall>
        <Education />
      </Modal>

      <Modal isOpen={activeModal === "contact"} onClose={closeModal}>
        <Contact />
      </Modal>

      <Modal isOpen={activeModal === "about"} onClose={closeModal}>
        <About />
      </Modal>
    </div>
  );
}

export default HomePage;
