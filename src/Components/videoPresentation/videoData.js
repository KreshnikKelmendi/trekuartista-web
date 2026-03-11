import video1 from "../Assets/ysabel-work/ysabel-1-1.mp4"
import video2 from "../Assets/ysabel-work/ysabel-2-2.mp4"
import video3 from "../Assets/ysabel-work/ysabel-3-3.mp4"
import video4 from "../Assets/ysabel-work/ysabel-4-4.mp4"
import video5 from "../Assets/ysabel-work/ysabel-5-5.mp4"
import video6 from "../Assets/ysabel-work/ysabel-6-6.mp4"

import video10 from "../Assets/komitetiOlimpik/kok-finall.mp4"
import video11 from "../Assets/VIDEOS/video-kok-3.mp4"
import video12 from "../Assets/floilKampanja/floil-4-4.mp4"


export const videoData = [
  {
    id: "ysabel-societyy",
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
    textDescription: "",
    videos: [
      
      { youtubeLink: "https://www.youtube.com/watch?v=PfFkVYfmIcU", cols: 3 },
      { youtubeLink: "https://www.youtube.com/watch?v=D2VwUSkkbZM", cols: 3 },
      { youtubeLink: "https://www.youtube.com/watch?v=mDO-VaL35Kw", cols: 3 },

    ]
  },
  {
    id: "esports",
    title: "Esports",
    textDescription: "",
    videos: [
      { youtubeLink: "https://www.youtube.com/watch?v=R2uDS3PzpGk", cols: 1 },
    ]
  },
  {
    id: "kok",
    title: "Olympic Commite of Kosovo",
    textDescription: "",
    videos: [
      { url: video10, cols: 1 },
      { url: video11, cols: 1 },

    ]
  },
  {
    id: "floil",
    title: "Floil",
    textDescription: "",
    videos: [
      { url: video12, cols: 1 },

    ]
  }
];
