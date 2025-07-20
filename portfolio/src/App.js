import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="brand">Creative Portfolio</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <section id="home" className="section home-section">
        <h1>Hi, I'm Alex Doe</h1>
        <p className="tagline">Designing the future, one pixel at a time.</p>
      </section>
      <section id="about" className="section about-section">
        <h2>About Me</h2>
        <p>I'm a creative developer passionate about building beautiful, functional web experiences. I blend design and code to craft unique digital products.</p>
        <ul className="skills-list">
          <li>React & JavaScript</li>
          <li>UI/UX Design</li>
          <li>Animation</li>
          <li>Responsive Web</li>
        </ul>
      </section>
      <section id="projects" className="section projects-section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Modern Blog</h3>
            <p>A sleek, animated blog platform with dark mode and markdown support.</p>
          </div>
          <div className="project-card">
            <h3>Portfolio Gallery</h3>
            <p>Interactive gallery showcasing creative works with smooth transitions.</p>
          </div>
          <div className="project-card">
            <h3>Startup Landing</h3>
            <p>Landing page for a tech startup, featuring bold visuals and call-to-action.</p>
          </div>
        </div>
      </section>
      <section id="contact" className="section contact-section">
        <h2>Contact</h2>
        <p>Let's connect! Email me at <a href="mailto:alexdoe@email.com">alexdoe@email.com</a> or find me on <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
      </section>
      <footer className="footer">&copy; {new Date().getFullYear()} Alex Doe. All rights reserved.</footer>
    </div>
  );
}

export default App;
