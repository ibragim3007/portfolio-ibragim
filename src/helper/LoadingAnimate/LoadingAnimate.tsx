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
          width: 400,
          borderRadius: 50,
          border: '1px solid rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(30px) saturate(120%)',
        }}
        animate={{
          rotate: [45, -45, 45],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
      >
        <motion.div
          style={{
            background:
              'linear-gradient(270deg, rgba(131,58,180,0.8) 0%, rgba(253,29,29,0.8) 50%, rgba(252,176,69,0.8) 100%)',
            boxShadow: '-1px 0px 8px -6px rgba(0,0,0,0.8) inset',
            width: 100,
            height: 100,
            borderRadius: 50,
            backdropFilter: 'blur(10px) saturate(200%) brightness(150%)',
          }}
          animate={{
            rotate: [0, 360, 0],
            x: [0, 300, 0],
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
