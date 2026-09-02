import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import "../styles/footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-top">

          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              AR<span>.</span>
            </a>

            <p>
              Building intelligent solutions through AI,
              machine learning, and full-stack development.
            </p>
          </div>

          <div className="footer-links">

            <h4>Quick Links</h4>

            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#research">Research</a>
            <a href="#contact">Contact</a>

          </div>

          <div className="footer-social">

            <h4>Connect</h4>

            <div className="social-icons">

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>

              <a
                href="mailto:your-email@example.com"
                aria-label="Email"
              >
                <FiMail />
              </a>

            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © {currentYear} Akshatha Rai K. All rights reserved.
          </p>

          <a href="#home" className="back-to-top">
            <span>Back to top</span>
            <FiArrowUp />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;