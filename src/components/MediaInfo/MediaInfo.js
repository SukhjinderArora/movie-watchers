import React from 'react';

import { base_img_url } from '../../config';

import Card from '../UI/Card/Card';
import Carousel from '../UI/Carousel/Carousel';

import classes from './MediaInfo.module.css';

const MediaInfo = (props) => {
  const { data } = props;

  const responsive = {
    0: { items: 1 },
    767: { items: 2 },
    1023: { items: 3 },
    1200: { items: 4 }
  };

  const castArray = data.cast.slice(0, 19).map(member => {
    return (
      <div className={classes.cast} key={member.profile_path} onDragStart={(e) => e.preventDefault()}>
        <img src={base_img_url + 'w154' + member.profile_path} alt="Cast" onError={(e) => e.target.src = "https://via.placeholder.com/154x231?text=Image+not+available"} className={classes.castImg} />
        <h3 className={classes.castName}>{member.name}</h3>
        <h3 className={classes.characterName}>{member.character}</h3>
      </div>
    );
  });

  let cast = null;
  if (castArray.length > 0 && castArray.length <= 5) {
    cast = (
      <div className={classes.castContainer}>
        <h2 className={classes.title}>Cast</h2>
        {castArray}
      </div>
    );
  } else if(castArray.length >= 6) {
    const responsive = { 
      0: { items: 1 },
      767: { items: 2 }, 
      1023: { items: 3 }, 
      1200: { items: 7 } 
    };
    cast = (
      <Carousel 
        title="Cast" 
        data={castArray} 
        responsive={responsive}/>
    );
  }

  let video = null;
  if(data.videoKey) {
    video = (
      <div className={classes.videoContainer}>
        <h2 className={classes.trailer}>Trailer</h2>
        <iframe className={classes.video}
          allowFullScreen
          frameBorder="0"
          title="Trailer"
          src={`https://www.youtube.com/embed/${data.videoKey}`}>
        </iframe>
      </div>
    );
  }

  const recommendations = data.recommendations.map(dataItem => {
    return <Card 
             imgUrl={base_img_url + 'w300/' + dataItem.poster_path}
             key={dataItem.id}
             onDragStart={(e) => e.preventDefault()}
             data={dataItem} />;
  });

  return (
    <div className={classes.MediaInfo}>
      <div className={classes.FlexContainer}>
        <img src={base_img_url + 'w300/' + data.posterPath} alt="Poster" className={classes.poster} />
        <div className={classes.infoContainer}>
          <h1 className={classes.title}>{data.title}</h1>
          <p className={classes.overview}>{data.overview}</p>
          {
            data.other.map(dataItem => (
              <p className={classes.category} key={dataItem.name} >
                <span className={classes.categoryName}>{dataItem.name}: </span>
                <span className={classes.categoryValue}>{dataItem.value}</span>
              </p>
            ))
          }
        </div>
      </div>
      {cast}
      {video}
      <Carousel title="Recommendations" data={recommendations} responsive={responsive} />
    </div>
  );
};

export default MediaInfo;
