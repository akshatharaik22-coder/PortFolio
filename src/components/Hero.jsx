import { motion } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiArrowDown,
} from "react-icons/fi";

import profileImage from "../assets/images/my_pic.jpg";

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

        {/* ================= LEFT SIDE ================= */}

        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Small availability badge */}

          <div className="availability">
            <span className="availability-dot"></span>
            Available for opportunities
          </div>


          {/* NAME */}

          <h1>
            Hey, I am
            <span>Akshatha Rai K</span>
          </h1>


          {/* ROLE */}

          <p className="hero-label">
            AI • ML • FULL STACK DEVELOPER
          </p>


          {/* SHORT TAGLINE */}

          <h2>
            Building intelligent solutions with AI.
          </h2>


          {/* BUTTONS */}

          <div className="hero-buttons">

            <motion.button
              className="hero-btn primary"
              onClick={scrollToProjects}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              View My Work
            </motion.button>


            <motion.button
              className="hero-btn secondary"
              onClick={scrollToContact}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <FiMail />
              Get In Touch
            </motion.button>

          </div>


          {/* SOCIAL */}

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


        {/* ================= RIGHT SIDE ================= */}

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >

          {/* Decorative circles */}

          <div className="profile-orbit orbit-one"></div>

          <div className="profile-orbit orbit-two"></div>


          {/* PROFILE */}

          <div className="profile-circle">

            <img
              src={profileImage}
              alt="Akshatha Rai K"
            />

          </div>


          {/* AI CARD */}

          <motion.div
            className="profile-card ai-card"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <div className="card-icon">
              AI
            </div>

            <div>
              <small>Focus</small>
              <strong>Artificial Intelligence</strong>
            </div>

          </motion.div>


          {/* DL CARD */}

          <motion.div
            className="profile-card dl-card"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <div className="card-icon">
              DL
            </div>

            <div>
              <small>Interest</small>
              <strong>Deep Learning</strong>
            </div>

          </motion.div>

        </motion.div>

      </div>


      {/* SCROLL DOWN */}

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