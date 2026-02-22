import React from "react";
import "./about.css";
import photo from "../media/IMG_3256.jpeg";

function About() {
  return (
    <div className="modal-inner">
      <div className="sidebar-text sidebar-about">
        <span className="vertical-text">About Me</span>
      </div>
      <div className="main-content main-about">
        <div className="about-text-1">
          My name is Danielle and I go by she/her pronouns. I'm currently a
          graduating Senior at Drexel University studying Computer Science.
          <br />
          <br />
          I'm an aspiring software engineer with a focus on fullstack
          development. I have a strong passion for problem solving and
          developing thoughtful applications. I'm always looking for new
          opportunities to learn and grow as a developer!
        </div>
        <div className="about-photos">
          <div className="about-photo">
            <img src={photo} alt="Danielle" />
          </div>
          <div className="about-text-2">
            Outside of my studies, I enjoy baking, working out, going to
            concerts, and trying new food places. I also love reading, curling
            up with my cat, and spending time with good company.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
