import React, { useState } from "react";
import Modal from "./modal";
import ProjectDetail from "./projectDetail";
import Header from "./header";
import About from "./about";
import Contact from "./contact";
import "./projectsPage.css";

function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeModal, setActiveModal] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Read Together",
      description: "Virtual book club web application",
      date: "Fall 2024",
      details:
        "Created using HTML, CSS, JavaScript, Node.js, PostgreSQL, and Google Books API. Deployed using Fly.io.",
      type: "programming",
    },
    {
      id: 2,
      title: "MuChat: Online Music Chatroom",
      description: "Music listening inspired chatroom web application",
      date: "Fall 2021",
      details:
        "Created using HTML, CSS, JavaScript, Node.js, PostgreSQL, and Spotify API. Deployed using Fly.io.",
      type: "programming",
    },
    {
      id: 3,
      title: "Journal Memos",
      description: "Voice journaling mobile application",
      date: "Summer 2023",
      details:
        "Created using Swift, speech recognition libraries, and audio-processing libraries.",
      type: "both",
    },
    {
      id: 4,
      title: "My Banker",
      description: "Banking application",
      date: "Fall 2022",
      details: "Created using Java.",
      type: "programming",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "Commissioned project to design and deploy a portfolio website.",
      date: "September - June 2024",
      details: "",
      type: "design",
    },
    {
      id: 6,
      title: "Fidelity Redesign",
      description: "Redesign of Fidelity's mobile application.",
      date: "April - June 2024",
      details: "",
      type: "design",
    },
    {
      id: 7,
      title: "City Fitness Redesign",
      description: "Redesign of City Fitness' official website.",
      date: "January - March 2023",
      details: "",
      type: "design",
    },
    {
      id: 8,
      title: "Rate My Route",
      description: "Crowdsourced safety rating transportation app.",
      date: "September - December 2022",
      details: "",
      type: "design",
    },
    {
      id: 9,
      title: "Omoi Redesign",
      description: "Redesign of Omoi Zakka Shop's official website.",
      date: "September - December 2022",
      details: "",
      type: "design",
    },
  ];

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const openModal = (modalName) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="projects-container">
      <Header
        openModal={openModal}
        isModalOpen={!!activeModal || selectedProject !== null}
      />

      <div className="item sidebar">
        <span className="vertical-text">Projects</span>
      </div>

      <div className="item projects-blurb">
        From late-night side projects to school assignments I got way too into,
        most of what you'll find here are projects I built completely on my own.
        Each one says something about how I think: I like digging into hard
        problems, I care about how things look and feel, and honestly, I just
        really enjoy the process of making stuff, whether it's for class, for
        fun, or for no reason other than curiosity.
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => openProjectModal(project)}
          >
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-date">{project.date}</p>
          </div>
        ))}
      </div>

      <Modal isOpen={selectedProject !== null} onClose={closeProjectModal}>
        {selectedProject && <ProjectDetail project={selectedProject} />}
      </Modal>

      <Modal isOpen={activeModal === "about"} onClose={closeModal}>
        <About />
      </Modal>

      <Modal isOpen={activeModal === "contact"} onClose={closeModal}>
        <Contact />
      </Modal>
    </div>
  );
}

export default ProjectsPage;
