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
      <Hero />
      <About />
      <Work/>
      {/* <New/> */}
    </div>
  );
}

export default App;