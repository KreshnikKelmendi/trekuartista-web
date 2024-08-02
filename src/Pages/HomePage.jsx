import React, { lazy, Suspense, useEffect } from 'react';
import AboutUsOnHomePage from '../Components/FrontPage/AboutUsOnHomePage';
import Clients from '../Components/FrontPage/Clients';
import HorizontalSlider from '../Components/FrontPage/HorizontalSlider';
import Newest from '../Components/FrontPage/Newest';
import Quote from '../Components/FrontPage/Quote';
import TeamOnHomePage from '../Components/FrontPage/TeamOnHomePage';
import Office from '../Components/FrontPage/Office';
import ScrollText from '../Components/FrontPage/ScrollText';

// Import the VideoAnimation component with a different name
const VideoAnimation = lazy(() => import('../Components/FrontPage/VideoAnimation'));

const HomePage = () => {
  useEffect(() => {
    document.title = 'Trekuartista';
  }, []);
  
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <VideoAnimation />
      </Suspense>

      <AboutUsOnHomePage />
      <Clients />
      <HorizontalSlider type='spotlighted'/>
      <Quote />
      <Newest type='Newest' />
      <TeamOnHomePage />
      <ScrollText />
      <Office />
    </>
  );
};

export default HomePage;
