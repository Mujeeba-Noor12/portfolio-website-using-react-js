
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Cube from "./Cube";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const About = () => {
  const [showParticles, setShowParticles] = useState(false);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowParticles(true);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);
  const skills = [
    { name: "UI/UX Design", level: 95 },
    { name: "Frontend Development", level: 90 },
    { name: "Motion Design", level: 85 },
    { name: "Brand Identity", level: 80 },
  ];

  return (
    <section id="about" className="about-section">
      {/* Decorative background elements */}
      <div className="about-background">
        <div className="floating-circle"></div>
        <div className="floating-dots"></div>
      </div>

      <div className="section-container">
        {/* Section title with animation */}
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About <span className="highlight">Me</span>
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h3
              className="about-subtitle"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Crafting <span className="accent">Digital Experiences</span> That
              Inspire
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              I'm a passionate designer and developer with over 5 years of
              experience creating beautiful, functional digital products. My
              approach combines aesthetic sensibility with technical expertise
              to deliver exceptional user experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I believe in designing with purpose and coding with passion. Every
              pixel and every line of code serves a specific function in
              creating memorable digital experiences.
            </motion.p>

            <motion.div
              className="skills-container"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {skills.map((skill, index) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <motion.div
                    className="skill-bar"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="profile-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* <div className="profile-image-wrapper">
              <div className="profile-image"></div>
              <div className="decorative-shape shape-1"></div>
              <div className="decorative-shape shape-2"></div>
              <div className="decorative-shape shape-3"></div>
            </div> */}
            {showParticles && (
              <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                  fullScreen: { enable: false }, // Disable fullscreen particles
                  detectRetina: true,
                  particles: {
                    number: {
                      value: 30, // Less number of particles
                      density: {
                        enable: true,
                        value_area: 200, // Smaller area for particles around the cube
                      },
                    },
                    color: {
                      value: "#ffffff", // Particle color
                    },
                    shape: {
                      type: "circle", // Particle shape
                    },
                    opacity: {
                      value: 0.5,
                      random: false,
                    },
                    size: {
                      value: 3,
                      random: true,
                    },
                    move: {
                      enable: true,
                      speed: 1.5,
                      direction: "none",
                      random: true,
                      straight: false,
                      out_mode: "bounce", // Keeps particles within container bounds
                      bounce: true,
                    },
                  },
                  interactivity: {
                    events: {
                      onHover: {
                        enable: true,
                        mode: "repulse", // Repulse effect on hover
                      },
                      onClick: {
                        enable: true,
                        mode: "push", // Create particles on click
                      },
                    },
                    modes: {
                      repulse: {
                        distance: 70,
                        duration: 0.4,
                      },
                      push: {
                        quantity: 2,
                      },
                    },
                  },
                }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            )}

            <Cube />
            {/* <motion.div
              className="experience-badge"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <span className="years">5+</span>
              <span className="label">Years Experience</span>
            </motion.div> */}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          height: 100vh;
          position: relative;
          padding: 8rem 2rem;
          background: linear-gradient(to bottom, #0f172a, #1e293b);
          overflow: hidden;
        }

        .about-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .floating-circle {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(
            circle,
            rgba(99, 102, 241, 0.1) 0%,
            rgba(0, 0, 0, 0) 70%
          );
          top: 20%;
          right: -200px;
          border-radius: 50%;
        }

        .floating-dots {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(
            circle,
            rgba(165, 180, 252, 0.15) 1px,
            transparent 1px
          );
          background-size: 20px 20px;
          opacity: 0.3;
        }

        .section-container {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 3.5rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 5rem;
          color: white;
        }

        .section-title .highlight {
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .about-content {
          display: flex;
          gap: 4rem;
          align-items: center;
        }

        .about-text {
          flex: 1;
          color: #e2e8f0;
        }

        .about-subtitle {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 2rem;
          color: white;
          line-height: 1.3;
        }

        .about-subtitle .accent {
          color: #a5b4fc;
        }

        .about-text p {
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
          line-height: 1.8;
          max-width: 600px;
        }

        .skills-container {
          margin-top: 2.5rem;
        }

        .skill-item {
          margin-bottom: 1.5rem;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        .skill-name {
          font-weight: 500;
          color: #a5b4fc;
        }

        .skill-percent {
          color: #818cf8;
          font-weight: 600;
        }

        .skill-bar {
          height: 6px;
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
          border-radius: 3px;
        }

        .profile-container {
          flex: 1;
          position: relative;
          display: flex;
          justify-content: center;
        }

        .profile-image-wrapper {
          position: relative;
          width: 350px;
          height: 350px;
        }

        .profile-image {
          position: relative;
          width: 100%;
          height: 100%;
          background-color: #334155;
          border-radius: 20px;
          z-index: 2;
          overflow: hidden;
          background-image: url("/profile-image.jpg");
          background-size: cover;
          background-position: center;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .decorative-shape {
          position: absolute;
          border-radius: 15px;
          border: 2px solid rgba(165, 180, 252, 0.3);
        }

        .shape-1 {
          width: 100px;
          height: 100px;
          top: -20px;
          left: -20px;
          z-index: 1;
        }

        .shape-2 {
          width: 60px;
          height: 60px;
          bottom: -30px;
          left: 50px;
          z-index: 1;
        }

        .shape-3 {
          width: 80px;
          height: 80px;
          top: 50%;
          right: -30px;
          z-index: 3;
        }

        .experience-badge {
          position: absolute;
          bottom: 40px;
          left: -30px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          padding: 1rem 1.5rem;
          border-radius: 15px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
          z-index: 4;
        }

        .years {
          font-size: 2rem;
          font-weight: 800;
          color: white;
          line-height: 1;
        }

        .label {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.9);
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        @media (max-width: 1024px) {
          .about-content {
            flex-direction: column;
            gap: 3rem;
          }

          .about-text {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .section-title {
            font-size: 2.8rem;
            margin-bottom: 3rem;
          }

          .about-subtitle {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 6rem 1.5rem;
          }

          .section-title {
            font-size: 2.2rem;
          }

          .about-subtitle {
            font-size: 1.5rem;
          }

          .profile-image-wrapper {
            width: 280px;
            height: 280px;
          }

          .experience-badge {
            padding: 0.8rem 1.2rem;
            bottom: 20px;
            left: -10px;
          }

          .years {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
