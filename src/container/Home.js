import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const roles = [
    "UI/UX Designer",
    "Frontend Developer",
    "Creative Technologist",
    "Digital Artist",
    "Mern stack Developer",
  ];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="background-elements">
        <div className="gradient-circle"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="content">
        <motion.div
          className="intro-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="greeting">Hello, I'm</span>
        </motion.div>

        <motion.h1
          className="main-headline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="first-name">Mujeeba</span>
          <span className="last-name">Noor</span>
        </motion.h1>

        <motion.div
          className="role-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRole}
              className="role-text"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              {roles[currentRole]}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="cta-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          
        </motion.div>
      </div>

      <div className="decorative-elements">
        <div className="floating-shapes">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="shape"
              animate={{
                y: [0, 20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          height: 100vh;
          min-height: 700px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          overflow: hidden;
          padding: 0 2rem;
        }

        .background-elements {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .gradient-circle {
          position: absolute;
          width: 80vw;
          height: 80vw;
          max-width: 800px;
          max-height: 800px;
          background: radial-gradient(
            circle,
            rgba(99, 102, 241, 0.15) 0%,
            rgba(0, 0, 0, 0) 70%
          );
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .grid-pattern {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(
              to right,
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px
            );
          background-size: 40px 40px;
          opacity: 0.3;
        }

        .content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .intro-text {
          margin-bottom: 1rem;
        }

        .greeting {
          font-size: 4.25rem;
          color: #a5b4fc;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .main-headline {
          font-size: 8rem;
          font-weight: 800;
          line-height: 1;
          margin: 0.5rem 0;
          color: white;
        }

        .first-name {
          display: inline-block;
          background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-right: 0.5rem;
        }

        .last-name {
          display: inline-block;
          color: #f3f4f6;
        }

        .role-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin: 1.5rem 0 3rem;
          height: 2.5rem;
        }

        .role-text {
          font-size: 2.5rem;
          font-weight: 600;
          color: #a5b4fc;
          position: relative;
        }

        .role-text::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.4s ease;
        }

        .role-text:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .cta-container {
          margin-top: 2rem;
        }

        .cta-button {
          position: relative;
          padding: 1rem 2.5rem;
          background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          font-size: 1.1rem;
          font-weight: 500;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(99, 102, 241, 0.3);
          z-index: 1;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 25px rgba(99, 102, 241, 0.4);
        }

        .button-hover-effect {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.7s ease;
          z-index: -1;
        }

        .cta-button:hover .button-hover-effect {
          left: 100%;
        }

        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
        }

        .shape {
          position: absolute;
          border-radius: 8px;
          background: rgba(165, 180, 252, 0.1);
          border: 1px solid rgba(165, 180, 252, 0.2);
        }

        .shape:nth-child(1) {
          width: 20px;
          height: 20px;
          top: 20%;
          left: 15%;
        }

        .shape:nth-child(2) {
          width: 30px;
          height: 30px;
          top: 60%;
          left: 10%;
        }

        .shape:nth-child(3) {
          width: 15px;
          height: 15px;
          top: 30%;
          right: 15%;
        }

        .shape:nth-child(4) {
          width: 25px;
          height: 25px;
          top: 70%;
          right: 20%;
        }

        .shape:nth-child(5) {
          width: 40px;
          height: 40px;
          bottom: 10%;
          right: 10%;
        }

        @media (max-width: 768px) {
          .hero {
            min-height: 600px;
          }

          .main-headline {
            font-size: 3.5rem;
          }

          .role-container {
            flex-direction: column;
            gap: 0.2rem;
            height: auto;
          }

          .role-text {
            font-size: 1.1rem;
          }

          .cta-button {
            padding: 0.8rem 2rem;
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
