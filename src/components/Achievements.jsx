import { motion } from "framer-motion";
import "../styles/achievements.css";

function Achievements() {
  const achievements = [
    {
      year: "2025",
      title: "Rajya Puraskar Award",
      organization: "The Bharat Scouts and Guides",
      description:
        "Received the Rajya Puraskar Award, recognizing achievement and participation in scouting activities.",
    },

    {
      year: "2025",
      title: "Oracle Cloud Infrastructure",
      organization: "Oracle",
      description:
        "Completed Oracle Cloud Infrastructure 2025 Foundations Associate certification.",
    },

    {
      year: "2025",
      title: "Cloud Computing & Distributed Systems",
      organization: "NPTEL",
      description:
        "Completed coursework covering cloud computing concepts, distributed systems, virtualization, and related technologies.",
    },
  ];

  return (
    <section className="achievements" id="achievements">

      <motion.div
        className="achievements-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <div className="achievements-heading">
          <p className="section-label">MILESTONES & RECOGNITION</p>

          <h2>Achievements</h2>

          <div className="heading-line"></div>

          <p className="achievements-intro">
            A collection of certifications, recognitions, and learning
            milestones that have contributed to my academic and professional
            growth.
          </p>
        </div>

        <div className="achievements-list">

          {achievements.map((achievement, index) => (
            <motion.div
              className="achievement-item"
              key={`${achievement.year}-${achievement.title}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >

              <div className="achievement-year">
                {achievement.year}
              </div>

              <div className="achievement-line"></div>

              <div className="achievement-content">

                <span>{achievement.organization}</span>

                <h3>{achievement.title}</h3>

                <p>{achievement.description}</p>

              </div>

            </motion.div>
          ))}

        </div>

      </motion.div>

    </section>
  );
}

export default Achievements;