import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Research from "./components/Research";
import Achievements from "./components/Achievements";
import Gallery from "./components/Gallery";
import Contact from "./components/contact";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />

      <Hero />
      <About />
      <Skills />
      <Project />
      <Research />
      <Achievements />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;