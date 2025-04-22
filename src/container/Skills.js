// // // import React from "react";
// // // import TextShpere from "./TextShpere";
// // // import "./SkiLs.css";

// // // const Skills = () => {
// // //   return (
// // // //     <div class="skills-page">
// // // //   <div class="skills-text-section">
// // // //     <h2 class="skills-heading">
// // // //       {/* <code>&lt;h1&gt;</code> Skills & Experience <code>&lt;/h1&gt;</code> */}
// // // //      Skills & Experience

// // // //     </h2>
// // // //     <p class="skills-description">
// // // //       Expert in front-end development including technologies like
// // // //       <strong>HTML5, CSS3, JavaScript, jQuery, Angular2, React, TypeScript, Jasmine, Bootstrap, Sass, Git</strong>, etc.
// // // //     </p>
// // // //     <p class="skills">
// // // //       I’m not a designer but I have a good sense of aesthetics, and experience in responsive, mobile-first web design.
// // // //       I put special effort into optimizing my code and providing the best user experience.
// // // //     </p>
// // // //     <p class="skills">
// // // //       Visit my <a href="#">LinkedIn</a> profile for more details, or check out my
// // // //       <a href="#">CV</a> or some of my blog <a href="#">posts</a>.
// // // //     </p>
// // // //   </div>

// // // //   <div class="skills-cloud">

// // // //   <TextShpere />
// // // //   </div>
// // // // </div>

// // //     <div className="skills-page">
// // //       <div className="skills-text-section">
// // //         <h2 className="skills-heading">Skills & Experience</h2>

// // //         <p className="skills-description">
// // //           I have cultivated a diverse skill set that integrates both technical and interpersonal strengths. My web development internship at CodeCraft provided hands-on experience with technologies, including:
// // //           <span className="small-para">
// // //             <span>JavaScript</span>,
// // //             <span> Bootstrap</span>,
// // //             <span> HTML</span>,
// // //             <span> CSS</span>,
// // //             <span> React.js</span>,
// // //             <span> Git</span>.
// // //           </span>
// // //         </p>

// // //         <p className="skills">
// // //           In addition to my technical skills, I hold certifications in graphic design and data science, enhancing my proficiency in visual communication and data analysis. I excel in team environments, leveraging strong communication and collaboration skills to contribute creatively and precisely to projects.
// // //         </p>

// // //         <p className="skills">
// // //           I am proficient in tools such as WordPress and MS Office, which support effective project management and complement my technical expertise. For more details about my professional journey, feel free to visit my LinkedIn profile <a href="">link</a>.
// // //         </p>
// // //       </div>

// // //       <div className="skills-cloud">

// // //         <TextShpere /> </div>

// // //     </div>
// // //   );
// // // };

// // // export default Skills;
// // import { motion } from "framer-motion";

// // const SkillsSection = () => {
// //   const skillsCategories = [
// //     {
// //       title: "Design Skills",
// //       skills: [
// //         { name: "UI/UX Design", level: 95, color: "#8b5cf6" },
// //         { name: "Visual Design", level: 90, color: "#7c3aed" },
// //         { name: "Prototyping", level: 85, color: "#6d28d9" },
// //         { name: "Design Systems", level: 80, color: "#5b21b6" },
// //       ],
// //     },
// //     {
// //       title: "Development Skills",
// //       skills: [
// //         { name: "React", level: 90, color: "#6366f1" },
// //         { name: "JavaScript", level: 85, color: "#4f46e5" },
// //         { name: "CSS/SCSS", level: 95, color: "#4338ca" },
// //         { name: "Node.js", level: 75, color: "#3730a3" },
// //       ],
// //     },
// //     {
// //       title: "Other Skills",
// //       skills: [
// //         { name: "Animation", level: 85, color: "#ec4899" },
// //         { name: "3D Modeling", level: 70, color: "#db2777" },
// //         { name: "Photography", level: 80, color: "#be185d" },
// //         { name: "Video Editing", level: 75, color: "#9d174d" },
// //       ],
// //     },
// //   ];

