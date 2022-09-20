import React, { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import MySkillsComponent from './Components/MySkills/MySkillsComponent';
import LoadingAnimate from './helper/LoadingAnimate/LoadingAnimate';
import './index.css';

const App: React.FC = () => {
  const [isLoadingPage, setIsLoadingPage] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoadingPage(false);
    }, 0);
  }, []);
  return (
    <div>
      {isLoadingPage ? (
        <LoadingAnimate />
      ) : (
        <>
          <Header />
          <MySkillsComponent />
        </>
      )}
    </div>
  );
};

export default App;
