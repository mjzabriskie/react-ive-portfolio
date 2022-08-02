import React from "react";
import selfie from "../../assets/images/mark-z.jpg";

const About = () => {
  return (
    <section className="container  pt-4">
      <img src={selfie} className='selfie'></img>
      <h1 className="text-center">Hi, I'm Mark</h1>
      <div className="about-text bg-gradient mt-lg-5 mx-lg-5 pt-lg-3 px-lg-5">
        <p className="p-2">
          I've worked for several years now as a senior business analyst with the State of Utah helping them to create
          with innovative technological solutions to move their workflow from a
          local mainframe environment to the cloud. My primary task was helping
          to recreate a new correspondence system through which agents could
          send correspondence to our customers.
        </p>
        <p className="p-2">
          I have recently graduated from the University of Utah Full Stack
          Coding Bootcamp. This bootcamp reinforced my javascript, HTML5, and
          CSS skills I cultivated as a state employee, but I also learned the
          technologies associated with the MERN stack.
        </p>
        <p className="p-2">
          Thank you for visiting my portfolio! If you feel like I could help you
          with a project, please reach out to me via the Contact section.
        </p>
      </div>
    </section>
  );
};

export default About;
