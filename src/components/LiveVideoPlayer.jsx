import { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";

const YouTubePlayer = () => {
  const videoId = "1RDcjW4weYU"; // Your specific YouTube video ID

  const playerRef = useRef(null);
  const STORAGE_KEY = `youtube_video_${videoId}_time`;
  const STORAGE_EXPIRATION_MS = 7 * 24 * 60 * 60 * 1000;  // 7 days
  const [isMuted, setIsMuted] = useState(true);

  // Function to save the current playback time to localStorage
  const savePlaybackTime = () => {
    if (playerRef.current) {
      const currentTime = playerRef.current.getCurrentTime();
      const data = {
        time: currentTime,
        timestamp: Date.now(),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      console.log(`Saving playback time: ${currentTime}`);
    }
  };

  // Function to retrieve the saved playback time from localStorage
  const getSavedPlaybackTime = () => {
    const dataString = localStorage.getItem(STORAGE_KEY);
    if (dataString) {
      try {
        const data = JSON.parse(dataString);
        // Check if data is not expired
        if (Date.now() - data.timestamp < STORAGE_EXPIRATION_MS) {
          console.log(`Retrieved playback time: ${data.time}`);
          return parseFloat(data.time);
        } else {
          // Remove expired data
          localStorage.removeItem(STORAGE_KEY);
        }
      } catch (error) {
        console.error("Error parsing playback time from localStorage", error);
      }
    }
    return 0;
  };

  // YouTube Player options
  const opts = {
    height: "600",
    width: "900",
    playerVars: {
      autoplay: 1, // Autoplay enabled
      controls: 0, // Disable controls
      rel: 0, // Disable related videos
      modestbranding: 1, // Hide YouTube logo
      iv_load_policy: 3, // Disable annotations
      fs: 0, // Disable fullscreen button
      disablekb: 1, // Disable keyboard controls
      showinfo: 0, // Hide video info (title, uploader, etc.)
      mute: isMuted ? 1 : 0, // Controlled mute state
    },
  };

  // Handle player ready event
  const onReady = (event) => {
    playerRef.current = event.target;

    const savedTime = getSavedPlaybackTime();

    if (savedTime > 0) {
      event.target.seekTo(savedTime, true);
    }

    // Start playing the video (autoplay:1 should handle this)
    event.target.playVideo().catch((error) => {
      console.error("Autoplay failed:", error);
    });
  };

  // Handle player state changes
  const onStateChange = (event) => {
    // Save the current time when the video is paused or ended
    if (
      event.data === window.YT.PlayerState.PAUSED ||
      event.data === window.YT.PlayerState.ENDED
    ) {
      savePlaybackTime();
    }

    // Force the video to play if it's paused or ended
    if (
      event.data === window.YT.PlayerState.PAUSED ||
      event.data === window.YT.PlayerState.ENDED
    ) {
      setTimeout(() => {
        if (playerRef.current) {
          playerRef.current.playVideo();
        }
      }, 1000); // Delay to prevent rapid toggling
    }
  };

  // Save playback time periodically (every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      savePlaybackTime();
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Save playback time before the component unmounts or the page unloads
  useEffect(() => {
    const handleBeforeUnload = () => {
      savePlaybackTime();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      savePlaybackTime();
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // Function to enable sound
  const enableSound = () => {
    if (playerRef.current) {
      playerRef.current.unMute();
      setIsMuted(false);
    }
  };

  return (
    <>
      <h1 className="text-4xl font-bold mb-4">
        আমি মোঃ মোফাচ্ছেল হোসেন, আপনাকে জানাই স্বাগতম।
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="border-2 border-spacing-3 rounded-md border-red-500  relative ">
          <YouTube
            videoId={videoId}
            opts={opts}
            onReady={onReady}
            onStateChange={onStateChange}
          />
          {/* Overlay to prevent user interactions */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "transparent",
              zIndex: 1,
            }}
          ></div>
        </div>
        <div>
          <h1> Buy the product</h1>
        </div>
      </div>

      {/* Enable Sound Button */}
        {isMuted && (
          <button
            className="bg-green-500  text-white font-bold py-2 px-4 mx-auto rounded"
            onClick={enableSound}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Enable Sound
          </button>
        )}


    </>
  );
};

export default YouTubePlayer;
