// // // import React from 'react';
// // // import './ProjectsPage.css'; // Import CSS for styling
// // // import { motion } from 'framer-motion'; // Animation library

// // // const projects = [
// // //   {
// // //     title: "Chat Application",
// // //     description: "A real-time chat app built with the MERN stack.",
// // //     technologies: "React, Node.js, MongoDB",
// // //     imageUrl: "https://img.freepik.com/free-vector/project-management-design-concept-symbolizing-analysis-solving-problems-isometric-vector-illustration_1284-77122.jpg" // Example image path
// // //   },
// // //   {
// // //     title: "Weather Dashboard",
// // //     description: "A dynamic weather app with API integration.",
// // //     technologies: "HTML, CSS, JavaScript",
// // //     imageUrl: "https://img.freepik.com/free-vector/project-management-design-concept-symbolizing-analysis-solving-problems-isometric-vector-illustration_1284-77122.jpg" // Example image path
// // //   },
// // //   {
// // //     title: "Portfolio Website",
// // //     description: "A personal portfolio to showcase projects.",
// // //     technologies: "React, Bootstrap",
// // //     imageUrl: "https://img.freepik.com/free-vector/project-management-design-concept-symbolizing-analysis-solving-problems-isometric-vector-illustration_1284-77122.jpg" // Example image path
// // //   },
// // //   {
// // //     title: "Chat Application",
// // //     description: "A real-time chat app built with the MERN stack.",
// // //     technologies: "React, Node.js, MongoDB",
// // //     imageUrl: "https://img.freepik.com/free-vector/project-management-design-concept-symbolizing-analysis-solving-problems-isometric-vector-illustration_1284-77122.jpg" // Example image path
// // //   },
// // //   {
// // //     title: "Weather Dashboard",
// // //     description: "A dynamic weather app with API integration.",
// // //     technologies: "HTML, CSS, JavaScript",
// // //     imageUrl: "https://img.freepik.com/free-vector/project-management-design-concept-symbolizing-analysis-solving-problems-isometric-vector-illustration_1284-77122.jpg" // Example image path
// // //   },
// // //   {
// // //     title: "Portfolio Website",
// // //     description: "A personal portfolio to showcase projects.",
// // //     technologies: "React, Bootstrap",
// // //     imageUrl: "https://img.freepik.com/free-vector/project-management-design-concept-symbolizing-analysis-solving-problems-isometric-vector-illustration_1284-77122.jpg" // Example image path
// // //   },
// // //   // Add more projects here
// // // ];

// // // const Portfolio= () => {
// // //   return (
// // //     <div className="projects-container">
// // //       <h1 className="projects-title">My Projects</h1>
// // //       <div className="projects-grid">
// // //         {projects.map((project, index) => (
// // //           <motion.div
// // //             className="project-card"
// // //             key={index}
// // //             initial={{ opacity: 0, y: 50 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.5, delay: index * 0.2 }}
// // //             whileHover={{ scale: 1.05 }}
// // //             whileTap={{ scale: 0.95 }}
// // //           >
// // //             <div className="image-container">
// // //               <img src={project.imageUrl} alt={project.title} className="project-image" />
// // //             </div>
// // //             <h2>{project.title}</h2>
// // //             <p>{project.description}</p>
// // //             <span>{project.technologies}</span>
// // //           </motion.div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Portfolio;

