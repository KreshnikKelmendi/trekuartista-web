import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { videoData } from '../Components/videoPresentation/videoData';
import soundOnImage from '../Components/Assets/on.png';
import soundOffImage from '../Components/Assets/off.png';

const isVideo = (url) => url && (url.endsWith('.mp4') || url.endsWith('.webm'));
const isYouTubeUrl = (url) => url && (url.includes('youtube.com') || url.includes('youtu.be'));
const getYouTubeEmbedUrl = (url) => {
  if (!url) return '';
  const embedMatch = url.match(/youtube\.com\/embed\/([^?&/]+)/);
  if (embedMatch?.[1]) {
    const id = embedMatch[1];
    return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&playsinline=1&rel=0&loop=1&playlist=${id}`;
  }
  const shortMatch = url.match(/youtu\.be\/([^?&/]+)/);
  if (shortMatch?.[1]) {
    const id = shortMatch[1];
    return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&playsinline=1&rel=0&loop=1&playlist=${id}`;
  }

  const watchMatch = url.match(/[?&]v=([^&]+)/);
  if (watchMatch?.[1]) {
    const id = watchMatch[1];
    return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&playsinline=1&rel=0&loop=1&playlist=${id}`;
  }

  return '';
};

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
          {items.map((item) => {
            const sourceUrl = item.youtubeLink || item.url;
            const youtubeEmbedUrl = getYouTubeEmbedUrl(sourceUrl);

            return (
            <div key={item.originalIndex} className="relative w-full">
              {isVideo(sourceUrl) ? (
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
                    <source src={sourceUrl} type={sourceUrl.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
                  </video>
                  <button onClick={() => toggleSound(item.originalIndex)} className="absolute bottom-2 left-1">
                    <img
                      className="object-cover w-4 h-4"
                      src={soundStates[item.originalIndex] ? soundOnImage : soundOffImage}
                      alt={soundStates[item.originalIndex] ? 'Sound On' : 'Sound Off'}
                    />
                  </button>
                </>
              ) : isYouTubeUrl(sourceUrl) && youtubeEmbedUrl ? (
                <>
                  {loadingStates[item.originalIndex] !== false && <Spinner />}
                  <iframe
                    src={youtubeEmbedUrl}
                    title={`${data.title}-${item.originalIndex}`}
                    className="w-full aspect-video object-cover"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    onLoad={() => setLoadingStates((prev) => ({ ...prev, [item.originalIndex]: false }))}
                  />
                </>
              ) : sourceUrl ? (
                <img src={sourceUrl} alt="" className="w-full object-cover" />
              ) : null}
            </div>
          )})}
        </div>
      ))}
    </div>
  );
};

export default SingleVideoPage;
