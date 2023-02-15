import { Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import backgroundImage from '../../Sourse/img/mobileNotGood.png';
const PhoneNotSupported: React.FC = () => {
  return (
    <Grid
      container
      alignItems="center"
      style={{ minHeight: '100vh', backgroundImage: `url(${backgroundImage})`, padding: 10 }}
    >
      <motion.div
        initial={{ y: -700 }}
        animate={{ y: 30 }}
        transition={{ staggerChildren: 1.5, duration: 1.6, type: 'spring' }}
      >
        <Grid
          item
          style={{
            background: 'rgba(0, 0, 0, .6)',
            borderRadius: 20,
            padding: 5,
            backdropFilter: 'blur(80px) saturate(160%)',
          }}
        >
          <Typography variant="h5" style={{ color: '#fff', padding: 20, lineHeight: 1.7, letterSpacing: 1.4 }}>
            <div style={{ color: '#08cf9ad6', fontSize: 62 }}>Sorry... </div>{' '}
            <span style={{ color: '#ffffffe8', letterSpacing: 0.8, wordSpacing: 0.7 }}>
              But your device is not supported
            </span>
            <span style={{ color: '#ff75be' }}> :(</span>
            <motion.div
              initial={{
                x: -500,
              }}
              animate={{
                x: 0,
              }}
              transition={{
                duration: 2,
                type: 'spring',
                delay: 0.4,
              }}
              style={{ marginTop: 20 }}
            >
              <a
                style={{
                  color: '#ffd3d3',
                  padding: '6px 15px',
                  border: '3px solid #08cf9ad6',
                  borderRadius: 10,
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
                target="_blank"
                href="https://github.com/ibragim3007"
                rel="noreferrer"
              >
                My GitHub
              </a>
            </motion.div>
          </Typography>
        </Grid>
        <Typography variant="h6" style={{ color: '#ffffff', marginTop: 80 }}>
          You have to use more width screen
        </Typography>
      </motion.div>
    </Grid>
  );
};

export default PhoneNotSupported;
