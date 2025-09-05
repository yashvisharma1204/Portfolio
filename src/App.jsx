import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import New from './components/New';
function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-20">
      <Hero id="home" />
      <About id="about" />
      <Work id="projects" />
      </div>
    </div>
  );
}

export default App;