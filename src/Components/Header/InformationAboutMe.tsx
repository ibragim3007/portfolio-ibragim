import { motion } from 'framer-motion';
import React from 'react';
import { dateOfMyBirhtDate } from '../../config';
import { CountQuantityOfYears } from '../../helper/CountYears';
import './Header.css';

const InformationAboutMe: React.FC = () => {
  return (
    <>
      <motion.div
        className={'infoMySelfTest'}
        style={{
          color: '#eee',
          fontSize: 28,
          position: 'relative',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          borderRadius: 30,
          backdropFilter: 'blur(50px) saturate(150%) brightness(160%)',
          padding: '6px 25px',
          top: -100,
          cursor: 'pointer',
          display: 'inline-block',
        }}
        whileHover={{
          x: [100, 90, 100],
          transition: {
            repeat: Infinity,
            duration: 1,
          },
        }}
        initial={{
          opacity: 0,
          x: -280,
        }}
        animate={{
          opacity: 1,
          x: 100,
        }}
        transition={{
          delay: 1.0,
          duration: 2,
          type: 'spring',
        }}
      >
        Ibragimov Ibragim
      </motion.div>
      <motion.div
        className={'infoMySelfTest'}
        style={{
          color: '#eee',
          fontSize: 28,
          position: 'relative',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          borderRadius: 30,
          backdropFilter: 'blur(50px) saturate(150%) brightness(160%)',
          padding: '6px 24px',
          top: -40,
          cursor: 'pointer',
          display: 'inline-block',
        }}
        whileHover={{
          x: [10, 0, 10],
          transition: {
            repeat: Infinity,
            duration: 1,
          },
        }}
        initial={{
          opacity: 0,
          x: -250,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 1.2,
          duration: 2,
          type: 'spring',
        }}
      >
        {CountQuantityOfYears(dateOfMyBirhtDate)} years
      </motion.div>
      <motion.div
        className={'infoMySelfTest'}
        style={{
          color: '#eee',
          fontSize: 28,
          position: 'relative',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          borderRadius: 30,
          backdropFilter: 'blur(50px) saturate(150%) brightness(160%)',
          padding: '6px 24px',
          top: -25,
          zIndex: 9990,
          cursor: 'pointer',
          display: 'inline-block',
        }}
        whileHover={{
          x: [50, 60, 50],
          transition: {
            repeat: Infinity,
            duration: 1,
          },
        }}
        initial={{
          opacity: 0,
          x: -290,
        }}
        animate={{
          opacity: 1,
          x: 60,
        }}
        transition={{
          delay: 1.4,
          duration: 2.2,
          type: 'spring',
        }}
      >
        Frontend Developer
      </motion.div>
    </>
  );
};

export default InformationAboutMe;
