import React from 'react'
import { useState, useRef } from "react";
import { FaVolumeMute, FaVolumeUp, FaDownload } from "react-icons/fa";

const VideoJaffaComponent = ({src}) => {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };
  return (
    <div className='relative'>
    <div className="relative w-full h-full">
            <video
                ref={videoRef}
                src={src}
                playsInline
                autoPlay
                loop
                muted={isMuted}
                className="w-full h-[25vh] object-cover lg:h-[100vh] "
            />
            <button
                onClick={toggleMute}
                className="absolute bottom-1 right-[1px] bg-white p-1 rounded-full"
            >
                {isMuted ? <FaVolumeMute size={8} /> : <FaVolumeUp size={8} />}
            </button>
        </div>
</div>
  )
}

export default VideoJaffaComponent