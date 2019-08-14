import React from 'react';

import classes from './Trailer.module.css';

const Trailer = ({ videoKey }) => {
  let video = null;
  if (videoKey) {
    video = (
      <div className={classes.videoContainer}>
        <h2 className={classes.trailer}>Trailer</h2>
        <iframe className={classes.video}
          allowFullScreen
          frameBorder="0"
          title="Trailer"
          src={`https://www.youtube.com/embed/${videoKey}`}>
        </iframe>
      </div>
    );
  }
  return video;
};

export default Trailer;