// // import React from 'react';
// // import './ProjectsPage.css'; // Import CSS for styling
// // import { motion } from 'framer-motion'; // Animation library
// // import { FaEye } from 'react-icons/fa'; // Importing FontAwesome eye icon (install react-icons if you haven't)
// // import weather from './weather.png'; // Adjust the path as necessary
// // import Feedback from './feedback.png'; // Adjust the path as necessary
// // const projects = [
// //   {
// //     title: "Chat Application",
// //     description: "A product Feedback system using React",
// //     technologies: "React, Rest Api",
// //     imageUrl: Feedback,
// //     link: "/chat-application" // Example link
// //   },
// //   {
// //     title: "Weather Dashboard",
// //     description: "A dynamic weather app with API integration.",
// //     technologies: "HTML, CSS, JavaScript",
// //     imageUrl: weather,
// //     link: "https://github.com/ElsaHak/weather-App" // Example link
// //   },
// //   {
// //     title: "Portfolio Website",
// //     description: "A personal portfolio to showcase projects.",
// //     technologies: "React, Bootstrap",
// //     imageUrl: "https://img.freepik.com/free-vector/project-management-design-concept-symbolizing-analysis-solving-problems-isometric-vector-illustration_1284-77122.jpg",
// //     link: "/portfolio-website"
// //   },
// //   {
// //     title: "Chat Application",
// //     description: "A real-time chat app built with the MERN stack.",
// //     technologies: "React, Node.js, MongoDB",
// //     imageUrl: "https://img.freepik.com/free-vector/project-management-design-concept-symbolizing-analysis-solving-problems-isometric-vector-illustration_1284-77122.jpg",
// //     link: "/chat-application" // Example link
// //   },
// //   {
// //     title: "Weather Dashboard",
// //     description: "A dynamic weather app with API integration.",
// //     technologies: "HTML, CSS, JavaScript",
// //     imageUrl: "https://img.freepik.com/free-vector/project-management-design-concept-symbolizing-analysis-solving-problems-isometric-vector-illustration_1284-77122.jpg",
// //     link: "/weather-dashboard" // Example link
// //   },
// //   {
// //     title: "Portfolio Website",
// //     description: "A personal portfolio to showcase projects.",
// //     technologies: "React, Bootstrap",
// //     imageUrl: "https://img.freepik.com/free-vector/project-management-design-concept-symbolizing-analysis-solving-problems-isometric-vector-illustration_1284-77122.jpg",
// //     link: "/portfolio-website" // Example link
// //   }

// // ];

// // const Portfolio = () => {

// //   const handleProjectClick = (link) => {
// //     window.location.href = link; // Navigate to the project link
// //   };

// //   return (
// //     <div className="projects-container">
// //       <h1 className="projects-title">My Recent Projects</h1>
// //       <div className="projects-grid">
// //         {projects.map((project, index) => (
// //           <motion.div
// //             className="project-card"
// //             key={index}
// //             initial={{ opacity: 0, y: 50 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: index * 0.2 }}
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //           >
// //             <div className="image-container">
// //               <img src={project.imageUrl} alt={project.title} className="project-image" />
// //               <div className="hover-overlay">
// //                 <FaEye
// //                   className="eye-icon"
// //                   onClick={() => handleProjectClick(project.link)}
// //                   title={`View ${project.title}`}
// //                 />
// //               </div>
// //             </div>
// //             <h2>{project.title}</h2>
// //             <p>{project.description}</p>
// //             <span>{project.technologies}</span>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Portfolio;

// import { motion } from "framer-motion";
// import { useState } from "react";
// import { AnimatePresence } from "framer-motion";

// const ProjectsSection = () => {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [selectedProject, setSelectedProject] = useState(null);

