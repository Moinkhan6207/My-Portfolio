import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Feedback from './components/Feedback.jsx';


export default function App() {
  const [dark, setDark] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDark(prefersDark);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <div className="font-sans">
      <Navbar setCurrentSection={setCurrentSection} />

      {currentSection === 'home' && <Hero setCurrentSection={setCurrentSection} />}
      {currentSection === 'about' && <About />}
      {currentSection === 'projects' && <Projects />}
      {currentSection === 'contact' && <Contact />}
      {currentSection === 'feedback' && <Feedback />}

      <Footer />
    </div>
  );
}
