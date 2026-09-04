import { motion } from "framer-motion";

import {
  FiCpu,
  FiCode,
  FiSearch,
} from "react-icons/fi";

import profileImage from "../assets/images/my_pic.jpg";

import "../styles/about.css";


function About() {
  return (
    <section className="about" id="about">

      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        {/* ================= HEADING ================= */}

        <div className="about-heading">

          <p className="section-label">
            GET TO KNOW ME
          </p>

          <h2>
            About Me
          </h2>

          <div className="heading-line"></div>

        </div>


        {/* ================= MAIN CONTENT ================= */}

        <div className="about-content">


          {/* ================= PROFILE IMAGE ================= */}

          <div className="about-profile">

            <div className="profile-wrapper">

              {/* Decorative circles */}

              <div className="about-orbit orbit-one"></div>

              <div className="about-orbit orbit-two"></div>


              {/* Profile Image */}

              <div className="about-profile-circle">

                <img
                  src={profileImage}
                  alt="Akshatha Rai K"
                />

              </div>


              {/* AI CARD */}

              <motion.div
                className="about-card ai-card"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >

                <div className="about-card-icon">
                  <FiCpu />
                </div>

                <div>
                  <small>Focus</small>
                  <strong>AI &amp; ML</strong>
                </div>

              </motion.div>


              {/* FULL STACK CARD */}

              <motion.div
                className="about-card stack-card"
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >

                <div className="about-card-icon">
                  <FiCode />
                </div>

                <div>
                  <small>Building</small>
                  <strong>Full Stack</strong>
                </div>

              </motion.div>

            </div>

          </div>


          {/* ================= ABOUT TEXT ================= */}

          <div className="about-text">

            <h3>
              MCA Student &amp; Aspiring AI / Full-Stack Developer
            </h3>


            <p>
              I am Akshatha Rai K, currently pursuing my Master of
              Computer Applications (MCA) at NMAMIT. I am interested
              in Artificial Intelligence, Machine Learning, Computer
              Vision, and Full-Stack Development.
            </p>


            <p>
              I enjoy building practical software solutions that
              combine intelligent technologies with user-friendly
              applications. My projects have given me experience
              in web development, databases, machine learning,
              and computer vision.
            </p>


            <p>
              I am continuously improving my technical skills
              through projects, research, and hands-on learning
              while preparing myself for a career in the software
              industry.
            </p>


            {/* ================= CURRENT INTEREST ================= */}

            <div className="about-mini-card">

              <div className="mini-icon">
                <FiSearch />
              </div>

              <div>

                <span>
                  CURRENT INTEREST
                </span>

                <strong>
                  AI • Machine Learning • Computer Vision
                </strong>

              </div>

            </div>

          </div>

        </div>


        {/* ================= HIGHLIGHTS ================= */}

        <div className="about-highlights">


          {/* AI & ML */}

          <div className="highlight-card">

            <span>01</span>

            <h4>
              AI &amp; Machine Learning
            </h4>

            <p>
              Exploring intelligent systems, CNNs,
              machine learning, and computer vision.
            </p>

          </div>


          {/* FULL STACK */}

          <div className="highlight-card">

            <span>02</span>

            <h4>
              Full Stack Development
            </h4>

            <p>
              Building practical web applications
              using modern frontend, backend,
              and database technologies.
            </p>

          </div>


          {/* RESEARCH */}

          <div className="highlight-card">

            <span>03</span>

            <h4>
              Research
            </h4>

            <p>
              Working on research focused on
              low-light obstacle detection for
              visually impaired users.
            </p>

          </div>


        </div>

      </motion.div>

    </section>
  );
}

export default About;