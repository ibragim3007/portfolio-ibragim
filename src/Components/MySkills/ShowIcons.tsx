import { Grid } from '@mui/material';
import React from 'react';
import IconSkill from './IconSkill';
import { IIconsSkills } from './MySkillsComponent';

interface ShowIconsProps {
  icons: IIconsSkills[];
}

const ShowIcons: React.FC<ShowIconsProps> = ({ icons }) => {
  return (
    <Grid justifyContent="center" alignItems="center" spacing={9} container direction="column">
      {icons.map((icon, index) => {
        return <IconSkill key={index} icon={icon} />;
      })}
    </Grid>
  );
};

export default ShowIcons;
