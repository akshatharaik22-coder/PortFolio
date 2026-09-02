import { motion } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMysql,
  SiMongodb,
  SiTensorflow,
  SiOpencv,
  SiExpress,
  SiDjango,
  SiC,
} from "react-icons/si";

import "../styles/skills.css";

function Skills() {
  const skills = [
    { name: "C", icon: <SiC /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "TensorFlow", icon: <SiTensorflow /> },
    { name: "OpenCV", icon: <SiOpencv /> },
    { name: "Git", icon: <FaGitAlt /> },
  ];

  return (
    <section className="skills" id="skills">

      <motion.div
        className="skills-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <div className="skills-heading">
          <p className="section-label">MY TECHNICAL STACK</p>

          <h2>Skills</h2>

          <div className="heading-line"></div>

          <p className="skills-intro">
            Technologies and tools I use to build web applications,
            intelligent systems, and computer vision projects.
          </p>
        </div>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <motion.div
              className="skill-card"
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <div className="skill-icon">
                {skill.icon}
              </div>

              <span>{skill.name}</span>
            </motion.div>
          ))}

        </div>

      </motion.div>

    </section>
  );
}

export default Skills;