// //   return (
// //     <section id="skills" className="skills-section">
// //       {/* Decorative background elements */}
// //       <div className="skills-background">
// //         <div className="floating-blob"></div>
// //         <div className="grid-pattern"></div>
// //       </div>

// //       <div className="section-container">
// //         {/* Section title with animation */}
// //         <motion.h2
// //           className="section-title"
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.6 }}
// //         >
// //           My <span className="highlight">Skills</span>
// //         </motion.h2>

// //         <motion.p
// //           className="section-subtitle"
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.6, delay: 0.2 }}
// //         >
// //           Technologies and tools I've mastered to create exceptional digital
// //           experiences
// //         </motion.p>

// //         <div className="skills-categories">
// //           {skillsCategories.map((category, catIndex) => (
// //             <motion.div
// //               key={category.title}
// //               className="skill-category"
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.6, delay: 0.3 + catIndex * 0.1 }}
// //             >
// //               <h3 className="category-title">{category.title}</h3>

// //               <div className="skills-list">
// //                 {category.skills.map((skill, skillIndex) => (
// //                   <motion.div
// //                     key={skill.name}
// //                     className="skill-item"
// //                     initial={{ opacity: 0, x: -20 }}
// //                     whileInView={{ opacity: 1, x: 0 }}
// //                     viewport={{ once: true }}
// //                     transition={{
// //                       duration: 0.6,
// //                       delay: 0.4 + skillIndex * 0.1,
// //                     }}
// //                   >
// //                     <div className="skill-header">
// //                       <span className="skill-name">{skill.name}</span>
// //                       <span
// //                         className="skill-percent"
// //                         style={{ color: skill.color }}
// //                       >
// //                         {skill.level}%
// //                       </span>
// //                     </div>

// //                     <div className="skill-bar-bg">
// //                       <motion.div
// //                         className="skill-bar-fill"
// //                         initial={{ width: 0 }}
// //                         whileInView={{ width: `${skill.level}%` }}
// //                         viewport={{ once: true }}
// //                         transition={{
// //                           duration: 1,
// //                           delay: 0.5 + skillIndex * 0.1,
// //                         }}
// //                         style={{ backgroundColor: skill.color }}
// //                       />
// //                     </div>
// //                   </motion.div>
// //                 ))}
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>

// //         {/* Tools/Technologies showcase */}
// //         <motion.div
// //           className="tools-section"
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.6, delay: 0.6 }}
// //         >
// //           <h4 className="tools-title">Technologies I Work With</h4>

// //           <div className="tools-grid">
// //             {[
// //               "Figma",
// //               "Adobe XD",
// //               "Sketch",
// //               "React",
// //               "Next.js",
// //               "Vue",
// //               "Node.js",
// //               "Express",
// //               "MongoDB",
// //               "GSAP",
// //               "Framer Motion",
// //               "Three.js",
// //             ].map((tool, index) => (
// //               <motion.div
// //                 key={tool}
// //                 className="tool-item"
// //                 whileHover={{ y: -5 }}
// //                 initial={{ opacity: 0, scale: 0.9 }}
// //                 whileInView={{ opacity: 1, scale: 1 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
// //               >
// //                 <div className="tool-icon">
// //                   {/* Icon would go here */}
// //                   {tool.charAt(0)}
// //                 </div>
// //                 <span className="tool-name">{tool}</span>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </motion.div>
// //       </div>

// //       <style jsx>{`
// //         .skills-section {
// //           position: relative;
// //           padding: 8rem 2rem;
// //           background: linear-gradient(to bottom, #1e293b, #0f172a);
// //           overflow: hidden;
// //         }

// //         .skills-background {
// //           position: absolute;
// //           top: 0;
// //           left: 0;
// //           width: 100%;
// //           height: 100%;
// //           z-index: 0;
// //         }

// //         .floating-blob {
// //           position: absolute;
// //           width: 800px;
// //           height: 800px;
// //           background: radial-gradient(
// //             circle,
// //             rgba(99, 102, 241, 0.08) 0%,
// //             rgba(0, 0, 0, 0) 70%
// //           );
// //           top: 50%;
// //           left: -300px;
// //           border-radius: 50%;
// //         }

