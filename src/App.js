import "./styles.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Mint from "./pages/mint";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/minttheledge" element={<Mint />} />
      </Routes>
    </Router>
  );
}

export default App;
