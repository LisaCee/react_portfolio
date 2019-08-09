import React from "react";

import "./styles/normalize.css";
import "./styles.css";

import Header from "./components/Header";
import Gallery from "./components/Gallery";
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Gallery />
      <About />
      <Contact />
    </div>
  );
}

export default App;
