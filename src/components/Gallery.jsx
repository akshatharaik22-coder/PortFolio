import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import "../styles/gallery.css";

/* ========================================
   CERTIFICATION IMAGES
======================================== */

import Course1 from "../assets/gallery/Course1.jpg";
import Course2 from "../assets/gallery/Course2.jpg";
import Course3 from "../assets/gallery/Course3.jpg";
import NPTEL from "../assets/gallery/NPTEL.jpeg";
import oracle from "../assets/gallery/oracle.jpeg";
import deloitee from "../assets/gallery/deloitee.jpeg";


/* ========================================
   ACHIEVEMENT / ACTIVITY IMAGES
======================================== */

import Data_analysis from "../assets/gallery/Data_analysis.jpeg";
import linux from "../assets/gallery/linux.jpg";

import Naandi from "../assets/gallery/Naandi.jpeg";
import skill1 from "../assets/gallery/skill1.jpeg";
import skill2 from "../assets/gallery/skill2.jpeg";
import skill3 from "../assets/gallery/skill3.jpeg";
import skill4 from "../assets/gallery/skill4.jpeg";
import skill5 from "../assets/gallery/skill5.jpeg";
import skill6 from "../assets/gallery/skill6.jpeg";
import skill7 from "../assets/gallery/skill7.jpeg";
import skill8 from "../assets/gallery/skill8.jpeg";

import algorbit from "../assets/gallery/algorbit.jpeg";
import award from "../assets/gallery/award.jpeg";


