import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TechnicalProjects from './components/TechnicalProjects'; 
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <TechnicalProjects /> 
      <Contact />
      <Footer />
    </div>
  );
}

export default App;