import { motion } from "framer-motion";
import "../styles/research.css";

function Research() {
  const technologies = [
    "Python",
    "PyTorch",
    "Faster R-CNN",
    "ResNet-50 FPN",
    "OpenCV",
    "CLAHE",
    "Adaptive Gamma",
    "Flutter",
    "FastAPI",
  ];

  const pipeline = [
    {
      number: "01",
      title: "Capture",
      description: "Capture surroundings using a smartphone camera.",
    },
    {
      number: "02",
      title: "Enhance",
      description:
        "Improve low-light visibility using CLAHE and gamma correction.",
    },
    {
      number: "03",
      title: "Detect",
      description: "Identify obstacles using Faster R-CNN.",
    },
    {
      number: "04",
      title: "Assist",
      description: "Provide direction, distance and voice feedback.",
    },
  ];

  return (
    <section className="research" id="research">
      <motion.div
        className="research-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Section Heading */}
        <div className="research-heading">
          <p className="section-label">RESEARCH & INNOVATION</p>

          <h2>My Research</h2>

          <div className="heading-line"></div>

          <p className="research-intro">
            Developing AI-powered computer vision solutions to improve
            independent mobility and navigation for visually impaired
            individuals.
          </p>
        </div>

        {/* Research Main Card */}
        <div className="research-card">
          <div className="research-info">
            <span className="research-status">RESEARCH PROJECT</span>

            <h3>Vision Assist</h3>

            <h4>
              Real-Time Low-Light Obstacle Identification for Visually
              Impaired Individuals
            </h4>

            <p className="research-summary">
              An AI-powered assistive system designed for visually impaired
              individuals. It detects obstacles in low-light environments and
              provides real-time audio alerts with direction and approximate
              distance to support safer navigation.
            </p>

            {/* Technologies */}
            <div className="research-tags">
              {technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
          </div>

          {/* Research Highlights */}
          <div className="research-highlights">
            <div className="highlight-item">
              <span className="highlight-icon">01</span>

              <div>
                <h4>Image Enhancement</h4>
                <p>CLAHE and Adaptive Gamma Correction</p>
              </div>
            </div>

            <div className="highlight-item">
              <span className="highlight-icon">02</span>

              <div>
                <h4>Object Detection</h4>
                <p>Faster R-CNN with ResNet-50 FPN</p>
              </div>
            </div>

            <div className="highlight-item">
              <span className="highlight-icon">03</span>

              <div>
                <h4>Smart Assistance</h4>
                <p>Obstacle direction, approximate distance and voice alerts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Research Workflow */}
        <div className="research-pipeline">
          <div className="pipeline-heading">
            <h3>How It Works</h3>
            <p>From image capture to intelligent audio assistance</p>
          </div>

          <div className="pipeline-steps">
            {pipeline.map((step, index) => (
              <div className="pipeline-wrapper" key={step.number}>
                <div className="pipeline-item">
                  <span>{step.number}</span>

                  <h4>{step.title}</h4>

                  <p>{step.description}</p>
                </div>

                {index !== pipeline.length - 1 && (
                  <div className="pipeline-arrow">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Research;