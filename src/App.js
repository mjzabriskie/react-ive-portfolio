import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  const [sections] = useState(["About", "Portfolio", "Contact", "Resume"]);
  const [currentSection, setCurrentSection] = useState(sections[0]);

  const showSection = (currentSection) => {
    if (currentSection === "Portfolio") {
      return <Project />;
    } else if (currentSection === "Contact") {
      return <Contact />;
    } else if (currentSection === "Resume") {
      return <Resume />;
    } else {
      return <About />;
    }
  };
  return (
    <div className="main-window d-flex flex-wrap justify-content-center">
      <Header
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <main>{showSection(currentSection)}</main>

      <Footer />
    </div>
  );
}

export default App;
