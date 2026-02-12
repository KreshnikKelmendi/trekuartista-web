import React, { useState, useRef, useEffect } from 'react';
import { videoData } from '../Components/videoPresentation/videoData';
import soundOnImage from '../Components/Assets/on.png';
import soundOffImage from '../Components/Assets/off.png';
import { FaExpand, FaWindowClose } from 'react-icons/fa';

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

const VideoPage = () => {
  const [soundStates, setSoundStates] = useState({});
  const [loadingStates, setLoadingStates] = useState({});
  const [fullScreen, setFullScreen] = useState(null);
  const fullScreenRef = useRef(null);

  const toggleSound = (key) => {
    setSoundStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const openFullScreen = (url, stateKey) => {
    setFullScreen({ url, stateKey });
  };

  const closeFullScreen = () => {
    setFullScreen(null);
  };

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') closeFullScreen(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div className="w-full bg-black min-h-screen px-4 lg:px-[55px] py-8">
      {videoData.map((section) => {
        const grouped = {};
        section.videos.forEach((v, i) => {
          const key = v.cols || 1;
          if (!grouped[key]) grouped[key] = [];
          grouped[key].push({ ...v, originalIndex: i });
        });

        return (
          <div key={section.id} className="mb-16">
            <h2 className="text-[35px] md:text-[41px] text-white font-bold font-custom leading-[47px] tracking-[1px]">
              {section.title}
            </h2>
            {section.textDescription && (
              <p className="text-white text-lg font-custom1 mt-3 lg:w-1/2">{section.textDescription}</p>
            )}
            <div className="mt-6">
              {Object.entries(grouped).map(([cols, items]) => (
                <div key={cols} className={`grid grid-cols-1 ${getGridClass(Number(cols))} gap-4 mb-32`}>
                  {items.map((item) => {
                    const stateKey = `${section.id}-${item.originalIndex}`;
                    return (
                      <div key={stateKey} className="relative w-full">
                        {isVideo(item.url) ? (
                          <>
                            {loadingStates[stateKey] !== false && <Spinner />}
                            <video
                              className="w-full object-cover"
                              autoPlay
                              playsInline
                              loop
                              muted={!soundStates[stateKey]}
                              onCanPlay={() => setLoadingStates((prev) => ({ ...prev, [stateKey]: false }))}
                              onWaiting={() => setLoadingStates((prev) => ({ ...prev, [stateKey]: true }))}
                              onPlaying={() => setLoadingStates((prev) => ({ ...prev, [stateKey]: false }))}
                            >
                              <source src={item.url} type="video/mp4" />
                            </video>
                            <button onClick={() => toggleSound(stateKey)} className="absolute bottom-2 left-1 z-20">
                              <img
                                className="object-cover w-4 h-4"
                                src={soundStates[stateKey] ? soundOnImage : soundOffImage}
                                alt={soundStates[stateKey] ? 'Sound On' : 'Sound Off'}
                              />
                            </button>
                            <button
                              onClick={() => openFullScreen(item.url, stateKey)}
                              className="absolute bottom-2 right-2 z-20 bg-white p-1 rounded-full hover:scale-110 transition-transform"
                            >
                              <FaExpand size={13} />
                            </button>
                          </>
                        ) : item.url ? (
                          <img src={item.url} alt="" className="w-full object-cover" />
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {fullScreen && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <button
            onClick={closeFullScreen}
            className="absolute top-4 right-4 z-50 bg-white p-2 rounded-full hover:bg-black hover:text-white transition-colors"
          >
            <FaWindowClose size={18} />
          </button>
          <video
            ref={fullScreenRef}
            className="w-full h-full object-contain"
            autoPlay
            playsInline
            loop
            controls
            muted={!soundStates[fullScreen.stateKey]}
          >
            <source src={fullScreen.url} type={fullScreen.url.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
          </video>
        </div>
      )}
    </div>
  );
};

export default VideoPage;
