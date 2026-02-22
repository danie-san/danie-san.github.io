import React from "react";
import "./projectDetail.css";

function ProjectDetail({ project }) {
  return (
    <div className="project-detail">
      <h1>{project.title}</h1>
      <p className="project-description-detail">
        <span className="italicize">{project.description}</span>
      </p>
      <p className="project-date-detail">{project.date}</p>
      {project.details && <p className="project-details">{project.details}</p>}
    </div>
  );
}

export default ProjectDetail;
