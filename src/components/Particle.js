import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      className="particles-port"
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.5,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          detect_on: "canvas", // Detect events on the canvas
          events: {
            onhover: {
              enable: true, // Enable interactivity on hover
              mode: "grab", // Grab mode to draw lines from mouse to particles
            },
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            grab: {
              distance: 200, // Maximum distance for line linking
              line_linked: {
                opacity: 0.7, // Line opacity when linked with cursor
              },
            },
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
