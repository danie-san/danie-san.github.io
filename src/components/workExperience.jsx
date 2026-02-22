import React from "react";
import "./modalContent.css";

function WorkExperience() {
  return (
    <div className="modal-inner">
      <div className="sidebar-text sidebar-work">
        <span className="vertical-text">
          Work
          <br />
          Experience
        </span>
      </div>
      <div className="main-content main-work">
        <h1 className="main-titled">Comcast</h1>
        <p>Philadelphia, PA</p>
        <ul className="main-list">
          <li>
            Software Engineer,{" "}
            <span className="italicize">September 2025 – Present</span>
          </li>
        </ul>

        <h1 className="main-titled">J.P. Morgan Chase & Co.</h1>
        <p>Newark, DE</p>
        <ul className="main-list">
          <li>
            Data Automation Engineer,{" "}
            <span className="italicize">April 2024 – September 2024</span>
          </li>
        </ul>

        <h1 className="main-titled">Starr Restaurants</h1>
        <p>Philadelphia, PA</p>
        <ul className="main-list">
          <li>
            Host, <span className="italicize">June 2023 – August 2025</span>
          </li>
        </ul>

        <h1 className="main-titled">
          The Wharton School of the University of Pennsylvania
        </h1>
        <p>Philadelphia, PA</p>
        <ul className="main-list">
          <li>
            Applications Developer Intern,{" "}
            <span className="italicize">June 2023 – December 2023</span>
          </li>
          <li>
            I.T. Support Specialist Intern,{" "}
            <span className="italicize">April 2023 – December 2023</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WorkExperience;
