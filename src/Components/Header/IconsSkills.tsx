import React from 'react';
import cPPIcon from '../../Sourse/img/iconsSkills/c++Icon.png';
import gitIcon from '../../Sourse/img/iconsSkills/gitIcon.png';
import graphQlIcon from '../../Sourse/img/iconsSkills/graphQlIcon.png';
import reactLogo from '../../Sourse/img/iconsSkills/reactIcon.png';
import typescriptLogo from '../../Sourse/img/iconsSkills/tsIcon.png';
import jsIcon from '../../Sourse/img/iconsSkills/jsIcon.png';
import IconLayout from './IconLayout';

const IconsSkills: React.FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <IconLayout
        logo={reactLogo}
        width={110}
        top={-50}
        left={30}
        rotate={30}
        filter="drop-shadow(1px 1px 1px #000) blur(2.3px)"
        duration={25}
      />
      <IconLayout logo={cPPIcon} width={120} top={-500} left={250} rotate={10} duration={60} filter="blur(4px)" />
      <IconLayout
        logo={typescriptLogo}
        width={40}
        top={-200}
        left={280}
        rotate={10}
        duration={30}
        filter="blur(2.2px)"
      />
      <IconLayout logo={gitIcon} width={60} top={-490} left={780} rotate={70} duration={45} filter="blur(2.5px)" />
      <IconLayout logo={jsIcon} width={180} top={-110} left={620} rotate={-10} duration={85} filter="blur(6px)" />
    </div>
  );
};

export default IconsSkills;
