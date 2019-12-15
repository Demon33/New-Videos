import './VideoItem.css';
import React from 'react';

const VideoItem = ({video, onSelectedList}) => {
  const videoDetails = video.snippet;
  return (
    <div onClick={() => onSelectedList(video)} className="video-item item">
      <img
        className="ui image"
        alt={videoDetails.title}
        src={videoDetails.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{videoDetails.title}</div>        
      </div>
    </div>
  );
};

export default VideoItem;
