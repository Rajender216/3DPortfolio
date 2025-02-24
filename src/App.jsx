import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import ContactPage from "./pages/Contact";
import Footer from "./pages/Footer";
import SkillsPage from "./pages/SkillsPage";
import ProjectsShowcase from "./pages/Myproject";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <ProjectsShowcase />
      <SkillsPage />
      <ContactPage />
      <Footer />
    </>
  );
}

export default App;
