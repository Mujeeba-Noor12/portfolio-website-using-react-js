// src/ParticlesBackground.js

import React from 'react';
import Particles from 'react-tsparticles';

const ParticlesBackground = () => {
  return (
    <Particles
      options={{
        fullScreen: {
          enable: true,
          zIndex: 1, // Ensure particles are behind other content
        },
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: '#ffffff', // Particle color
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000',
            },
            polygon: {
              nb_sides: 5,
            },
          },
          opacity: {
            value: 0.5, // Particle opacity
          },
          size: {
            value: 5,
            random: true,
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: 'none',
            out_mode: 'out',
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticlesBackground;
