import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [sections] = useState(['About', 'Portfolio', 'Contact', 'Resume']);
  const [currentSection, setCurrentSection] = useState(sections[0]);

  const showSection = currentSection => {
    switch (currentSection) {
      case 'Portfolio':
        return <Project />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  }
  return (
    <div className="position-relative min-vh-100 ">
      <div className='content-wrap'>
        <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
        <main className='pb-5'>
          {showSection(currentSection)}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