// //         .grid-pattern {
// //           position: absolute;
// //           width: 100%;
// //           height: 100%;
// //           background-image: linear-gradient(
// //               to right,
// //               rgba(165, 180, 252, 0.05) 1px,
// //               transparent 1px
// //             ),
// //             linear-gradient(
// //               to bottom,
// //               rgba(165, 180, 252, 0.05) 1px,
// //               transparent 1px
// //             );
// //           background-size: 30px 30px;
// //           opacity: 0.5;
// //         }

// //         .section-container {
// //           position: relative;
// //           z-index: 2;
// //           max-width: 1200px;
// //           margin: 0 auto;
// //         }

// //         .section-title {
// //           font-size: 3.5rem;
// //           font-weight: 800;
// //           text-align: center;
// //           margin-bottom: 1rem;
// //           color: white;
// //         }

// //         .section-title .highlight {
// //           background: linear-gradient(90deg, #6366f1, #8b5cf6);
// //           -webkit-background-clip: text;
// //           background-clip: text;
// //           color: transparent;
// //         }

// //         .section-subtitle {
// //           text-align: center;
// //           color: #a5b4fc;
// //           font-size: 1.2rem;
// //           max-width: 700px;
// //           margin: 0 auto 4rem;
// //           line-height: 1.6;
// //         }

// //         .skills-categories {
// //           display: grid;
// //           grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
// //           gap: 2rem;
// //           margin-bottom: 4rem;
// //         }

// //         .skill-category {
// //           background: rgba(15, 23, 42, 0.6);
// //           border-radius: 20px;
// //           padding: 2rem;
// //           backdrop-filter: blur(10px);
// //           border: 1px solid rgba(165, 180, 252, 0.1);
// //           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
// //         }

// //         .category-title {
// //           font-size: 1.5rem;
// //           font-weight: 700;
// //           margin-bottom: 1.5rem;
// //           color: white;
// //           position: relative;
// //           padding-bottom: 0.5rem;
// //         }

// //         .category-title::after {
// //           content: "";
// //           position: absolute;
// //           bottom: 0;
// //           left: 0;
// //           width: 50px;
// //           height: 3px;
// //           background: linear-gradient(90deg, #6366f1, #8b5cf6);
// //           border-radius: 3px;
// //         }

// //         .skills-list {
// //           display: flex;
// //           flex-direction: column;
// //           gap: 1.5rem;
// //         }

// //         .skill-item {
// //           width: 100%;
// //         }

// //         .skill-header {
// //           display: flex;
// //           justify-content: space-between;
// //           margin-bottom: 0.5rem;
// //         }

// //         .skill-name {
// //           color: #e2e8f0;
// //           font-weight: 500;
// //         }

// //         .skill-percent {
// //           font-weight: 600;
// //         }

// //         .skill-bar-bg {
// //           width: 100%;
// //           height: 8px;
// //           background: rgba(165, 180, 252, 0.1);
// //           border-radius: 4px;
// //           overflow: hidden;
// //         }

// //         .skill-bar-fill {
// //           height: 100%;
// //           border-radius: 4px;
// //           box-shadow: 0 2px 10px rgba(99, 102, 241, 0.3);
// //         }

// //         .tools-section {
// //           margin-top: 4rem;
// //         }

// //         .tools-title {
// //           text-align: center;
// //           font-size: 1.2rem;
// //           color: #a5b4fc;
// //           margin-bottom: 2rem;
// //           font-weight: 500;
// //           letter-spacing: 1px;
// //         }

// //         .tools-grid {
// //           display: grid;
// //           grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
// //           gap: 1.5rem;
// //           max-width: 800px;
// //           margin: 0 auto;
// //         }

// //         .tool-item {
// //           background: rgba(15, 23, 42, 0.6);
// //           border-radius: 12px;
// //           padding: 1.2rem;
// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //           gap: 0.8rem;
// //           transition: transform 0.3s, box-shadow 0.3s;
// //           border: 1px solid rgba(165, 180, 252, 0.1);
// //         }

// //         .tool-icon {
// //           width: 50px;
// //           height: 50px;
// //           background: linear-gradient(135deg, #6366f1, #8b5cf6);
// //           border-radius: 50%;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           color: white;
// //           font-size: 1.5rem;
// //           font-weight: 700;
// //         }

