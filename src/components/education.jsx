import React from "react";
import "./modalContent.css";

function Education() {
  return (
    <div className="modal-inner">
      <div className="sidebar-text sidebar-education">
        <span className="vertical-text">Education</span>
      </div>
      <div className="main-content main-education">
        <h1 className="main-titled">Drexel University</h1>
        <p>Philadelphia, PA</p>
        <p>B.S. Computer Science</p>
        <p>Minor in User Experience and Interaction Design</p>
        <p>
          Concentrations in Artificial Intelligence and Machine Learning &
          Software Engineering
        </p>
        <p>GPA: 3.2</p>
        <p>Expected Graduation: June 2026</p>

        <h1 className="main-titled">Relevant Coursework</h1>
        <ul className="main-list">
          <li>Data Structures & Algorithms</li>
          <li>Software Architecture</li>
          <li>User Interface I & II</li>
          <li>Human Factored Engineering</li>
          <li>Web Design I & II</li>
          <li>Human Centered Design Processes</li>
          <li>Web Development</li>
          <li>Systems Programming</li>
          <li>Artificial Intelligence & Machine Learning</li>
        </ul>

        <h1 className="main-titled">Extracurriculars</h1>
        <ul className="main-list">
          <li>Sigma Psi Zeta Sorority, Inc. Nu Chapter</li>
          <li>Drexel Society of Asian Scientist and Engineers</li>
        </ul>
      </div>
    </div>
  );
}

export default Education;
