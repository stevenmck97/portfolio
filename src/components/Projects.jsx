import "../styles/projects.css";
import { useState } from "react";

export const Projects = () => {
  const [projectHover, setProjectHover] = useState("inactive");

  const handleHover = () => {
    setProjectHover("active");
  };

  return (
    <section className="Projects">
      <h1>Some of my personal projects</h1>
      {/* <div className="projects_container">
        <div className="card">
          <img
            className="card-img"
            src="helpful-project.jpg"
            alt="helpful recruitment"
          />
          <h2>Helpful Recruitment</h2>
          <p>
            An informational recruitment website which aims to assist people in
            their job search
          </p>
          <div className="icon-container">
            <img className="project-icon" src="github.svg" alt="github repo" />
            <img className="project-icon" src="code.svg" alt="live version" />
          </div>
        </div>
        <div className="card">
          <img
            className="card-img"
            src="helpful-project.jpg"
            alt="helpful recruitment"
          />
        </div>
        <div className="card">
          <img
            className="card-img"
            src="helpful-project.jpg"
            alt="helpful recruitment"
          />
        </div>
        <div className="card">
          <img
            className="card-img"
            src="helpful-project.jpg"
            alt="helpful recruitment"
          />
        </div>
        <div className="card">
          <img
            className="card-img"
            src="helpful-project.jpg"
            alt="helpful recruitment"
          />
        </div>
        <div className="card">
          <img
            className="card-img"
            src="helpful-project.jpg"
            alt="helpful recruitment"
          />
        </div>
      </div> */}
      <div className="cards">
        <div className="card card3">
          <div className="container">
            <img
              className="card-img"
              src="helpful-project.jpg"
              alt="Helpful Recruitment"
            />
            <div className="details">
              <h3>Helpful Recruitment</h3>
              <p>
                An informational recruitment website which aims to assist people
                in their job search.
              </p>
              <img
                className="project-icon"
                src="github.svg"
                alt="github repo"
              />
              <img className="project-icon" src="code.svg" alt="live version" />
            </div>
          </div>
        </div>
        <div className="card card3">
          <div className="container">
            <img
              className="card-img"
              src="helpful-project.jpg"
              alt="Helpful Recruitment"
            />
            <div className="details">
              <h3>Helpful Recruitment</h3>
              <p>
                An informational recruitment website which aims to assist people
                in their job search.
              </p>
              <img
                className="project-icon"
                src="github.svg"
                alt="github repo"
              />
              <img className="project-icon" src="code.svg" alt="live version" />
            </div>
          </div>
        </div>
        <div className={`card card3 ${projectHover}`} onMouseOver={handleHover}>
          <div className="container">
            <img
              className="card-img"
              src="helpful-project.jpg"
              alt="Helpful Recruitment"
            />
            <div className={`details ${projectHover}`}>
              <h3>Helpful Recruitment</h3>
              <p>
                An informational recruitment website which aims to assist people
                in their job search.
              </p>
              <img
                className="project-icon"
                src="github.svg"
                alt="github repo"
              />
              <img className="project-icon" src="code.svg" alt="live version" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
