import React from "react";
import selfie from "../../assets/images/mark-z.jpg";

const About = () => {
  return (
    <section className="container">
      <h1 className="text-center">Hi, I'm Mark</h1>
      <img src={selfie} className='selfie'></img>
      <article className="bg-transparent bg-gradient mt-5 mx-5 pt-3 px-5">
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
      </article>
    </section>
  );
};

export default About;
