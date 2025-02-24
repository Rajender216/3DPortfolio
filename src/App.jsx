
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
