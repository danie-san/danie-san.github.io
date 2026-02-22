import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/homepage";
import ProjectsPage from "./components/projectsPage";
import "./app.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
