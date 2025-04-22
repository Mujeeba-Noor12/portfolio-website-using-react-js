// // export default{
// //   background: {
// //     color: {
// //       value: "#0d47a1",
// //     },
// //   },
// //   fpsLimit: 120,
// //   interactivity: {
// //     events: {
// //       onClick: {
// //         enable: true,
// //         mode: "push",
// //       },
// //       onHover: {
// //         enable: true,
// //         mode: "repulse",
// //       },
// //     },
// //     modes: {
// //       push: {
// //         quantity: 4,
// //       },
// //       repulse: {
// //         distance: 200,
// //         duration: 0.4,
// //       },
// //     },
// //   },
// //   particles: {
// //     color: {
// //       value: "#ffffff",
// //     },
// //     links: {
// //       color: "#ffffff",
// //       distance: 150,
// //       enable: true,
// //       opacity: 0.5,
// //       width: 1,
// //     },
// //     move: {
// //       direction: "none",
// //       enable: true,
// //       outModes: {
// //         default: "bounce",
// //       },
// //       random: false,
// //       speed: 6,
// //       straight: false,
// //     },
// //     number: {
// //       density: {
// //         enable: true,
// //       },
// //       value: 80,
// //     },
// //     opacity: {
// //       value: 0.5,
// //     },
// //     shape: {
// //       type: "circle",
// //     },
// //     size: {
// //       value: { min: 1, max: 5 },
// //     },
// //   },
// //   detectRetina: true,

// // }
// // particlesConfig.js
// export default {
//   background: {
//     color: {
//       value: "black",  // Background color
//     },
//   },
//   fpsLimit: 120,  // Frames per second limit
//   interactivity: {
//     events: {
//       onClick: {
//         enable: true,
//         mode: "push",  // Adds particles on click
//       },
//       onHover: {
//         enable: true,
//         mode: "repulse",  // Repulse effect on hover
//       },
//     },
//     modes: {
//       push: {
//         quantity: 4,  // Number of particles to add on click
//       },
//       repulse: {
//         distance: 200,
//         duration: 0.4,
//       },
//     },
//   },
//   particles: {
//     color: {
//       value: "#ffffff",  // Particle color
//     },
//     links: {
//       color: "#ffffff",
//       distance: 150,  // Distance between linked particles
//       enable: true,  // Enable particle linking
//       opacity: 0.5,
//       width: 1,
//     },
//     move: {
//       direction: "none",
//       enable: true,
//       outModes: {
//         default: "bounce",
//       },
//       random: false,
//       speed: 6,  // Speed of particle movement
//       straight: false,
//     },
//     number: {
//       density: {
//         enable: true,  // Enable particle density based on canvas size
//       },
//       value: 80,  // Number of particles
//     },
//     opacity: {
//       value: 0.5,
//     },
//     shape: {
//       type: "circle",  // Shape of the particles
//     },
//     size: {
//       value: { min: 1, max: 5 },
//     },
//   },
//   detectRetina: true,  
// };
const particlesConfig = {
  background: {
    color: {
      value: "black",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 50,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};

export default particlesConfig;
