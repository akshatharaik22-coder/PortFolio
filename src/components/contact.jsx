import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
} from "react-icons/fi";
import "../styles/contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = `Portfolio Contact from ${formData.name}`;

    const body = `
Hello Akshatha,

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `;

    window.location.href =
      `mailto:akshatharaik22@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="contact" id="contact">

      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <div className="contact-heading">

          <p className="section-label">GET IN TOUCH</p>

          <h2>Contact Me</h2>

          <div className="heading-line"></div>

          <p className="contact-intro">
            Interested in working together, discussing a project, or
            connecting professionally? Feel free to reach out.
          </p>

        </div>

        <div className="contact-content">

          {/* Contact Information */}

          <div className="contact-info">

            <h3>Let's Connect</h3>

            <p>
              I am open to opportunities, internships, projects,
              research discussions, and professional connections.
            </p>

            <div className="contact-details">

              {/* Email */}

              <div className="contact-item">

                <div className="contact-icon">
                  <FiMail />
                </div>

                <div>
                  <span>Email</span>

                  <a href="mailto:akshatharaik22@gmail.com">
                    akshatharaik22@gmail.com
                  </a>
                </div>

              </div>

              {/* Phone */}

              <div className="contact-item">

                <div className="contact-icon">
                  <FiPhone />
                </div>

                <div>
                  <span>Phone</span>

                  <a href="tel:+918867600776">
                    +91 8867600776
                  </a>
                </div>

              </div>

              {/* Location */}

              <div className="contact-item">

                <div className="contact-icon">
                  <FiMapPin />
                </div>

                <div>
                  <span>Location</span>

                  <p>Kasaragod, India</p>
                </div>

              </div>

            </div>

          </div>


          {/* Contact Form */}

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-group">

              <label htmlFor="name">
                Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>


            <div className="form-group">

              <label htmlFor="email">
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>


            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

            </div>


            <button type="submit">
              <FiSend />
              Send Message
            </button>

          </form>

        </div>

      </motion.div>

    </section>
  );
}

export default Contact;