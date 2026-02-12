import video1 from "../Assets/ysabel-work/ysabel-1.mp4"
import video2 from "../Assets/ysabel-work/ysabel-2.mp4"
import video3 from "../Assets/ysabel-work/ysabel-3.mp4"
import video4 from "../Assets/ysabel-work/ysabel-4.mp4"
import video5 from "../Assets/ysabel-work/ysabel-5.mp4"
import video6 from "../Assets/ysabel-work/ysabel-6.mp4"

import video7 from "../Assets/VIDEOS/EMONA.mp4"
import video8 from "../Assets/VIDEOS/emona-2.mp4"

import video9 from "../Assets/VIDEOS/esports-1.mp4"


export const videoData = [
  {
    id: "ysabel-society",
    title: "ysabel society",
    textDescription: "",
    videos: [
      { url: video1, cols: 3 },
      { url: video2, cols: 3 },
      { url: video3, cols: 3 },
      { url: video4, cols: 3 },
      { url: video5, cols: 3 },
      { url: video6, cols: 3 },
    ]
  },
  {
    id: "sample-video-two",
    title: "Emona Brand",
    textDescription: "Description for the second video project.",
    videos: [
      { url: video7, cols: 2 },
      { url: video8, cols: 2 }

    ]
  },
  {
    id: "esports",
    title: "Esports",
    textDescription: "Description for the third video project with multiple videos.",
    videos: [
      { url: video9, cols: 1 },
    ]
  }
];
