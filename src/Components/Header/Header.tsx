import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import { motion, useAnimation } from 'framer-motion/dist/framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { containerVariants } from '../../helper/AnimationStyle';
import myself from '../../Sourse/img/assets/myself.png';
import backgroundImage from '../../Sourse/img/bgBlack.png';
import bgMove from '../../Sourse/img/bgMove1.png';
import './Header.css';
import IconsSkills from './IconsSkills';
import InformationAboutMe from './InformationAboutMe';

const Header: React.FC = () => {
  const myRef = useRef();

  const [textIsVisible, setTextIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0];
      setTextIsVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current!);
  }, []);

  const control = useAnimation();
  useEffect(() => {
    if (textIsVisible) {
      void control.start({ ...containerVariants.show, y: -30 });
    }
  }, [control, textIsVisible]);

  return (
    <Grid
      style={{
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <motion.img
        variants={containerVariants}
        initial={{
          x: -850,
          rotateY: -150,
          opacity: 0,
        }}
        animate={{
          x: -0,
          rotateY: 0,
          opacity: 1,
        }}
        transition={{
          duration: 2.2,
        }}
        style={{
          height: '100vh',
          position: 'absolute',
          zIndex: 0,
        }}
        src={bgMove}
      />
      <Container>
        <Grid style={{ height: '100vh', alignContent: 'center', paddingTop: 140 }} container>
          <Grid xs={6} item justifyItems="center">
            <div
              style={{
                perspective: '1000px',
                perspectiveOrigin: '50% 50%',
              }}
            >
              <motion.Grid
                initial={{
                  opacity: 0,
                }}
                animate={{
                  x: [0, 10, 0],
                  rotateY: [0, -6, 0],
                }}
                transition={{
                  repeat: 'Infinity',
                  opacity: 1,
                  delay: 0.3,
                  duration: 1.5,
                  type: 'spring',
                  stiffness: 80,
                }}
                style={{
                  zIndex: 2100,
                  minWidth: 450,
                  height: 360,
                  position: 'absolute',
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 0 36px rgb(0 0 0 / 30%)',
                  borderRadius: '40% 33% 13% 40%',
                  backdropFilter: 'blur(50px) saturate(110%) brightness(110%)',
                }}
              />
            </div>
            <motion.img
              variants={containerVariants}
              initial="hidden"
              animate={control}
              style={{ maxWidth: 450, minWidth: 300, filter: 'drop-shadow(5px 5px 5px #000)' }}
              src={myself}
              alt="me"
              whileHover="hoverDefault"
              whileTap="tapDefault"
            />
            <InformationAboutMe />
          </Grid>
          <Grid xs={6} item style={{ marginTop: 70 }}>
            <Grid style={{ maxWidth: 450 }} item>
              <motion.h1
                variants={containerVariants}
                initial="hidden"
                animate={control}
                className="mainText"
                ref={myRef}
                style={{ color: '#fff' }}
                whileHover="hoverDefault"
                whileTap="tapDefault"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, rerum.
              </motion.h1>
              <Grid style={{ marginTop: 50, marginBottom: 0 }}>
                <h1 className="textPrinting">
                  <span style={{ color: 'rgb(76, 201, 176)' }}>std</span>
                  <span style={{ color: 'rgb(212, 212, 212)' }}>::</span>
                  <span style={{ color: 'rgb(148, 219, 253)' }}>cout</span>
                  <span style={{ color: 'rgb(220, 220, 170)' }}>{' << '}</span>
                  <span style={{ color: ' rgb(205, 144, 105)' }}>{'"Hello world!"'}</span>
                  <span style={{ color: 'rgb(212, 212, 212)' }}>;</span>
                </h1>
              </Grid>
            </Grid>
          </Grid>
          <IconsSkills />
        </Grid>
      </Container>
    </Grid>
  );
};

export default Header;
