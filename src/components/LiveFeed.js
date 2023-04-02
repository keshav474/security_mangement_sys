import React, { useEffect } from "react";

const LiveFeed = () => {
  const streamCamVideo = () => {
    var constraints = { audio: false, video: { width: 1280, height: 720 } };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function (mediaStream) {
        var video = document.querySelector("video");

        video.srcObject = mediaStream;
        video.onloadedmetadata = function (e) {
          video.play();
        };
      })
      .catch(function (err) {
        console.log(err.name + ": " + err.message);
      }); // always check for errors at the end.
      
      

  };

  useEffect(() => {
    streamCamVideo();
  }, []);

  return (
    <div>
      <video autoPlay={true} id="videoElement">
        
      </video>
    </div>
  );
};

export default LiveFeed;