//   const projects = [
//     {
//       id: 1,
//       title: "Elegant E-Commerce Platform",
//       description:
//         "A modern e-commerce solution with seamless checkout experience and product customization",
//       tags: ["React", "Node.js", "MongoDB", "Figma"],
//       category: "Web App",
//       image: "/project1.jpg",
//       link: "#",
//       features: [
//         "Product customization tools",
//         "Secure payment integration",
//         "Responsive mobile design",
//         "Admin dashboard",
//       ],
//     },
//     {
//       id: 2,
//       title: "Interactive Dashboard",
//       description:
//         "Data visualization dashboard with real-time analytics and custom reporting",
//       tags: ["React", "D3.js", "Firebase", "SCSS"],
//       category: "Web App",
//       image: "/project2.jpg",
//       link: "#",
//       features: [
//         "Interactive charts",
//         "Custom report generation",
//         "Role-based access",
//         "Dark/light mode",
//       ],
//     },
//     {
//       id: 3,
//       title: "Mobile Fitness App",
//       description:
//         "Workout tracking application with AI-powered recommendations",
//       tags: ["React Native", "Python", "Figma", "Firebase"],
//       category: "Mobile",
//       image: "/project3.jpg",
//       link: "#",
//       features: [
//         "AI workout plans",
//         "Progress tracking",
//         "Social features",
//         "Video demonstrations",
//       ],
//     },
//     {
//       id: 4,
//       title: "Portfolio Website",
//       description:
//         "Modern portfolio website with 3D elements and smooth animations",
//       tags: ["Next.js", "Framer Motion", "Three.js", "Tailwind"],
//       category: "Website",
//       image: "/project4.jpg",
//       link: "#",
//       features: [
//         "3D interactive elements",
//         "GSAP animations",
//         "Dark/light mode",
//         "CMS integration",
//       ],
//     },
//     {
//       id: 5,
//       title: "SAAS Business Platform",
//       description: "Complete business management solution for small businesses",
//       tags: ["React", "Node.js", "PostgreSQL", "AWS"],
//       category: "Web App",
//       image: "/project5.jpg",
//       link: "#",
//       features: [
//         "Invoice generation",
//         "Client management",
//         "Team collaboration",
//         "Analytics dashboard",
//       ],
//     },
//     {
//       id: 6,
//       title: "AR Interior Design App",
//       description: "Augmented reality application for home decoration planning",
//       tags: ["Unity", "ARKit", "Blender", "Firebase"],
//       category: "Mobile",
//       image: "/project6.jpg",
//       link: "#",
//       features: [
//         "3D room scanning",
//         "Furniture placement",
//         "Product catalog",
//         "Real-time previews",
//       ],
//     },
//   ];

//   const filters = ["All", "Web App", "Mobile", "Website"];
//   const filteredProjects =
//     activeFilter === "All"
//       ? projects
//       : projects.filter((project) => project.category === activeFilter);

//   return (
//     <section id="projects" className="projects-section">
//       {/* Animated background elements */}
//       <div className="projects-background">
//         <div className="floating-dots"></div>
//         <div className="gradient-blob"></div>
//       </div>

//       <div className="section-container">
//         <motion.h2
//           className="section-title"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           My <span className="highlight">Projects</span>
//         </motion.h2>

//         <motion.p
//           className="section-subtitle"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           Selected work that showcases my skills and creativity
//         </motion.p>

//         {/* Filter buttons */}
//         <motion.div
//           className="filter-buttons"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//         >
//           {filters.map((filter) => (
//             <button
//               key={filter}
//               className={`filter-button ${
//                 activeFilter === filter ? "active" : ""
//               }`}
//               onClick={() => setActiveFilter(filter)}
//             >
//               {filter}
//             </button>
//           ))}
//         </motion.div>

//         {/* Projects grid */}
//         <div className="projects-grid">
//           {filteredProjects.map((project, index) => (
//             <motion.div
//               key={project.id}
//               className="project-card"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               onClick={() => setSelectedProject(project)}
//             >
//               <div className="project-image">
//                 <div className="image-overlay"></div>
//                 <div className="project-tags">
//                   {project.tags.map((tag) => (
//                     <span key={tag} className="tag">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <div className="project-info">
//                 <span className="project-category">{project.category}</span>
//                 <h3 className="project-title">{project.title}</h3>
//                 <p className="project-description">{project.description}</p>
//                 <div className="project-cta">
//                   <span>View Project</span>
//                   <div className="arrow-icon">→</div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Project Modal */}
//       <AnimatePresence>
//         {selectedProject && (
//           <motion.div
//             className="project-modal"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="modal-content"
//               initial={{ scale: 0.9, y: 50 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.9, y: 50 }}
//               transition={{ type: "spring", damping: 25 }}
//             >
//               <button
//                 className="close-button"
//                 onClick={() => setSelectedProject(null)}
//               >
//                 &times;
//               </button>

