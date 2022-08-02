import React, { useState } from "react";

const Resume = () => {
  return (
    <section className="container pt-4 d-flex flex-column align-items-center">
      <h1 className="text-center">Resume</h1>
      <h2>Full Stack Developer</h2>
      <div className="d-flex flex-wrap justify-content-center">
        <div className="bg-dark bg-gradient text-light p-3 m-3 col">
          <h3>Front-end</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Bulma</li>
          </ul>
        </div>
        <div className="bg-dark bg-gradient text-light p-3 m-3 col">
          <h3>Back-end</h3>
          <ul>
            <li>Creation and use of APIs</li>
            <li>REST</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
      <div>
        <p>
          View and/or download a full copy of my resume{" "}
          <a
            href="https://drive.google.com/file/d/1_87Er3QG3qBK05rmmoxT61FR1kvmmKsH/view?usp=sharing"
            target="_blank"
          >
            here
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Resume;
