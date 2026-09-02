import { motion } from "framer-motion";
import "../styles/gallery.css";

function Gallery() {
  const galleryItems = [
    {
      title: "AadhaarVoteGuard",
      category: "Full Stack Project",
      image: "",
    },
    {
      title: "Low-Light Obstacle Detection",
      category: "AI & Computer Vision",
      image: "",
    },
    {
      title: "Signature Verification",
      category: "Machine Learning",
      image: "",
    },
    {
      title: "Research Work",
      category: "AI Research",
      image: "",
    },
    {
      title: "Certifications",
      category: "Professional Learning",
      image: "",
    },
    {
      title: "Achievements",
      category: "Recognition",
      image: "",
    },
  ];

  return (
    <section className="gallery" id="gallery">

      <motion.div
        className="gallery-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        {/* Heading */}

        <div className="gallery-heading">

          <p className="section-label">
            PROJECT SHOWCASE
          </p>

          <h2>Gallery</h2>

          <div className="heading-line"></div>

          <p className="gallery-intro">
            A visual showcase of my projects, research work,
            certifications, and professional achievements.
          </p>

        </div>

        {/* Gallery */}

        <div className="gallery-grid">

          {galleryItems.map((item, index) => (

            <motion.div
              className="gallery-card"
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >

              {item.image ? (

                <img
                  src={item.image}
                  alt={item.title}
                />

              ) : (

                <div className="gallery-placeholder">

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

              )}

              <div className="gallery-overlay">

                <p>{item.category}</p>

                <h3>{item.title}</h3>

              </div>

            </motion.div>

          ))}

        </div>

      </motion.div>

    </section>
  );
}

export default Gallery;