function Gallery() {

  /* ========================================
     CAROUSEL STATES
  ======================================== */

  const [certificationIndex, setCertificationIndex] = useState(0);

  const [achievementIndex, setAchievementIndex] = useState(0);


  /* ========================================
     CERTIFICATIONS
  ======================================== */

  const certificationItems = [
    {
      title: "AINNOVATION 2025: Microsoft Azure Learning Challenge",
      category: "Certification",
      image: Course1,
    },

    {
      title: "AINNOVATION 2025: Microsoft AI Learning Challenge",
      category: "Certification",
      image: Course2,
    },

    {
      title: "AINNOVATION 2025: Applied AI Learning Challenge",
      category: "Certification",
      image: Course3,
    },

    {
      title: "Cloud Computing & Distributed Systems",
      category: "Certification",
      image: NPTEL,
    },

    {
      title: "Oracle Cloud Infrastructure",
      category: "Certification",
      image: oracle,
    },

    {
      title: "Deloitte Job Simulation",
      category: "Certification",
      image: deloitee,
    },
  ];


  /* ========================================
     ACHIEVEMENTS
     
     PHOTOS / ACTIVITIES FIRST
     CERTIFICATES / AWARDS AFTER PHOTOS
  ======================================== */

  const achievementItems = [

    

    /* -------- WORKSHOP ACTIVITIES -------- */


    {
      title: "Employability Skill Training Activity 1",
      category: "Workshop Activity",
      image: skill1,
    },

    {
      title: "Employability Skill Training Activity 2",
      category: "Workshop Activity",
      image: skill2,
    },

    {
      title: "Employability Skill Training Activity 3",
      category: "Workshop Activity",
      image: skill3,
    },

    {
      title: "Employability Skill Training Activity 4",
      category: "Workshop Activity",
      image: skill4,
    },

    {
      title: "Employability Skill Training Activity 5",
      category: "Workshop Activity",
      image: skill5,
    },

    {
      title: "Employability Skill Training Activity 6",
      category: "Workshop Activity",
      image: skill6,
    },

    {
      title: "Employability Skill Training Activity 7",
      category: "Workshop Activity",
      image: skill7,
    },

    {
      title: "Employability Skill Training Activity 8",
      category: "Workshop Activity",
      image: skill8,
    },
    {
      title: "Employability Skill Training Programme",
      category: "Workshop & Activities",
      image: Naandi,
    },
    {
      title: "Data Analysis, Data Lakes and History of Data",
      category: "Workshop",
      image: Data_analysis,
    },


    {
      title: "Linux and Virtualization Session",
      category: "Workshop",
      image: linux,
    },



    /* -------- OTHER ACTIVITIES -------- */

    {
      title: "Placement Excellence Workshop",
      category: "Workshop",
      image: algorbit,
    },


    /* ========================================
       ACHIEVEMENT CERTIFICATES / AWARDS
       KEEP THESE AFTER ALL PHOTOS
    ======================================== */

    {
      title: "Rajyapuraskar Award",
      category: "Award",
      image: award,
    },

  ];


  /* ========================================
     CERTIFICATION NAVIGATION
  ======================================== */

  const nextCertification = () => {

    setCertificationIndex((currentIndex) =>
      currentIndex === certificationItems.length - 1
        ? 0
        : currentIndex + 1
    );

  };


  const previousCertification = () => {

    setCertificationIndex((currentIndex) =>
      currentIndex === 0
        ? certificationItems.length - 1
        : currentIndex - 1
    );

  };


  /* ========================================
     ACHIEVEMENT NAVIGATION
  ======================================== */

  const nextAchievement = () => {

    setAchievementIndex((currentIndex) =>
      currentIndex === achievementItems.length - 1
        ? 0
        : currentIndex + 1
    );

  };


  const previousAchievement = () => {

    setAchievementIndex((currentIndex) =>
      currentIndex === 0
        ? achievementItems.length - 1
        : currentIndex - 1
    );

  };


  return (

    <section
      className="gallery"
      id="gallery"
    >

      <motion.div
        className="gallery-container"

        initial={{
          opacity: 0,
          y: 50,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.8,
        }}

        viewport={{
          once: true,
        }}
      >


        {/* ========================================
           MAIN HEADING
        ======================================== */}

        <div className="gallery-heading">

          <p className="section-label">
            PROFESSIONAL JOURNEY
          </p>

          <h2>
            Gallery
          </h2>

          <div className="heading-line"></div>

          <p className="gallery-intro">
            A collection of my certifications, achievements,
            workshops, activities, and professional experiences.
          </p>

        </div>


        {/* ========================================
           CERTIFICATIONS SECTION
        ======================================== */}

        <div
          className="gallery-section"
          id="certifications"
        >

          <div className="gallery-subheading">

            <p className="section-label">
              PROFESSIONAL LEARNING
            </p>

            <h3>
              Certifications
            </h3>

            <p>
              Certifications and courses completed as part of my
              academic and professional learning journey.
            </p>

          </div>


          {/* CERTIFICATION CAROUSEL */}

          <div className="gallery-carousel">

            <button
              className="gallery-arrow gallery-prev"
              onClick={previousCertification}
              aria-label="Previous certification"
            >
              <FiChevronLeft />
            </button>


            <motion.div
              className="gallery-slide"

              key={certificationIndex}

              initial={{
                opacity: 0,
                x: 30,
              }}

              animate={{
                opacity: 1,
                x: 0,
              }}

              transition={{
                duration: 0.4,
              }}
            >

              <img
                src={
                  certificationItems[certificationIndex].image
                }

                alt={
                  certificationItems[certificationIndex].title
                }

                className="gallery-slide-image"
              />


              <div className="gallery-slide-info">

                <p>
                  {
                    certificationItems[certificationIndex]
                      .category
                  }
                </p>

                <h4>
                  {
                    certificationItems[certificationIndex]
                      .title
                  }
                </h4>

              </div>

            </motion.div>


            <button
              className="gallery-arrow gallery-next"
              onClick={nextCertification}
              aria-label="Next certification"
            >
              <FiChevronRight />
            </button>

          </div>


          {/* CERTIFICATION DOTS */}

          <div className="gallery-dots">

            {certificationItems.map((item, index) => (

              <button
                key={item.title}

                className={
                  index === certificationIndex
                    ? "gallery-dot active"
                    : "gallery-dot"
                }

                onClick={() =>
                  setCertificationIndex(index)
                }

                aria-label={`Show ${item.title}`}
              />

            ))}

          </div>

        </div>


        {/* ========================================
           ACHIEVEMENTS SECTION
        ======================================== */}

        <div
          className="gallery-section achievements-gallery"
          id="gallery-achievements"
        >

          <div className="gallery-subheading">

            <p className="section-label">
              RECOGNITION & ACTIVITIES
            </p>

            <h3>
              Achievements
            </h3>

            <p>
              A collection of awards, workshops, activities,
              events, and memorable experiences.
            </p>

          </div>


          {/* ACHIEVEMENT CAROUSEL */}

          <div className="gallery-carousel">

            <button
              className="gallery-arrow gallery-prev"
              onClick={previousAchievement}
              aria-label="Previous achievement"
            >
              <FiChevronLeft />
            </button>


            <motion.div
              className="gallery-slide"

              key={achievementIndex}

              initial={{
                opacity: 0,
                x: 30,
              }}

              animate={{
                opacity: 1,
                x: 0,
              }}

              transition={{
                duration: 0.4,
              }}
            >

              <img
                src={
                  achievementItems[achievementIndex].image
                }

                alt={
                  achievementItems[achievementIndex].title
                }

                className="gallery-slide-image"
              />


              <div className="gallery-slide-info">

                <p>
                  {
                    achievementItems[achievementIndex]
                      .category
                  }
                </p>

                <h4>
                  {
                    achievementItems[achievementIndex]
                      .title
                  }
                </h4>

              </div>

            </motion.div>


            <button
              className="gallery-arrow gallery-next"
              onClick={nextAchievement}
              aria-label="Next achievement"
            >
              <FiChevronRight />
            </button>

          </div>


          {/* ACHIEVEMENT DOTS */}

          <div className="gallery-dots">

            {achievementItems.map((item, index) => (

              <button
                key={item.title}

                className={
                  index === achievementIndex
                    ? "gallery-dot active"
                    : "gallery-dot"
                }

                onClick={() =>
                  setAchievementIndex(index)
                }

                aria-label={`Show ${item.title}`}
              />

            ))}

          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default Gallery;