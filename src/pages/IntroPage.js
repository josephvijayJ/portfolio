import React from 'react';

import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Contact from '../components/Contact';
const IntroPage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Services />
      <Contact />
    </>
  );
};

export default IntroPage;
