import { useEffect, useRef, useState } from "react";

const LiveVideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    // Play the video as soon as the page is loaded
    video.play();

    // Prevent pausing the video
    const preventPause = () => {
      if (video.paused) {
        video.play();
      }
    };

    video.addEventListener("pause", preventPause);

    return () => {
      video.removeEventListener("pause", preventPause);
    };
  }, [isPlaying]);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold text-center mb-4">
        Live Webinar Video
      </h1>

      <video
        onClick={handlePlay}
        ref={videoRef}
        src="/videoplayback.mp4"
        className="w-6/12 h-4/6 border border-spacing-3 rounded-md border-red-500"
        autoPlay
        playsInline
        style={{ width: "70%", height: "auto" }}
        // onClick={(e) => e.preventDefault()} // Disable user interaction form live video
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LiveVideoPlayer;
