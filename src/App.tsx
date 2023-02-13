import React, { useEffect, useState } from 'react';
import AboutMeComponent from './Components/AboutMe/AboutMeComponent';
import CanvasAnim from './Components/AboutMe/CanvasAnim';
import Header from './Components/Header/Header';
import MySkillsComponent from './Components/MySkills/MySkillsComponent';
import PhoneNotSupported from './Components/PhoneNotSupported/PhoneNotSupported';
import { LG, MD } from './config';
import LoadingAnimate from './helper/LoadingAnimate/LoadingAnimate';
import { useGetWidthDevice } from './Hooks/useGetWidthDevice';
import './index.css';

const App: React.FC = () => {
  const [isLoadingPage, setIsLoadingPage] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoadingPage(false);
    }, 0);
  }, []);

  const currentWidth = useGetWidthDevice();

  return (
    <div>
      {isLoadingPage ? (
        <LoadingAnimate />
      ) : currentWidth > MD ? (
        <>
          <Header />
          <MySkillsComponent />
          <AboutMeComponent />
          <CanvasAnim />
        </>
      ) : (
        <PhoneNotSupported />
      )}
    </div>
  );
};

export default App;
