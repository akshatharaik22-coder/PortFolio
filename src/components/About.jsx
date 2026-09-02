import { motion } from "framer-motion";
import "../styles/about.css";

function About() {
  return (
    <section className="about" id="about">

      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <div className="about-heading">
          <p className="section-label">GET TO KNOW ME</p>

          <h2>About Me</h2>

          <div className="heading-line"></div>
        </div>

        <div className="about-content">

          <div className="about-text">

            <h3>
              MCA Student &amp; Aspiring AI / Full-Stack Developer
            </h3>

            <p>
              I am Akshatha Rai K, currently pursuing my Master of Computer
              Applications (MCA). I am interested in Artificial Intelligence,
              Machine Learning, Computer Vision, and Full-Stack Development.
            </p>

            <p>
              I enjoy building practical software solutions that combine
              intelligent technologies with user-friendly applications.
              My projects have given me experience in web development,
              databases, machine learning, and computer vision.
            </p>

            <p>
              I am continuously improving my technical skills through
              projects, research, and hands-on learning while preparing
              myself for a career in the software industry.
            </p>

          </div>

          <div className="about-highlights">

            <div className="highlight-card">
              <span>01</span>
              <h4>AI &amp; ML</h4>
              <p>
                Exploring intelligent systems, CNNs, and computer vision.
              </p>
            </div>

            <div className="highlight-card">
              <span>02</span>
              <h4>Full Stack</h4>
              <p>
                Building web applications using modern frontend and backend
                technologies.
              </p>
            </div>

            <div className="highlight-card">
              <span>03</span>
              <h4>Research</h4>
              <p>
                Working on research focused on low-light obstacle detection
                for visually impaired users.
              </p>
            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default About;