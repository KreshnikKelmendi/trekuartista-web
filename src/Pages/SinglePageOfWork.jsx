import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ourWorks } from '../Components/Works/workData';
import transition from '../transition';
// import FourthPart from './FourthPart';
import ThirdPart from './ThirdPart';
import FifthPart from './FifthPart';
import FirstPart from './FirstPart';
import SecondPart from './SecondPart';

const SinglePageOfWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [soundStates, setSoundStates] = useState({});
  const { workID } = useParams();
  const work = ourWorks?.find((ad) => ad.id == workID);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  if (!work) {
    return <div className='font-custom text-2xl mt-5 justify-center items-center text-center'>WORK NOT FOUND. BAD REQUEST!</div>;
  }

  const { workName, secondWorkName, textDescription, firstSinglePhoto, secondSinglePhoto, thirdSinglePhoto, fourthSinglePhoto, fifthSinglePhoto, sixthSinglePhoto, seventhSinglePhoto, eightSinglePhoto, ninthSinglePhoto, tenthSinglePhoto, eleventhSinglePhoto, twelfthSinglePhoto, thirteenSinglePhoto, fourteenthSinglePhoto, fifteenthSinglePhoto, sixteenthSinglePhoto, eighteenthSinglePhoto, seventeenthSinglePhoto, nineteenthSinglePhoto, twentySinglePhoto, twentyOneSinglePhoto, secondDescription, thirdDescription, testPhoto4 } = work;

  const firstMediaItems = [firstSinglePhoto, secondSinglePhoto, thirdSinglePhoto, testPhoto4];
  const secondMediaItems = [fourthSinglePhoto].filter(Boolean);
  const thirdMediaItems = [fifthSinglePhoto, sixthSinglePhoto];
  // const fourthMediaItems = [seventhSinglePhoto];
  const fifthMediaItems = [
    seventhSinglePhoto,
    eightSinglePhoto,
    ninthSinglePhoto,
    tenthSinglePhoto,
    eleventhSinglePhoto,
    twelfthSinglePhoto,
    thirteenSinglePhoto,
    fourteenthSinglePhoto,
    fifteenthSinglePhoto,
    sixteenthSinglePhoto,
    seventeenthSinglePhoto,
    eighteenthSinglePhoto,
    nineteenthSinglePhoto,
    twentySinglePhoto,
    twentyOneSinglePhoto
  ].filter(Boolean);

  const toggleSound = (index) => {
    setSoundStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div>
      <div className="py-0 md:py-[50px] bg-black lg:px-[50px]">
        <div className="flex flex-col p-4 lg:p-0">
          <p className="text-[35px] md:text-[33px] text-white font-bold font-custom leading-[47px] tracking-[1px] lg:tracking-[0px]">
            {workName}
            <p className='font-custom1 mt-[11px] text-lg text-white w-[207px] font-normal leading-[24px]'></p>
          </p>
          <span className="ml-0 pt-2 lg:mt-0 w-full lg:w-fit 2xl:w-1/2 text-lg font-medium font-custom1 text-white">
            {textDescription}
          </span>
        </div>
      </div>

      <FirstPart
        firstMediaItems={firstMediaItems}
        secondWorkName={secondWorkName}
        textDescription={textDescription}
        soundStates={soundStates}
        toggleSound={toggleSound}
        workID={workID}
      />

      <SecondPart
        secondMediaItems={secondMediaItems}
        secondWorkName={secondWorkName}
        secondDescription={secondDescription}
        soundStates={soundStates}
        toggleSound={toggleSound}
      />

      <ThirdPart
        thirdMediaItems={thirdMediaItems}
        secondWorkName={secondWorkName}
        thirdDescription={thirdDescription}
        soundStates={soundStates}
        toggleSound={toggleSound}
      />

      <FifthPart
        fifthMediaItems={fifthMediaItems}
        secondWorkName={secondWorkName}
        textDescription={textDescription}
        soundStates={soundStates}
        toggleSound={toggleSound}
        workID={workID}
      />
    </div>
  );
};

export default transition(SinglePageOfWork);
