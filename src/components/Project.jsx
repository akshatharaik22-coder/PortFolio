import { motion } from "framer-motion";
import "../styles/project.css";

function Projects() {
  const projects = [
    {
      title: "AadhaarVoteGuard",
      category: "Full Stack Web Application",
      description:
        "A secure voting application with Aadhaar-based verification, OTP authentication, JWT authorization, and duplicate-vote prevention.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MySQL",
        "JWT",
        "Axios",
      ],
      githubLink: "",
      liveLink: "",
    },

    {
      title: "Low-Light Obstacle Detection",
      category: "AI / Computer Vision / Research",
      description:
        "An AI-based assistive system designed to identify obstacles in low-light environments using CLAHE-enhanced images and CNN-based detection.",
      technologies: [
        "Python",
        "OpenCV",
        "CLAHE",
        "TensorFlow",
        "CNN",
      ],
      githubLink: "",
      liveLink: "",
    },

    {
      title: "Handwritten Signature Verification",
      category: "Machine Learning",
      description:
        "A signature verification system that compares genuine and forged signatures using image processing and a Siamese neural network approach.",
      technologies: [
        "Python",
        "OpenCV",
        "NumPy",
        "Siamese Network",
      ],
      githubLink: "",
      liveLink: "",
    },

    {
      title: "Science Exhibition Project",
      category: "Web / Database Application",
      description:
        "A web-based project created to organize and present science exhibition information using a database-driven application.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "MongoDB",
      ],
      githubLink: "",
      liveLink: "",
    },
  ];

  return (
    <section className="projects" id="projects">

      <motion.div
        className="projects-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <div className="projects-heading">
          <p className="section-label">MY WORK</p>

          <h2>Projects</h2>

          <div className="heading-line"></div>

          <p className="projects-intro">
            A selection of projects that demonstrate my experience in
            full-stack development, artificial intelligence, machine learning,
            and computer vision.
          </p>
        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >

              <div className="project-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <p className="project-category">
                {project.category}
              </p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-links">

                {project.githubLink ? (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                ) : (
                  <span className="project-link-disabled">
                    GitHub
                  </span>
                )}

                {project.liveLink ? (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                ) : (
                  <span className="project-link-disabled">
                    Live Demo
                  </span>
                )}

              </div>

            </motion.article>
          ))}

        </div>

      </motion.div>

    </section>
  );
}

export default Projects;