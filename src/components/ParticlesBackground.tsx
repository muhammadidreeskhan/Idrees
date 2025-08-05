import { useCallback, useState, useEffect } from 'react';
import Particles from 'react-tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import { useTheme } from 'next-themes';

interface ParticlesBackgroundProps {
  className?: string;
  variant?: 'default' | 'dense' | 'minimal';
}

const ParticlesBackground = ({ className, variant = 'default' }: ParticlesBackgroundProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { theme } = useTheme();
  const [primaryColor, setPrimaryColor] = useState('#0EA5E9');
  const [secondaryColor, setSecondaryColor] = useState('#8B5CF6');

  useEffect(() => {
    // Set colors based on theme
    if (theme === 'dark') {
      setPrimaryColor('#0EA5E9'); // Sky Blue
      setSecondaryColor('#8B5CF6'); // Purple
    } else {
      setPrimaryColor('#0EA5E9'); // Sky Blue
      setSecondaryColor('#8B5CF6'); // Purple
    }
  }, [theme]);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const handleParticlesLoaded = useCallback(async (container: Container | undefined) => {
    setIsLoaded(true);
  }, []);

  // Different particle configurations based on variant
  const getParticleConfig = () => {
    switch (variant) {
      case 'dense':
        return {
          particles: {
            number: { value: 120, density: { enable: true, area: 800 } },
            color: { value: [primaryColor, secondaryColor] },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 3 } },
            links: {
              enable: true,
              distance: 150,
              color: theme === 'dark' ? "#ffffff" : "#000000",
              opacity: 0.2,
              width: 1
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "bounce" }
            }
          }
        };
      case 'minimal':
        return {
          particles: {
            number: { value: 10, density: { enable: true, area: 800 } },
            color: { value: primaryColor },
            shape: { type: "circle" },
            opacity: { value: 0.3 },
            size: { value: { min: 1, max: 5 } },
            links: { enable: false },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "out" }
            }
          }
        };
      default: // 'default'
        return {
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: { value: [primaryColor, secondaryColor] },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 3 } },
            links: {
              enable: true,
              distance: 150,
              color: theme === 'dark' ? "#ffffff" : "#000000",
              opacity: 0.2,
              width: 1
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              outModes: { default: "bounce" }
            }
          }
        };
    }
  };

  const particleConfig = getParticleConfig();

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
            push: { quantity: 4 },
            repulse: { distance: 100, duration: 0.4 }
          }
        },
        ...particleConfig,
        detectRetina: true
      }}
    />
  );
};

export default ParticlesBackground;