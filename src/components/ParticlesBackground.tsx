import { useCallback, useState } from 'react';
import Particles from 'react-tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

interface ParticlesBackgroundProps {
  className?: string;
}

const ParticlesBackground = ({ className }: ParticlesBackgroundProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const handleParticlesLoaded = useCallback(async (container: Container | undefined) => {
    setIsLoaded(true);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className={`fixed inset-0 -z-10 ${className}`}
      init={particlesInit}
      loaded={handleParticlesLoaded}
      options={{
        fpsLimit: 120,
        fullScreen: false,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push"
            },
            onHover: {
              enable: true,
              mode: "repulse"
            },
            resize: true
          },
          modes: {
            push: {
              quantity: 4
            },
            repulse: {
              distance: 100,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: "#10B981" // Using primary color from your theme
          },
          links: {
            color: "#064E3B", // Using secondary color from your theme
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce"
            },
            random: false,
            speed: 1,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 80
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: "circle"
          },
          size: {
            value: { min: 1, max: 3 }
          }
        },
        detectRetina: true
      }}
    />
  );
};

export default ParticlesBackground; 