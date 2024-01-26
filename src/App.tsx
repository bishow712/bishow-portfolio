import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
