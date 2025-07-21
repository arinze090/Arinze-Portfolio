import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "../components/scrollToTop/ScrollToTop";
import HomePage from "../pages/Homepage";
import Header from "../components/common/Header";
import ProjectCaseStudies from "../pages/Projects";
import AboutSection from "../pages/AboutMe";
import ProficiencyPage from "../pages/ProficiencyPage";
import FooterSection from "../components/common/Footer";

function NormalRoute() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectCaseStudies />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/proficiencies" element={<ProficiencyPage />} />
      </Routes>

      {/* <Footer /> */}
      <FooterSection />
    </Router>
  );
}

export default NormalRoute;
