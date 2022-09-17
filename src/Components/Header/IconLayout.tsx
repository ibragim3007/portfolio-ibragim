import { motion } from 'framer-motion';
import React from 'react';

interface IconLayoutProps {
  logo: string;
  width?: number;
  top: number;
  left: number;
  filter?: string;
  rotate?: number;
  duration?: number;
  zIndex?: number;
}

const IconLayout: React.FC<IconLayoutProps> = ({
  logo,
  width = 120,
  top,
  left,
  filter = 'blur(0px)',
  rotate = 0,
  duration = 5,
  zIndex = 10,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        delay: 0.5,
        duration: 3.0,
        type: 'spring',
      }}
    >
      <motion.img
        style={{
          width: width,
          position: 'relative',
          zIndex: zIndex,
          top: top,
          left: left,
          rotate: rotate,
          filter: filter,
          borderRadius: 40,
          cursor: 'pointer',
        }}
        animate={{
          rotate: [rotate, rotate + 360],
        }}
        transition={{
          type: 'lineral',
          repeat: Infinity,
          duration: duration,
        }}
        src={logo}
      />
    </motion.div>
  );
};

export default IconLayout;
