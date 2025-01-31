import VideoPlayer from "./components/video-player";

import "./style.css";

export const App = () => {
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    experimentalSvgIcons: true,
    playbackRates: [0.5, 1, 1.5, 2],
    controlBar: {
      skipButtons: {
        forward: 10,
        backward: 10,
      },
    },

    sources: [
      {
        src: "https://w3schools.com/html/mov_bbb.mp4",
        type: "video/mp4",
      },
    ],
  };

  return (
    <div>
      <VideoPlayer
        options={videoJsOptions}
        onReady={() => console.log("The video is ready to play")}
      />
      <div style={{ textAlign: "center" }}>
        <h2>This is a video player</h2>
      </div>
    </div>
  );
};
