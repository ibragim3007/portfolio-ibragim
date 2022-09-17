import { Grid } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import bgScreenLoad from '../../Sourse/img/loadingScreen2.svg';

const LoadingAnimate: React.FC = () => {
  return (
    <Grid
      style={{
        height: '100vh',
        backgroundImage: `url(${bgScreenLoad})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      container
      justifyContent="center"
      alignItems="center"
    >
      <motion.div
        style={{
          background: 'transparent',
          width: 300,
          borderRadius: 50,
          border: '1px solid rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(30px) saturate(120%)',
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          type: 'easyOut',
        }}
      >
        <motion.div
          style={{
            background:
              'linear-gradient(270deg, rgba(131,58,180,0.7) 0%, rgba(253,29,29,0.7) 50%, rgba(252,176,69,0.7) 100%)',
            boxShadow: '-1px 0px 8px -6px rgba(0,0,0,0.8) inset',
            width: 50,
            height: 50,
            borderRadius: 50,
            backdropFilter: 'blur(10px) saturate(200%) brightness(150%)',
          }}
          animate={{
            rotate: [0, 360, 0],
            x: [0, 250, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            type: 'Spring',
          }}
        />
      </motion.div>
    </Grid>
  );
};

export default LoadingAnimate;
