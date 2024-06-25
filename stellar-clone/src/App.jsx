import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ComingSoon from "./Pages/ComingSoon";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<ComingSoon />} />
        <Route path="/product" element={<ComingSoon />} />
        <Route path="/services" element={<ComingSoon />} />
        <Route path="/blogs" element={<ComingSoon />} />
        <Route path="/training" element={<ComingSoon />} />
        <Route path="/contact" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
