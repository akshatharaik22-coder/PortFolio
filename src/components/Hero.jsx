import { motion } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiArrowDown,
} from "react-icons/fi";

import "../styles/hero.css";

function Hero() {

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero" id="home">

      <div className="hero-container">

        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Availability */}

          <div className="availability">
            <span className="availability-dot"></span>
            Available for opportunities
          </div>


          {/* Name */}

          <h1>
            Hey, I am
            <span>Akshatha Rai K</span>
          </h1>


          {/* Role */}

          <p className="hero-label">
            AI • ML • FULL STACK DEVELOPER
          </p>


          {/* Short tagline */}

          <h2>
            Building intelligent solutions with AI.
          </h2>


          {/* Buttons */}

          <div className="hero-buttons">

            <motion.button
              className="hero-btn primary"
              onClick={scrollToProjects}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              View My Work
            </motion.button>


            <motion.button
              className="hero-btn secondary"
              onClick={scrollToContact}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <FiMail />
              Get In Touch
            </motion.button>

          </div>


          {/* Social Links */}

          <div className="hero-socials">

            <span>Connect</span>

            <a
              href="https://github.com/akshatharaik22-coder"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/akshatha-rai-b6880926a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>

          </div>

        </motion.div>

      </div>


      {/* Scroll Down */}

      <motion.button
        className="scroll-down"
        onClick={scrollToProjects}
        animate={{ y: [0, 7, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        aria-label="Scroll to projects"
      >
        <span>Scroll Down</span>
        <FiArrowDown />
      </motion.button>

    </section>
  );
}

export default Hero;