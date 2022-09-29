import { Grid, Popover, Typography } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { containerVariants } from '../../helper/AnimationStyle';
import { IIconsSkills } from './MySkillsComponent';

interface IconSkillProps {
  icon: IIconsSkills;
}

const IconSkill: React.FC<IconSkillProps> = ({ icon }) => {
  const myRefSkills = useRef(null);

  const [textIsVisible, setTextIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0];
      setTextIsVisible(entry.isIntersecting);
    });
    observer.observe(myRefSkills.current!);
  }, []);

  const control = useAnimation();
  useEffect(() => {
    if (textIsVisible) {
      void control.start({ x: 0, scale: 1, opacity: 1 });
    }
  }, [control, textIsVisible]);

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = (): void => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  return (
    <Grid item>
      <motion.img
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        style={{
          width: 120,
          cursor: 'pointer',
        }}
        variants={containerVariants}
        initial={{
          scale: 0.0,
          opacity: 0.0,
        }}
        animate={control}
        transition={{
          duration: 1.8,
          type: 'spring',
        }}
        src={icon.src}
        ref={myRefSkills}
      />
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>{icon.article}</Typography>
      </Popover>
    </Grid>
  );
};

export default IconSkill;
