import React from "react";

import "./styles/normalize.css";
import "./styles.css";

import Header from "./components/Header";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <Header />
      <Gallery />
    </div>
  );
}

export default App;