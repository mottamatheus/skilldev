import React from 'react';
import Particles from 'react-tsparticles';
import ParticlesBackground from './styles';

const Background: React.FC = () => (
    <ParticlesBackground>
    <Particles
    id="tsparticles"
    width="100%"
    height="250vh"
    options={{
      background: {
        color: {
          value: '#fbfbfb',
        },
      },
      fpsLimit: 60,
      interactivity: {
        detectsOn: 'canvas',
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: false,
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 250,
            duration: 2,
            opacity: 0,
            size: 0,
            speed: 1,
          },
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
          value: '#beb7db',
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: false,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: 'none',
          enable: true,
          outMode: 'bounce',
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            value_area: 1000,
          },
          value: 100,
        },
        opacity: {
          value: 0.4,
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#fff',
          },
        },
        size: {
          random: true,
          value: 5,
        },
      },
      detectRetina: true,
    }}
  />
  </ParticlesBackground>
);

export default Background;
