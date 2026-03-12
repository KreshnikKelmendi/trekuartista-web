import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ourWorks } from '../Components/Works/workData';
import transition from '../transition';
// import FourthPart from './FourthPart';
import ThirdPart from './ThirdPart';
import FifthPart from './FifthPart';
import FirstPart from './FirstPart';
import SecondPart from './SecondPart';
import YsabelDesign from '../Components/Works/YsabelDesign';


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

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [workID]);

  if (!work) {
    return <div className='font-custom text-2xl mt-5 justify-center items-center text-center'>WORK NOT FOUND. BAD REQUEST!</div>;
  }

  const { workName, secondWorkName, textDescription, firstSinglePhoto, secondSinglePhoto, thirdSinglePhoto, fourthSinglePhoto, fifthSinglePhoto, sixthSinglePhoto, seventhSinglePhoto, eightSinglePhoto, ninthSinglePhoto, tenthSinglePhoto, eleventhSinglePhoto, twelfthSinglePhoto, thirteenSinglePhoto, fourteenthSinglePhoto, fifteenthSinglePhoto, sixteenthSinglePhoto, eighteenthSinglePhoto, seventeenthSinglePhoto, nineteenthSinglePhoto, twentySinglePhoto, twentyOneSinglePhoto, twentyTwoSinglePhoto, twentyThreeSinglePhoto, twentyFourSinglePhoto, secondDescription, thirdDescription, testPhoto4, youtubeLink, youtubeVideos = [] } = work;

  const getYouTubeEmbedUrl = (url) => {
    if (!url) return "";
    if (url.includes("youtube.com/embed/")) return url;

    const shortMatch = url.match(/youtu\.be\/([^?&/]+)/);
    if (shortMatch?.[1]) return `https://www.youtube.com/embed/${shortMatch[1]}`;

    const watchMatch = url.match(/[?&]v=([^&]+)/);
    if (watchMatch?.[1]) return `https://www.youtube.com/embed/${watchMatch[1]}`;

    return url;
  };

  const getYouTubeAutoplayLoopUrl = (url) => {
    const embedUrl = getYouTubeEmbedUrl(url);
    if (!embedUrl) return "";

    const idMatch = embedUrl.match(/embed\/([^?&/]+)/);
    const videoId = idMatch?.[1] || "";
    const params = `autoplay=1&mute=1&playsinline=1&rel=0${videoId ? `&loop=1&playlist=${videoId}` : ""}`;
    return `${embedUrl}${embedUrl.includes('?') ? '&' : '?'}${params}`;
  };

  const youtubeItems = Array.isArray(youtubeVideos) ? youtubeVideos.filter((item) => item?.url) : [];
  const hasYoutubeGallery = youtubeItems.length > 0;
  const youtubeEmbedUrl = getYouTubeEmbedUrl(youtubeLink);
  const youtubeAutoplayUrl = getYouTubeAutoplayLoopUrl(youtubeLink);

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
    twentyOneSinglePhoto,
    twentyTwoSinglePhoto,
    twentyThreeSinglePhoto,
    twentyFourSinglePhoto
  ].filter(Boolean);

  const toggleSound = (index) => {
    setSoundStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  if (workID == 28) {
    return (
      <YsabelDesign
        workName={workName}
        textDescription={textDescription}
        secondDescription={secondDescription}
        thirdDescription={thirdDescription}
        firstMediaItems={firstMediaItems}
        secondMediaItems={secondMediaItems}
        thirdMediaItems={thirdMediaItems}
        fifthMediaItems={fifthMediaItems}
        soundStates={soundStates}
        toggleSound={toggleSound}
      />
    );
  }

  if (hasYoutubeGallery) {
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

        <div className="bg-black px-3 lg:px-[50px] pb-8 lg:pb-20 pt-8 lg:pt-0">
          <div className="space-y-16 lg:space-y-20">
            {youtubeItems.map((videoItem, index) => (
              <div
                key={`${videoItem.url}-${index}`}
                className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start"
              >
                <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="w-full aspect-video overflow-hidden bg-black">
                    <iframe
                      src={getYouTubeAutoplayLoopUrl(videoItem.url)}
                      title={videoItem.title || `${workName} video ${index + 1}`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-1" : ""} flex items-center justify-center h-full`}>
                  <div className="2xl:max-w-[520px]">
                    {videoItem.title && (
                      <p className="font-custom4 text-white/70 text-xl lg:text-3xl leading-tight mb-3">
                        {videoItem.title}
                      </p>
                    )}
                    {videoItem.description && (
                      <p className="font-custom1 text-white/90 text-base lg:text-lg leading-relaxed">
                        {videoItem.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (youtubeEmbedUrl) {
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
        <div className="bg-black px-3 lg:px-[50px] pb-8 lg:pb-12">
          <div className="w-full aspect-video overflow-hidden bg-black">
            <iframe
              src={youtubeAutoplayUrl}
              title={workName}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    );
  }

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
        workID={workID}
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
