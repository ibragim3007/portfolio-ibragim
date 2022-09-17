import React, { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import LoadingAnimate from './helper/LoadingAnimate/LoadingAnimate';
import './index.css';

const App: React.FC = () => {
  const [isLoadingPage, setIsLoadingPage] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoadingPage(false);
    }, 1000);
  }, []);
  return (
    <div>
      {isLoadingPage ? (
        <LoadingAnimate />
      ) : (
        <>
          <Header /> <h1>asd</h1>
        </>
      )}
    </div>
  );
};

export default App;
