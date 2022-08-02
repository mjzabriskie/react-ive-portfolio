import React from "react";
import Nav from "../Nav";

function Header({ currentSection, setCurrentSection }) {
  return (
    <header
      className="d-flex flex-wrap justify-content-center justify-content-md-between align-items-center"
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
