import React from 'react';
import './VideoPlayer.css';

const VideoPlayer = () => {
  return (
    <section className="video-container">
      <video controls>
        <source src="/sample.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-description">
        <h1>India vs Bangladesh - 1st T20I</h1>
        <p>Watch the live stream of the first T20I match between India and Bangladesh.</p>
      </div>
    </section>
  );
};

export default VideoPlayer;