//               <div className="modal-grid">
//                 <div className="modal-image">
//                   <div className="image-placeholder"></div>
//                 </div>

//                 <div className="modal-details">
//                   <span className="project-category">
//                     {selectedProject.category}
//                   </span>
//                   <h3 className="project-title">{selectedProject.title}</h3>

//                   <div className="project-meta">
//                     <div className="meta-item">
//                       <span className="meta-label">Client</span>
//                       <span className="meta-value">XYZ Corporation</span>
//                     </div>
//                     <div className="meta-item">
//                       <span className="meta-label">Year</span>
//                       <span className="meta-value">2023</span>
//                     </div>
//                     <div className="meta-item">
//                       <span className="meta-label">Service</span>
//                       <span className="meta-value">Full Stack Development</span>
//                     </div>
//                   </div>

//                   <p className="project-description">
//                     {selectedProject.description}
//                   </p>

//                   <div className="project-features">
//                     <h4>Key Features</h4>
//                     <ul>
//                       {selectedProject.features.map((feature, index) => (
//                         <li key={index}>{feature}</li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div className="project-tags">
//                     {selectedProject.tags.map((tag) => (
//                       <span key={tag} className="tag">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="modal-actions">
//                     <a href={selectedProject.link} className="primary-button">
//                       Visit Live Site
//                     </a>
//                     <a href="#" className="secondary-button">
//                       View Case Study
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <style jsx>{`
//         .projects-section {
//           position: relative;
//           padding: 8rem 2rem;
//           background: #0f172a;
//           overflow: hidden;
//         }

//         .projects-background {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           z-index: 0;
//         }

//         .floating-dots {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           background-image: radial-gradient(
//             circle,
//             rgba(165, 180, 252, 0.1) 1px,
//             transparent 1px
//           );
//           background-size: 30px 30px;
//           opacity: 0.3;
//         }

//         .gradient-blob {
//           position: absolute;
//           width: 600px;
//           height: 600px;
//           background: radial-gradient(
//             circle,
//             rgba(99, 102, 241, 0.1) 0%,
//             rgba(0, 0, 0, 0) 70%
//           );
//           top: 50%;
//           right: -300px;
//           border-radius: 50%;
//           filter: blur(40px);
//         }

//         .section-container {
//           position: relative;
//           z-index: 2;
//           max-width: 1400px;
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

//         .filter-buttons {
//           display: flex;
//           justify-content: center;
//           gap: 1rem;
//           margin-bottom: 3rem;
//           flex-wrap: wrap;
//         }

//         .filter-button {
//           padding: 0.6rem 1.5rem;
//           border-radius: 50px;
//           background: transparent;
//           border: 1px solid rgba(165, 180, 252, 0.3);
//           color: #a5b4fc;
//           font-weight: 500;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }

//         .filter-button:hover {
//           border-color: #6366f1;
//           color: white;
//         }

//         .filter-button.active {
//           background: linear-gradient(90deg, #6366f1, #8b5cf6);
//           color: white;
//           border-color: transparent;
//           box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
//         }

//         .projects-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
//           gap: 2rem;
//         }

//         .project-card {
//           background: rgba(15, 23, 42, 0.6);
//           border-radius: 20px;
//           overflow: hidden;
//           cursor: pointer;
//           transition: transform 0.3s, box-shadow 0.3s;
//           border: 1px solid rgba(165, 180, 252, 0.1);
//           backdrop-filter: blur(10px);
//         }

//         .project-card:hover {
//           transform: translateY(-10px);
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
//         }

//         .project-image {
//           height: 220px;
//           position: relative;
//           background: linear-gradient(135deg, #334155, #1e293b);
//         }

//         .image-overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(
//             to top,
//             rgba(15, 23, 42, 0.9),
//             transparent
//           );
//         }

//         .project-tags {
//           position: absolute;
//           bottom: 1rem;
//           left: 1rem;
//           display: flex;
//           gap: 0.5rem;
//           flex-wrap: wrap;
//         }

//         .tag {
//           background: rgba(15, 23, 42, 0.8);
//           color: #a5b4fc;
//           padding: 0.3rem 0.8rem;
//           border-radius: 50px;
//           font-size: 0.7rem;
//           font-weight: 500;
//           border: 1px solid rgba(165, 180, 252, 0.2);
//         }

//         .project-info {
//           padding: 1.5rem;
//         }

//         .project-category {
//           color: #6366f1;
//           font-size: 0.8rem;
//           font-weight: 600;
//           letter-spacing: 1px;
//           text-transform: uppercase;
//           display: block;
//           margin-bottom: 0.5rem;
//         }

//         .project-title {
//           font-size: 1.5rem;
//           font-weight: 700;
//           color: white;
//           margin-bottom: 0.8rem;
//           line-height: 1.3;
//         }

//         .project-description {
//           color: #a5b4fc;
//           font-size: 0.95rem;
//           line-height: 1.6;
//           margin-bottom: 1.5rem;
//         }

//         .project-cta {
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//           color: #6366f1;
//           font-weight: 600;
//           transition: color 0.3s;
//         }

//         .project-card:hover .project-cta {
//           color: white;
//         }

//         .arrow-icon {
//           transition: transform 0.3s;
//         }

//         .project-card:hover .arrow-icon {
//           transform: translateX(5px);
//         }

//         /* Project Modal */
//         .project-modal {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: rgba(0, 0, 0, 0.8);
//           backdrop-filter: blur(10px);
//           z-index: 1000;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 2rem;
//           overflow-y: auto;
//         }

//         .modal-content {
//           background: #0f172a;
//           border-radius: 20px;
//           max-width: 1200px;
//           width: 100%;
//           max-height: 90vh;
//           overflow-y: auto;
//           position: relative;
//           border: 1px solid rgba(165, 180, 252, 0.1);
//           box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
//         }

//         .close-button {
//           position: absolute;
//           top: 1.5rem;
//           right: 1.5rem;
//           background: rgba(15, 23, 42, 0.6);
//           border: none;
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           color: white;
//           font-size: 1.5rem;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           z-index: 10;
//           transition: background 0.3s;
//         }

//         .close-button:hover {
//           background: rgba(99, 102, 241, 0.3);
//         }

//         .modal-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           min-height: 600px;
//         }

//         .modal-image {
//           background: linear-gradient(135deg, #334155, #1e293b);
//           position: relative;
//         }

//         .image-placeholder {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background-size: cover;
//           background-position: center;
//         }

//         .modal-details {
//           padding: 3rem;
//           overflow-y: auto;
//         }

//         .project-category {
//           color: #6366f1;
//           font-size: 0.9rem;
//           font-weight: 600;
//           letter-spacing: 1px;
//           text-transform: uppercase;
//           display: block;
//           margin-bottom: 1rem;
//         }

//         .project-title {
//           font-size: 2rem;
//           font-weight: 800;
//           color: white;
//           margin-bottom: 1.5rem;
//           line-height: 1.2;
//         }

//         .project-meta {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 1.5rem;
//           margin-bottom: 2rem;
//         }

//         .meta-item {
//           background: rgba(15, 23, 42, 0.6);
//           padding: 1rem;
//           border-radius: 10px;
//           border: 1px solid rgba(165, 180, 252, 0.1);
//         }

//         .meta-label {
//           display: block;
//           color: #a5b4fc;
//           font-size: 0.8rem;
//           margin-bottom: 0.3rem;
//         }

//         .meta-value {
//           color: white;
//           font-weight: 600;
//           font-size: 0.95rem;
//         }

//         .project-description {
//           color: #e2e8f0;
//           font-size: 1rem;
//           line-height: 1.8;
//           margin-bottom: 2rem;
//         }

//         .project-features {
//           margin-bottom: 2rem;
//         }

//         .project-features h4 {
//           color: white;
//           font-size: 1.2rem;
//           margin-bottom: 1rem;
//         }

//         .project-features ul {
//           list-style-type: none;
//           padding-left: 0;
//         }

//         .project-features li {
//           position: relative;
//           padding-left: 1.5rem;
//           color: #e2e8f0;
//           margin-bottom: 0.5rem;
//         }

//         .project-features li::before {
//           content: "•";
//           color: #6366f1;
//           position: absolute;
//           left: 0;
//           font-size: 1.2rem;
//         }

//         .project-tags {
//           display: flex;
//           gap: 0.5rem;
//           flex-wrap: wrap;
//           margin-bottom: 2rem;
//         }

//         .modal-actions {
//           display: flex;
//           gap: 1rem;
//         }

//         .primary-button,
//         .secondary-button {
//           padding: 0.8rem 1.5rem;
//           border-radius: 8px;
//           font-weight: 600;
//           text-decoration: none;
//           transition: all 0.3s ease;
//         }

//         .primary-button {
//           background: linear-gradient(90deg, #6366f1, #8b5cf6);
//           color: white;
//           border: none;
//         }

//         .primary-button:hover {
//           box-shadow: 0 5px 20px rgba(99, 102, 241, 0.4);
//           transform: translateY(-2px);
//         }

//         .secondary-button {
//           background: transparent;
//           color: #a5b4fc;
//           border: 1px solid rgba(165, 180, 252, 0.3);
//         }

//         .secondary-button:hover {
//           border-color: #6366f1;
//           color: white;
//         }

//         @media (max-width: 1024px) {
//           .modal-grid {
//             grid-template-columns: 1fr;
//           }

//           .modal-image {
//             height: 300px;
//           }
//         }

//         @media (max-width: 768px) {
//           .projects-section {
//             padding: 6rem 1rem;
//           }

//           .section-title {
//             font-size: 2.5rem;
//           }

//           .projects-grid {
//             grid-template-columns: 1fr;
//           }

//           .modal-details {
//             padding: 2rem;
//           }

//           .project-meta {
//             grid-template-columns: 1fr;
//           }

//           .modal-actions {
//             flex-direction: column;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ProjectsSection;
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Elegant E-Commerce Platform",
      description:
        "A modern e-commerce solution with seamless checkout experience",
      tags: ["React", "Node.js", "MongoDB", "Figma"],
      category: "Web App",
      imageUrl:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      link: "#",
      features: [
        "Product customization tools",
        "Secure payment integration",
        "Admin dashboard",
      ],
    },
    {
      id: 2,
      title: "Interactive Dashboard",
      description: "Data visualization dashboard with real-time analytics",
      tags: ["React", "D3.js", "Firebase"],
      category: "Web App",
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      link: "#",
      features: ["Interactive charts", "Custom reporting", "Dark/light mode"],
    },
    {
      id: 3,
      title: "Mobile Fitness App",
      description: "Workout tracking with AI recommendations",
      tags: ["React Native", "Python", "Firebase"],
      category: "Mobile",
      imageUrl:
        "https://user-images.githubusercontent.com/4997491/117525087-652d4c00-afde-11eb-92d4-0fda6f5c5d03.JPG",
      link: "#",
      features: ["AI workout plans", "Progress tracking", "Video demos"],
    },
  ];

  const filters = ["All", "Web App", "Mobile"];
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-background">
        <div className="floating-dots"></div>
      </div>

      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My <span className="highlight">Projects</span>
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Selected work showcasing my skills
        </motion.p>

        <motion.div
          className="filter-buttons"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-button ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="project-img"
                />
                <div className="image-overlay"></div>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-cta">
                  <span>View Project</span>
                  <div className="arrow-icon">→</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <button
                className="close-button"
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>

              <div className="modal-grid">
                <div className="modal-image">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="modal-img"
                  />
                </div>

                <div className="modal-details">
                  <span className="project-category">
                    {selectedProject.category}
                  </span>
                  <h3 className="project-title">{selectedProject.title}</h3>

                  <div className="project-meta">
                    <div className="meta-item">
                      <span className="meta-label">Client</span>
                      <span className="meta-value">XYZ Corporation</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Year</span>
                      <span className="meta-value">2023</span>
                    </div>
                  </div>

                  <p className="project-description">
                    {selectedProject.description}
                  </p>

                  <div className="project-features">
                    <h4>Key Features</h4>
                    <ul>
                      {selectedProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-tags">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="modal-actions">
                    <a href={selectedProject.link} className="primary-button">
                      Visit Live Site
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .projects-section {
          position: relative;
          padding: 8rem 2rem;
          background: #0f172a;
          overflow: hidden;
          height: 100vh;
        }

        .projects-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .floating-dots {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(
            circle,
            rgba(165, 180, 252, 0.1) 1px,
            transparent 1px
          );
          background-size: 30px 30px;
          opacity: 0.3;
        }

        .section-container {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 1rem;
          color: white;
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
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto 3rem;
        }

        .filter-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .filter-button {
          padding: 0.5rem 1.2rem;
          border-radius: 50px;
          background: transparent;
          border: 1px solid rgba(165, 180, 252, 0.3);
          color: #a5b4fc;
          cursor: pointer;
          transition: all 0.3s;
        }

        .filter-button.active {
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
          color: white;
          border-color: transparent;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .project-card {
          background: rgba(15, 23, 42, 0.6);
          border-radius: 15px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s;
          border: 1px solid rgba(165, 180, 252, 0.1);
        }

        .project-card:hover {
          transform: translateY(-5px);
        }

        .project-image {
          height: 200px;
          position: relative;
          overflow: hidden;
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }

        .project-card:hover .project-img {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to top,
            rgba(15, 23, 42, 0.9),
            transparent
          );
        }

        .project-tags {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          display: flex;
          gap: 0.5rem;
        }

        .tag {
          background: rgba(15, 23, 42, 0.8);
          color: #a5b4fc;
          padding: 0.2rem 0.7rem;
          border-radius: 50px;
          font-size: 0.7rem;
          border: 1px solid rgba(165, 180, 252, 0.2);
        }

        .project-info {
          padding: 1.2rem;
        }

        .project-category {
          color: #6366f1;
          font-size: 0.8rem;
          font-weight: 600;
          display: block;
          margin-bottom: 0.5rem;
        }

        .project-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.5rem;
        }

        .project-description {
          color: #a5b4fc;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .project-cta {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          color: #6366f1;
          font-weight: 600;
          font-size: 0.9rem;
        }

        /* Modal Styles */
        .project-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .modal-content {
          background: #0f172a;
          border-radius: 15px;
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          border: 1px solid rgba(165, 180, 252, 0.1);
        }

        .close-button {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(15, 23, 42, 0.6);
          border: none;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          color: white;
          font-size: 1.2rem;
          cursor: pointer;
        }

        .modal-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .modal-image {
          height: 100%;
          min-height: 300px;
          overflow: hidden;
        }

        .modal-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-details {
          padding: 2rem;
        }

        .project-meta {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin: 1rem 0;
        }

        .meta-item {
          background: rgba(15, 23, 42, 0.6);
          padding: 0.8rem;
          border-radius: 8px;
        }

        .meta-label {
          color: #a5b4fc;
          font-size: 0.8rem;
          display: block;
        }

        .meta-value {
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .project-features ul {
          padding-left: 1.2rem;
          margin: 1rem 0;
        }

        .project-features li {
          color: #e2e8f0;
          margin-bottom: 0.3rem;
        }

        .modal-actions {
          margin-top: 1.5rem;
        }

        .primary-button {
          display: inline-block;
          padding: 0.7rem 1.5rem;
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
          color: white;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
        }

        @media (max-width: 768px) {
          .projects-section {
            padding: 5rem 1rem;
          }

          .section-title {
            font-size: 2.2rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .modal-grid {
            grid-template-columns: 1fr;
          }

          .modal-image {
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