// //         .tool-name {
// //           color: #e2e8f0;
// //           font-size: 0.9rem;
// //           font-weight: 500;
// //         }

// //         @media (max-width: 1024px) {
// //           .skills-categories {
// //             grid-template-columns: 1fr;
// //           }

// //           .section-title {
// //             font-size: 2.8rem;
// //           }
// //         }

// //         @media (max-width: 768px) {
// //           .skills-section {
// //             padding: 6rem 1.5rem;
// //           }

// //           .section-title {
// //             font-size: 2.2rem;
// //           }

// //           .section-subtitle {
// //             font-size: 1rem;
// //             margin-bottom: 3rem;
// //           }

// //           .skill-category {
// //             padding: 1.5rem;
// //           }

// //           .tools-grid {
// //             grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
// //             gap: 1rem;
// //           }
// //         }
// //       `}</style>
// //     </section>
// //   );
// // };

// // export default SkillsSection;
// import { motion } from "framer-motion";

// const SkillsSection = () => {
//   const skills = [
//     { name: "UI/UX Design", level: 95, color: "#8b5cf6" },
//     { name: "React", level: 90, color: "#6366f1" },
//     { name: "JavaScript", level: 85, color: "#f59e0b" },
//     { name: "Figma", level: 92, color: "#ec4899" },
//     { name: "CSS/SCSS", level: 95, color: "#10b981" },
//     { name: "Animation", level: 88, color: "#3b82f6" },
//   ];

//   return (
//     <section id="skills" className="skills-section">
//       {/* Decorative background elements */}
//       <div className="skills-background">
//         <div className="floating-shapes">
//           {[...Array(6)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="shape"
//               animate={{
//                 y: [0, 20, 0],
//                 rotate: [0, 5, 0],
//               }}
//               transition={{
//                 duration: 8 + Math.random() * 4,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       <div className="section-container">
//         <motion.h2
//           className="section-title"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           My <span className="highlight">Expertise</span>
//         </motion.h2>

//         <motion.p
//           className="section-subtitle"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           Skills that help me create exceptional digital experiences
//         </motion.p>

//         <div className="skills-grid">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={skill.name}
//               className="skill-card"
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{ y: -10 }}
//             >
//               <div className="skill-visual">
//                 <svg className="progress-ring" viewBox="0 0 100 100">
//                   <circle
//                     className="progress-ring-circle-bg"
//                     cx="50"
//                     cy="50"
//                     r="40"
//                     fill="transparent"
//                     stroke="#e2e8f0"
//                     strokeWidth="6"
//                   />
//                   <motion.circle
//                     className="progress-ring-circle"
//                     cx="50"
//                     cy="50"
//                     r="40"
//                     fill="transparent"
//                     stroke={skill.color}
//                     strokeWidth="6"
//                     strokeLinecap="round"
//                     strokeDasharray="251.2"
//                     strokeDashoffset="251.2"
//                     initial={{ strokeDashoffset: 251.2 }}
//                     whileInView={{
//                       strokeDashoffset: 251.2 - (251.2 * skill.level) / 100,
//                     }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 1.5, delay: index * 0.1 }}
//                   />
//                 </svg>
//                 <div className="skill-percent" style={{ color: skill.color }}>
//                   {skill.level}%
//                 </div>
//               </div>
//               <h3 className="skill-name">{skill.name}</h3>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         .skills-section {
//           position: relative;
//           padding: 8rem 2rem;
//           background: linear-gradient(to bottom, #1e293b, #0f172a);
//           overflow: hidden;
//         }

//         .skills-background {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           z-index: 0;
//         }

//         .floating-shapes {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           pointer-events: none;
//         }

//         .shape {
//           position: absolute;
//           border-radius: 50%;
//           background: rgba(165, 180, 252, 0.1);
//           border: 1px solid rgba(165, 180, 252, 0.2);
//         }

//         .shape:nth-child(1) {
//           width: 20px;
//           height: 20px;
//           top: 20%;
//           left: 10%;
//         }

//         .shape:nth-child(2) {
//           width: 30px;
//           height: 30px;
//           top: 60%;
//           left: 15%;
//         }

