import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Results from "./pages/Results";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
