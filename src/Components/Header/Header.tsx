import { Grid } from '@mui/material';
import { motion, useAnimation } from 'framer-motion/dist/framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { containerVariants } from '../../helper/AnimationStyle';
import backgroundImage from '../../Sourse/img/layered-steps-haikei2.svg';
import './Header.css';

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
      void control.start(containerVariants.show);
    }
  }, [control, textIsVisible]);

  return (
    <div
      style={{
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Grid justifyContent="flex-end" container>
        <Grid style={{ width: 450, marginTop: 150, marginRight: 50 }} item>
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate={control}
            className="mainText"
            ref={myRef}
            style={{ color: '#fff' }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, rerum.
          </motion.h1>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
