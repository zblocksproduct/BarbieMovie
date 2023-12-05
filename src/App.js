import React from "react";
import Barbei from "./pages/barbie";
import Metal from "./pages/metal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Barbei />} />
          <Route path="/experience" element={<Metal />} />
        </Routes>
      </Router>
    </div>
  );
}
