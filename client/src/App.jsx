import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import LabExperiments from './components/LabExperiments';
import DesignDev from './components/DesignDev';
import Experience from './components/Experience';
import Hackathons from './components/Hackathons';
import CurrentlyLearning from './components/CurrentlyLearning';
import BunaCorner from './components/BunaCorner';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2E1E14] font-sans selection:bg-[#EBDDCB] selection:text-[#2E1E14]">
      {/* Sticky frosted coffee bar */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Featured Projects with Case Study Modals */}
        <Projects />

        {/* In the Lab / Experimental Projects */}
        <LabExperiments />

        {/* Design + Development (Figma to Code Pipeline) */}
        <DesignDev />

        {/* Experience & AAU Engineering Education */}
        <Experience />

        {/* Hackathons & Rapid Product Building */}
        <Hackathons />

        {/* Currently Learning Live Status */}
        <CurrentlyLearning />

        {/* Buna Corner: Ethiopian Coffee Ceremony & Visitor Guestbook */}
        <BunaCorner />

        {/* Working MERN Contact Form */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
