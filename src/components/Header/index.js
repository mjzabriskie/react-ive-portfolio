import React from "react";
import Nav from "../Nav";
import backdrop from "../../assets/images/mult-colored-hero.jpg";

function Header({ currentSection, setCurrentSection }) {
  return (
    <header
      className="d-flex flex-wrap justify-content-center justify-content-md-between align-items-center"
      style={{
        backgroundImage: `url(${backdrop})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <h1 className="text-center mt-1 p-1">Mark Zabriskie</h1>
      <Nav
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
    </header>
  );
}

export default Header;
