import React, { useState } from 'react';
import logo from "../../src/logo.svg";
import ReactPlayer from 'react-player';

const Aire = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [localVideo, setLocalVideo] = useState(null);  // State variable for local video file

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.match('video.*')) {
      const localVideoUrl = URL.createObjectURL(file);
      setLocalVideo(localVideoUrl);
      setVideoUrl('');  // Clear the YouTube URL if a local file is selected
    }
  };

  const handleUrlSubmit = () => {
    setLocalVideo(null);  // Clear the local video file if a YouTube URL is submitted
  };

  return (
    <div className="h-screen w-screen flex flex-col body">
      <div className="text-white text-center py-4 text-4xl font-bold" >
        Upload Your Video Here
      </div>

      <div className="flex-grow flex">
        <div className="w-[20%] h-screen bg-[#0c0c15] text-white p-4 overflow-y-hidden hide-scroll glassmorphism flex flex-col justify-between">
          {/* ... rest of your left sidebar code */}

          {/* Rectangle Cards at the bottom */}
          <div className="grid gap-4 mb-4">
            {['Bengali', 'Marathi', 'Gujarati'].map((language, index) => (
              <div
                key={index}
                className="bg-slate-800 p-4 rounded-lg"
              >
                <div className="text-lg font-bold mb-2">Language {index + 1}</div>
                <div>{language}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="w-[80%] gradient-05 flex flex-col justify-center items-center">
          {/* Video Player */}
          <div className="video-player-wrapper mb-4">
            <ReactPlayer url={localVideo || videoUrl} playing controls />
          </div>

          {/* Input field and Submit button for YouTube link */}
          <div className="flex items-center  ">
            <input
              type="text"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="Enter YouTube link here"
              className="rounded-lg p-2 w-[50%]"
            />
            <button onClick={handleUrlSubmit} className="ml-4 p-2 rounded-lg bg-green-500 text-white">
              Submit
            </button>
          </div>

          {/* Upload button for local video file */}
          <div className=' from-neutral-50 text-white px-2'>
            <input
              type="file"
              accept="video/*"
              onChange={handleFileUpload}
              className="rounded-lg p-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aire;
