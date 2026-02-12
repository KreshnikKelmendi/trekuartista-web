import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { videoData } from '../Components/videoPresentation/videoData';
import soundOnImage from '../Components/Assets/on.png';
import soundOffImage from '../Components/Assets/off.png';

const isVideo = (url) => url && (url.endsWith('.mp4') || url.endsWith('.webm'));

const getGridClass = (cols) => {
  switch (cols) {
    case 2: return 'lg:grid-cols-2';
    case 3: return 'lg:grid-cols-3';
    default: return 'lg:grid-cols-1';
  }
};

const Spinner = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-10">
    <div className="w-10 h-10 border-[3px] border-white/20 border-t-white rounded-full animate-spin" />
  </div>
);

const SingleVideoPage = () => {
  const { videoID } = useParams();
  const data = videoData?.find((v) => v.id === videoID);
  const [soundStates, setSoundStates] = useState({});
  const [loadingStates, setLoadingStates] = useState({});

  if (!data) {
    return <div className="font-custom text-2xl mt-5 text-center text-white bg-black min-h-screen pt-20">VIDEO NOT FOUND. BAD REQUEST!</div>;
  }

  const toggleSound = (index) => {
    setSoundStates((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const grouped = {};
  data.videos.forEach((v, i) => {
    const key = v.cols || 1;
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push({ ...v, originalIndex: i });
  });

  return (
    <div className="w-full bg-black min-h-screen px-4 lg:px-[55px] py-8">
      <h1 className="text-[35px] md:text-[33px] text-white font-bold font-custom leading-[47px] tracking-[1px]">
        {data.title}
      </h1>
      <p className="text-white text-lg font-custom1 mt-2 mb-8 lg:w-1/2">{data.textDescription}</p>

      {Object.entries(grouped).map(([cols, items]) => (
        <div key={cols} className={`grid grid-cols-1 ${getGridClass(Number(cols))} gap-4 mb-4`}>
          {items.map((item) => (
            <div key={item.originalIndex} className="relative w-full">
              {isVideo(item.url) ? (
                <>
                  {loadingStates[item.originalIndex] !== false && <Spinner />}
                  <video
                    className="w-full object-cover"
                    autoPlay
                    playsInline
                    loop
                    controls
                    muted={!soundStates[item.originalIndex]}
                    onCanPlay={() => setLoadingStates((prev) => ({ ...prev, [item.originalIndex]: false }))}
                    onWaiting={() => setLoadingStates((prev) => ({ ...prev, [item.originalIndex]: true }))}
                    onPlaying={() => setLoadingStates((prev) => ({ ...prev, [item.originalIndex]: false }))}
                  >
                    <source src={item.url} type={item.url.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
                  </video>
                  <button onClick={() => toggleSound(item.originalIndex)} className="absolute bottom-2 left-1">
                    <img
                      className="object-cover w-4 h-4"
                      src={soundStates[item.originalIndex] ? soundOnImage : soundOffImage}
                      alt={soundStates[item.originalIndex] ? 'Sound On' : 'Sound Off'}
                    />
                  </button>
                </>
              ) : item.url ? (
                <img src={item.url} alt="" className="w-full object-cover" />
              ) : null}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SingleVideoPage;
