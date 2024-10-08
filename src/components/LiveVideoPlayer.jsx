// auto paly with sound and finally done

import { useEffect, useRef } from "react";
import YouTube from "react-youtube";

const YouTubePlayer = () => {
  const videoId = "1RDcjW4weYU"; // Your specific YouTube video ID

  const playerRef = useRef(null);
  const STORAGE_KEY = `youtube_video_${videoId}_time`;
  const STORAGE_EXPIRATION_MS = 2 * 60 * 60 * 1000; // 2 hours

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
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0, // Autoplay disabled
      controls: 0, // Disable controls
      rel: 0, // Disable related videos
      modestbranding: 1, // Hide YouTube logo
      iv_load_policy: 3, // Disable annotations
      fs: 0, // Disable fullscreen button
      disablekb: 1, // Disable keyboard controls
      showinfo: 0, // Hide video info (title, uploader, etc.)
      mute: 0, // Attempt to start unmuted
    },
  };

  // Handle player ready event
  const onReady = (event) => {
    playerRef.current = event.target;

    const savedTime = getSavedPlaybackTime();

    if (savedTime > 0) {
      event.target.seekTo(savedTime, true);
    }

    // Attempt to unmute (will not autoplay)
    event.target.unMute();
  };

  // Handle player state changes
  const onStateChange = (event) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      // Disable user interactions only when the video starts playing
      playerRef.current.getIframe().style.pointerEvents = "none";
    }
    // // Automatically resume video if paused
    // if (event.data === window.YT.PlayerState.PAUSED) {
    //   playerRef.current.playVideo(); // Resume video when paused
    // }
    // Save the current time when the video is paused or ended
    if (
      event.data === window.YT.PlayerState.PAUSED ||
      event.data === window.YT.PlayerState.ENDED
    ) {
      savePlaybackTime();
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

  return (
    <>
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={onReady}
        onStateChange={onStateChange}
      />
    </>
  );
};

export default YouTubePlayer;
