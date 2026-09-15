import { motion } from "framer-motion";
import "../styles/achievements.css";

function Achievements() {
  const achievements = [
    {
      year:" Jul 2026",
      title:"Deloitte Australia-technology Job Simulation",
      organization:"Deloitte Australia",
      description:
        "Successfully completed the Deloitte Australia-technology Job Simulation, demonstrating proficiency in technology-related tasks and problem-solving.",

    },

    {
      year: " May 2026",
      title: "Oracle Cloud Infrastructure",
      organization: "Oracle",
      description:
        "Completed Oracle Cloud Infrastructure 2025 Foundations Associate certification.",
    },

    {
      year: " April 2026",
      title: "Cloud Computing & Distributed Systems",
      organization: "NPTEL",
      description:
        "Completed coursework covering cloud computing concepts, distributed systems, virtualization, and related technologies.",
    },
    {
      year:"March 2026",
      title:"Employability Skill Training Programme",
      organization:"Mahindra Pride Classroom,Naandi Foundation",
      description:
      "Completed a Six Days Employability Skill Training Programme organized by Mahindra Pride Classroom, Naandi Foundation."
    },
    {
      year:"February 2026",
      title:"Prompt Design in Vertex AI Skill Badge",
      organization:"Google Cloud",
      description:
      "Earned the Prompt Design in Vertex AI Skill Badge, demonstrating proficiency in designing effective prompts for AI applications using Google Cloud's Vertex AI platform."
    },
    {
      year:" March 2026",
      title:"Data Analysis, Data Lakes and History of Data",
      organization:"Department of MCA ,NMAMIT Nitte DU in associated with Thought Grains Solutions and Foundation, Udupi",
       description:
       "Completed a One-day Workshop on Data Analysis, Data Lakes and History of Data organized by the Department of MCA, NMAMIT Nitte DU in association with Thought Grains Solutions and Foundation, Udupi.",   
    },
    {
      year:"August 2025",
      title :"Microsoft Azure Learning journey",
      organization:"Microsoft",
      description:
      "Completed the Microsoft Azure Learning journey, gaining knowledge and skills in cloud computing, Azure services, and related technologies.",

    },
    
    {
      year: " March 2025",
      title: "Rajya Puraskar Award",
      organization: "The Bharat Scouts and Guides",
      description:
        "Received the Rajya Puraskar Award, recognizing achievement and participation in scouting activities.",
    },
    {
      year:"April 2024",
      title:"Linux and Virtualization Session",
      organization:"Google Developer Student Clubs, Vivekananda College of Arts, Science and Commerce, Puttur",
      description:
      "Actively participated in a session on Linux and virtualization, gaining exposure to advanced computing concepts and virtualization technologies."
    }
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