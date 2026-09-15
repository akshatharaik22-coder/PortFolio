# Personal Portfolio | Akshatha Rai K

A modern, responsive personal portfolio built with React and Vite to showcase my technical skills, software projects, research work, certifications, achievements, and professional profile.

## Live Website

**Portfolio:** https://port-folio-nu-ruddy.vercel.app/

---

## Overview

This project is my personal developer portfolio designed to present my academic background, technical skills, projects, research interests, certifications, achievements, and professional information in a structured and recruiter-friendly interface.

The portfolio includes:

- Professional introduction
- About section
- Technical skills
- Software and AI/ML projects
- Research work
- Achievements
- Certifications and courses
- Workshop and event activities
- Photography and visual work
- Resume access
- Contact information

The application follows a component-based React architecture, allowing each section to be developed and maintained independently.

---

## Objectives

The main objectives of this portfolio are to:

1. Build a professional online presence for software engineering and AI/ML opportunities.
2. Showcase practical software development projects.
3. Present academic research and technical interests.
4. Highlight certifications, workshops, awards, and achievements.
5. Provide recruiters with quick access to skills, projects, resume, and contact information.
6. Demonstrate modern frontend development using React, Vite, CSS, responsive design, and animations.
7. Maintain a clean and scalable project structure for future improvements.

---

## Key Features

### Professional Landing Section

Introduces my professional profile with clear navigation to the main sections of the portfolio.

### About Section

Provides information about my academic background, interests, technical focus, and career direction.

### Technical Skills

Skills are organized into categories to make the technical profile easy to understand.

Areas include:

- Programming Languages
- Frontend Development
- Backend Development
- Databases
- AI/ML
- Computer Vision
- Development Tools
- Core Computer Science Concepts

### Projects

The project section presents practical software and AI/ML projects with information about:

- Project objective
- Technologies used
- Key features
- Technical implementation
- Problem being addressed

The portfolio includes projects related to:

- Full-stack development
- Authentication and security
- Database-driven applications
- Machine learning
- Computer vision

### Research

The research section presents ongoing academic and technical research interests.

Current research work focuses on:

- Low-light image processing
- CLAHE-based image enhancement
- CNN-based obstacle detection
- Computer vision
- Assistive technology for visually impaired people
- Smartphone-based visual assistance

The research section is intended to present ongoing academic work rather than claim a completed production system.

### Achievements

The achievements section showcases:

- Awards
- Workshops
- Academic activities
- Participation certificates
- Professional activities
- Events and memorable experiences

The section uses an interactive image carousel to present achievement-related photographs and certificates.

### Certifications

A dedicated certification section presents completed courses, professional learning programs, and certification achievements.

Examples include:

- NPTEL Cloud Computing and Distributed Systems
- Deloitte Technology Job Simulation
- Professional learning programs
- Workshops and technical training

Certificates are displayed using an interactive carousel with the complete certificate image visible.

### Gallery

The gallery provides a visual collection of:

- Achievement photographs
- Workshop photographs
- Event photographs
- Certification images
- Personal photography and visual work

The gallery is responsive and supports navigation through previous/next controls and carousel indicators.

### Resume

The portfolio provides access to my current resume so recruiters can quickly review my complete professional profile.

### Contact

A dedicated contact section allows recruiters, collaborators, and visitors to connect with me.

---

## Technology Stack

### Frontend

- React
- Vite
- JavaScript
- HTML5
- CSS3

### UI and Animation

- Framer Motion
- React Icons
- Responsive CSS
- Component-based UI
- Interactive carousel components

### Development Tools

- Node.js
- npm
- Git
- GitHub
- Visual Studio Code

### Deployment

- Vercel

---

## Architecture

The application follows a modular React component architecture.

```text
portfolio/
│
├── public/
│   └── assets/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Project.jsx
│   │   ├── Research.jsx
│   │   ├── Achievements.jsx
│   │   ├── Gallery.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   │
│   ├── styles/
│   │   ├── gallery.css
│   │   └── component-specific styles
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md