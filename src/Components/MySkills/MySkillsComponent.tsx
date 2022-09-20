import React, { useEffect, useRef, useState } from 'react';
import './fontsForMySkills.css';
import graphQlIcon from '../../Sourse/img/iconsSkills/graphQlIcon.png';
import reactIcon from '../../Sourse/img/iconsSkills/reactIcon.png';
import tsIcon from '../../Sourse/img/iconsSkills/tsIcon.png';
import cPPIcon from '../../Sourse/img/iconsSkills/c++Icon.png';
import gitIcon from '../../Sourse/img/iconsSkills/gitIcon.png';
import muiIcon from '../../Sourse/img/iconsSkills/muiIcon.png';
import ShowIcons from './ShowIcons';
import { motion, useAnimation } from 'framer-motion';
import { containerVariants } from '../../helper/AnimationStyle';

export interface IIconsSkills {
  article: string;
  src: string;
}

const MySkillsComponent: React.FC = () => {
  const LeftIcons: IIconsSkills[] = [
    {
      article: 'React JS and TS',
      src: reactIcon,
    },
    {
      article: 'TypeScript',
      src: tsIcon,
    },
    {
      article: 'Graph QL and Appollo Client',
      src: graphQlIcon,
    },
  ];

  const RightIcons: IIconsSkills[] = [
    {
      article: 'Materi UI',
      src: muiIcon,
    },
    {
      article: 'GitHub, GitHub Desktop, GitLab',
      src: gitIcon,
    },
    {
      article: 'C++ and QT',
      src: cPPIcon,
    },
  ];

  const myRefSkills = useRef() as React.MutableRefObject<HTMLInputElement>;

  const [textIsVisible, setTextIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0];
      setTextIsVisible(entry.isIntersecting);
    });
    observer.observe(myRefSkills.current);
  }, []);

  const control = useAnimation();
  useEffect(() => {
    if (textIsVisible) {
      void control.start({ ...containerVariants.show });
    }
  }, [control, textIsVisible]);

  return (
    <div
      style={{
        backgroundColor: 'RGBA(28, 40, 51,1)',
        height: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
      }}
    >
      <ShowIcons icons={LeftIcons} />
      <motion.div
        style={{
          width: 550,
          height: 470,
          background: 'linear-gradient(-120deg, rgba(222,49,99,0.7231486344537815) 18%, rgba(222,49,99,0.3) 100%)',
          border: '5px solid rgb(222, 49, 99, 1)',
          borderRadius: '93% 102% 120% 86%',
          alignSelf: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        animate={{
          borderRadius: ['94% 102% 120% 86%', '123% 90% 96% 126%', '92% 138% 84% 143%', '93% 102% 120% 86%'],
          background: [
            'linear-gradient(-120deg, rgba(222,49,99,0.7231486344537815) 18%, rgba(222,49,99,0.3) 100%)',
            'linear-gradient(120deg, rgba(222,49,99,0.7231486344537815) 18%, rgba(222,49,99,0.3) 100%)',
            'linear-gradient(-120deg, rgba(222,49,99,0.7231486344537815) 18%, rgba(222,49,99,0.3) 100%)',
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          type: 'spring',
        }}
      >
        <motion.h1
          className={textIsVisible ? 'markerFont' : ''}
          style={{ color: '#eee', fontSize: 64, textTransform: 'uppercase' }}
          animate={control}
          variants={containerVariants}
          initial="hidden"
          whileHover="hoverDefault"
          whileTap="tapDefault"
          ref={myRefSkills}
        >
          My Skills
        </motion.h1>
      </motion.div>
      <ShowIcons icons={RightIcons} />
    </div>
  );
};

export default MySkillsComponent;
