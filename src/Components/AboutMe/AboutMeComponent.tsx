import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React, { MouseEvent, useState } from 'react';
import './aboutMeFont.css';

const AboutMeComponent: React.FC = () => {
  const [positionRadialGradient, setPositionRadialGradient] = useState<{ x: number; y: number }>({ x: 500, y: 500 });
  const handleChangePositionRadialGradientCircle = (e: MouseEvent<HTMLDivElement>): void => {
    setPositionRadialGradient({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <motion.div
      onMouseMove={handleChangePositionRadialGradientCircle}
      style={{
        height: '100vh',
      }}
      initial={{
        background: `radial-gradient(circle at ${positionRadialGradient.x}px ${positionRadialGradient.y}px, #00CC99 0%, #6600FF 100%)`,
      }}
      animate={{
        background: `radial-gradient(circle at ${positionRadialGradient.x}px ${positionRadialGradient.y}px, #00CC99 0%, #6600FF 100%)`,
      }}
      transition={{
        duration: '0.2s ease',
      }}
    >
      <div style={{ paddingTop: 50, display: 'flex', justifyContent: 'center' }}>
        <Typography
          className="bebasNeueFont"
          variant="h1"
          letterSpacing={4}
          style={{ textTransform: 'uppercase', color: '#eee', textShadow: '7px 0px 0px #47CD29' }}
        >
          About me
        </Typography>
      </div>
      <div
        style={{
          maxWidth: 700,
          backgroundColor: 'rgba(0, 34, 51, 0.5)',
          borderRadius: 60,
          padding: '40px 25px',
          backdropFilter: 'blur(30px) saturate(200%) brightness(110%)',
        }}
      >
        <Typography
          variant="h5"
          color="#eee"
          style={{
            lineHeight: 1.125,
            wordSpacing: 3,
            letterSpacing: '0.004em',
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus excepturi corporis inventore veniam maxime
          minima nam sequi rem mollitia, rerum dicta sapiente eligendi sint. Adipisci!
        </Typography>
      </div>
    </motion.div>
  );
};

export default AboutMeComponent;