//         .shape:nth-child(3) {
//           width: 15px;
//           height: 15px;
//           top: 30%;
//           right: 10%;
//         }

//         .shape:nth-child(4) {
//           width: 25px;
//           height: 25px;
//           top: 70%;
//           right: 15%;
//         }

//         .shape:nth-child(5) {
//           width: 40px;
//           height: 40px;
//           bottom: 10%;
//           left: 20%;
//         }

//         .shape:nth-child(6) {
//           width: 35px;
//           height: 35px;
//           bottom: 20%;
//           right: 20%;
//         }

//         .section-container {
//           position: relative;
//           z-index: 2;
//           max-width: 1200px;
//           margin: 0 auto;
//         }

//         .section-title {
//           font-size: 3.5rem;
//           font-weight: 800;
//           text-align: center;
//           margin-bottom: 1rem;
//           color: white;
//         }

//         .section-title .highlight {
//           background: linear-gradient(90deg, #6366f1, #8b5cf6);
//           -webkit-background-clip: text;
//           background-clip: text;
//           color: transparent;
//         }

//         .section-subtitle {
//           text-align: center;
//           color: #a5b4fc;
//           font-size: 1.2rem;
//           max-width: 600px;
//           margin: 0 auto 4rem;
//           line-height: 1.6;
//         }

//         .skills-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//           gap: 2rem;
//           max-width: 900px;
//           margin: 0 auto;
//         }

//         .skill-card {
//           background: rgba(15, 23, 42, 0.6);
//           border-radius: 20px;
//           padding: 2rem;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 1.5rem;
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(165, 180, 252, 0.1);
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
//           transition: transform 0.3s, box-shadow 0.3s;
//         }

//         .skill-visual {
//           position: relative;
//           width: 120px;
//           height: 120px;
//         }

//         .progress-ring {
//           width: 100%;
//           height: 100%;
//         }

//         .progress-ring-circle {
//           transform: rotate(-90deg);
//           transform-origin: 50% 50%;
//         }

//         .skill-percent {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           font-size: 1.8rem;
//           font-weight: 700;
//         }

//         .skill-name {
//           font-size: 1.2rem;
//           font-weight: 600;
//           color: white;
//           text-align: center;
//         }

//         @media (max-width: 768px) {
//           .skills-section {
//             padding: 6rem 1.5rem;
//           }

//           .section-title {
//             font-size: 2.5rem;
//           }

//           .skills-grid {
//             grid-template-columns: repeat(2, 1fr);
//             gap: 1.5rem;
//           }

//           .skill-card {
//             padding: 1.5rem;
//           }

//           .skill-visual {
//             width: 100px;
//             height: 100px;
//           }

//           .skill-percent {
//             font-size: 1.5rem;
//           }
//         }

