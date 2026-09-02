import { motion } from "framer-motion";
import "../styles/research.css";

function Research() {
  return (
    <section className="research" id="research">

      <motion.div
        className="research-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <div className="research-heading">
          <p className="section-label">RESEARCH & INNOVATION</p>

          <h2>My Research</h2>

          <div className="heading-line"></div>

          <p className="research-intro">
            Exploring artificial intelligence and computer vision to develop
            practical assistive technology.
          </p>
        </div>

        <div className="research-content">

          <div className="research-main">

            <span className="research-status">
              ONGOING RESEARCH
            </span>

            <h3>
              Real-Time Low-Light Obstacle Identification
              for Visually Impaired Persons
            </h3>

            <p className="research-summary">
              An AI-based assistive system that uses a smartphone camera to
              identify obstacles in low-light environments and provide
              meaningful feedback to visually impaired users.
            </p>

            <div className="research-tags">
              <span>CLAHE</span>
              <span>CNN</span>
              <span>Computer Vision</span>
              <span>Deep Learning</span>
              <span>Smartphone Camera</span>
              <span>Audio Feedback</span>
            </div>

          </div>

          <div className="research-details">

            <div className="research-detail-card">
              <h4>Problem</h4>
              <p>
                Low-light environments reduce image visibility and make
                obstacle detection more difficult for assistive systems.
              </p>
            </div>

            <div className="research-detail-card">
              <h4>Approach</h4>
              <p>
                Low-light images are enhanced using CLAHE and processed using
                a CNN-based approach for obstacle identification.
              </p>
            </div>

            <div className="research-detail-card">
              <h4>Goal</h4>
              <p>
                Provide real-time visual assistance with audio feedback that
                can help users better understand obstacles around them.
              </p>
            </div>

          </div>

        </div>

        <div className="research-pipeline">

          <div className="pipeline-item">
            <span>01</span>
            <h4>Capture</h4>
            <p>Smartphone camera captures the surrounding scene.</p>
          </div>

          <div className="pipeline-arrow">→</div>

          <div className="pipeline-item">
            <span>02</span>
            <h4>Enhance</h4>
            <p>CLAHE improves visibility in low-light images.</p>
          </div>

          <div className="pipeline-arrow">→</div>

          <div className="pipeline-item">
            <span>03</span>
            <h4>Identify</h4>
            <p>CNN-based processing identifies relevant obstacles.</p>
          </div>

          <div className="pipeline-arrow">→</div>

          <div className="pipeline-item">
            <span>04</span>
            <h4>Assist</h4>
            <p>Audio feedback communicates useful information.</p>
          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default Research;