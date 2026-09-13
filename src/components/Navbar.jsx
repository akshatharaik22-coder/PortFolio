import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
} from "react-icons/fi";

import "../styles/Navbar.css";

function Navbar({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <a
          href="#home"
          className="navbar-logo"
          onClick={closeMenu}
        >
          AR<span>.</span>
        </a>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#research" onClick={closeMenu}>Research</a>
          <a href="#achievements" onClick={closeMenu}>Achievements</a>
          <a href="#gallery" onClick={closeMenu}>Gallery</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>

        <button
          className="theme-button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title="Toggle theme"
        >
          {theme === "light" ? <FiMoon /> : <FiSun />}
        </button>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;