//         @media (max-width: 480px) {
//           .skills-grid {
//             grid-template-columns: 1fr;
//             max-width: 300px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default SkillsSection;
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const SkillsSection = () => {
  const skills = [
    { name: "UI/UX Design", level: 95, color: "#8b5cf6", icon: "🎨" },
    { name: "React", level: 90, color: "#61dafb", icon: "⚛️" },
    { name: "JavaScript", level: 88, color: "#f0db4f", icon: "📜" },
    { name: "Figma", level: 92, color: "#a259ff", icon: "✏️" },
    { name: "Animation", level: 85, color: "#ec4899", icon: "🎬" },
    { name: "Node.js", level: 80, color: "#68a063", icon: "🖥️" },
  ];

  const [selectedSkill, setSelectedSkill] = useState(skills[0]);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    });
  }, [selectedSkill]);

  return (
    <section id="skills" className="skills-section">
      {/* Animated gradient background */}
      <div className="dynamic-gradient">
        <div className="floating-shapes">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="shape"
              animate={{
                y: [0, 40, 0],
                rotate: [0, 180, 360],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My <span className="highlight">Superpowers</span>
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Cutting-edge skills that deliver exceptional results
        </motion.p>

        <div className="skills-display">
          {/* Animated Skill Visualization */}
          <motion.div
            className="skill-visualization"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="skill-orb"
              style={{
                backgroundColor: selectedSkill.color,
                boxShadow: `0 0 40px ${selectedSkill.color}`,
              }}
            >
              <motion.div
                className="orb-glow"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 0.9, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="orb-icon">{selectedSkill.icon}</span>
            </div>

            <div className="orb-rings">
              {[1, 2, 3].map((ring) => (
                <motion.div
                  key={ring}
                  className="ring"
                  style={{ borderColor: selectedSkill.color }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4 + ring,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Skill Details */}
          <motion.div
            className="skill-details"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
          >
            <div className="skill-meta">
              <span className="skill-icon">{selectedSkill.icon}</span>
              <h3 className="skill-name">{selectedSkill.name}</h3>
            </div>

            <div className="skill-level">
              <div className="level-bar">
                <motion.div
                  className="level-fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${selectedSkill.level}%` }}
                  transition={{ duration: 1, delay: 0.3 }}
                  style={{
                    backgroundColor: selectedSkill.color,
                    boxShadow: `0 0 15px ${selectedSkill.color}`,
                  }}
                />
              </div>
              <span className="level-percent">{selectedSkill.level}%</span>
            </div>

            <p className="skill-description">
              {getSkillDescription(selectedSkill.name)}
            </p>

            <div className="skill-stats">
              <div className="stat">
                <div
                  className="stat-value"
                  style={{ color: selectedSkill.color }}
                >
                  {Math.floor(selectedSkill.level / 10) * 10}+
                </div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat">
                <div
                  className="stat-value"
                  style={{ color: selectedSkill.color }}
                >
                  {Math.floor(selectedSkill.level / 5)}+
                </div>
                <div className="stat-label">Years</div>
              </div>
              <div className="stat">
                <div
                  className="stat-value"
                  style={{ color: selectedSkill.color }}
                >
                  {Math.floor(selectedSkill.level / 3) * 5}%
                </div>
                <div className="stat-label">Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skill Selector */}
        <div className="skill-selector">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className={`skill-chip ${
                selectedSkill.name === skill.name ? "active" : ""
              }`}
              onClick={() => setSelectedSkill(skill)}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 0 20px ${skill.color}`,
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                borderColor: skill.color,
                backgroundColor:
                  selectedSkill.name === skill.name
                    ? `${skill.color}20`
                    : "transparent",
              }}
            >
              <span className="chip-icon">{skill.icon}</span>
              <span className="chip-name">{skill.name}</span>
              <motion.div
                className="chip-level"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                style={{ backgroundColor: skill.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills-section {
          position: relative;
          padding: 10rem 2rem;
          overflow: hidden;
          background: #0f172a;
        }

        .dynamic-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(15, 23, 42, 0.9) 0%,
            rgba(99, 102, 241, 0.2) 50%,
            rgba(15, 23, 42, 0.9) 100%
          );
          z-index: 0;
          animation: gradientShift 15s ease infinite;
          background-size: 200% 200%;
        }

        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(165, 180, 252, 0.3);
        }

        .shape:nth-child(1) {
          width: 20px;
          height: 20px;
          top: 10%;
          left: 10%;
        }

        .shape:nth-child(2) {
          width: 40px;
          height: 40px;
          top: 60%;
          left: 15%;
        }

        .shape:nth-child(3) {
          width: 30px;
          height: 30px;
          top: 30%;
          right: 10%;
        }

        .shape:nth-child(4) {
          width: 50px;
          height: 50px;
          top: 70%;
          right: 15%;
        }

        .shape:nth-child(5) {
          width: 25px;
          height: 25px;
          bottom: 10%;
          left: 20%;
        }

        .shape:nth-child(6) {
          width: 35px;
          height: 35px;
          bottom: 20%;
          right: 20%;
        }

        .shape:nth-child(7) {
          width: 45px;
          height: 45px;
          top: 20%;
          left: 50%;
        }

        .shape:nth-child(8) {
          width: 15px;
          height: 15px;
          bottom: 30%;
          right: 30%;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .section-container {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 4rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 0.2rem;
          color: white;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .section-title .highlight {
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .section-subtitle {
          text-align: center;
          color: #a5b4fc;
          font-size: 1.3rem;
          max-width: 700px;
          margin: 0 auto 5rem;
          line-height: 1.6;
        }

        .skills-display {
          display: flex;
          align-items: center;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .skill-visualization {
          flex: 1;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .skill-orb {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
          transition: all 0.5s ease;
        }

        .orb-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: inherit;
          filter: blur(20px);
          z-index: 1;
        }

        .orb-icon {
          font-size: 4rem;
          z-index: 3;
        }

        .orb-rings {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        .ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 1px solid;
        }

        .ring:nth-child(1) {
          width: 250px;
          height: 250px;
        }

        .ring:nth-child(2) {
          width: 350px;
          height: 350px;
        }

        .ring:nth-child(3) {
          width: 450px;
          height: 450px;
        }

        .skill-details {
          flex: 1;
          padding: 2rem;
          background: rgba(15, 23, 42, 0.6);
          border-radius: 20px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(165, 180, 252, 0.1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .skill-meta {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .skill-icon {
          font-size: 2.5rem;
        }

        .skill-name {
          font-size: 2rem;
          font-weight: 700;
          color: white;
          margin: 0;
        }

        .skill-level {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .level-bar {
          flex: 1;
          height: 10px;
          background: rgba(165, 180, 252, 0.1);
          border-radius: 5px;
          overflow: hidden;
        }

        .level-fill {
          height: 100%;
          border-radius: 5px;
        }

        .level-percent {
          font-size: 1.2rem;
          font-weight: 700;
          color: white;
          min-width: 50px;
          text-align: right;
        }

        .skill-description {
          color: #e2e8f0;
          font-size: 1.1rem;
          line-height: 1.8;
          margin: 0 0 2rem;
        }

        .skill-stats {
          display: flex;
          gap: 2rem;
          margin-top: 2rem;
        }

        .stat {
          text-align: center;
          flex: 1;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: #a5b4fc;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .skill-selector {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }

        .skill-chip {
          padding: 0.8rem 1.5rem;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid;
          position: relative;
          overflow: hidden;
        }

        .skill-chip.active {
          box-shadow: 0 0 15px currentColor;
        }

        .chip-icon {
          font-size: 1.2rem;
          z-index: 2;
        }

        .chip-name {
          font-weight: 600;
          color: white;
          z-index: 2;
        }

        .chip-level {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 100%;
          opacity: 0.1;
          z-index: 1;
          transition: width 0.6s ease;
        }

        @media (max-width: 1200px) {
          .skills-display {
            flex-direction: column;
          }

          .skill-visualization {
            height: 300px;
            margin-bottom: 3rem;
          }
        }

        @media (max-width: 768px) {
          .skills-section {
            padding: 6rem 1.5rem;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .section-subtitle {
            font-size: 1.1rem;
            margin-bottom: 3rem;
          }

          .skill-orb {
            width: 150px;
            height: 150px;
          }

          .orb-icon {
            font-size: 3rem;
          }

          .ring:nth-child(1) {
            width: 200px;
            height: 200px;
          }

          .ring:nth-child(2) {
            width: 300px;
            height: 300px;
          }

          .ring:nth-child(3) {
            width: 400px;
            height: 400px;
          }

          .skill-name {
            font-size: 1.5rem;
          }

          .skill-stats {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

// Helper function for skill descriptions
function getSkillDescription(skillName) {
  const descriptions = {
    "UI/UX Design":
      "Creating intuitive and beautiful user interfaces that delight users while maintaining perfect functionality and usability.",
    React:
      "Building dynamic, high-performance web applications with modern React ecosystem including hooks, context, and advanced state management.",
    JavaScript:
      "Developing complex interactive features with modern ES6+ JavaScript, following best practices and design patterns.",
    Figma:
      "Designing pixel-perfect interfaces and design systems with Figma, from wireframes to interactive prototypes.",
    Animation:
      "Crafting smooth, performant animations that enhance user experience without compromising performance.",
    "Node.js":
      "Building scalable backend services and APIs with Node.js, Express, and modern database solutions.",
  };

  return descriptions[skillName] || "Professional expertise in this area.";
}

export default SkillsSection;
