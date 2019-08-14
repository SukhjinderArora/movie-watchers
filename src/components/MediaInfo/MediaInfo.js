import React from 'react';

import { base_img_url } from '../../config';
import placeholderImage from '../../assets/images/placeholder_img.png'

import Cast from '../Cast/Cast';
import Trailer from '../Trailer/Trailer';
import Reviews from '../Reviews/Reviews';
import Recommendations from '../Recommendations/Recommendations';

import classes from './MediaInfo.module.css';

const MediaInfo = ({ data }) => {
  const imageURL = data.posterPath ? `${base_img_url}w300/${data.posterPath}` : placeholderImage;
  return (
    <div className={classes.MediaInfo}>
      <div className={classes.FlexContainer}>
        <img src={imageURL} alt="Poster" className={classes.poster} />
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
      <Cast castData={data.cast} />
      <Trailer videoKey={data.videoKey} />
      <Reviews reviewsList={data.reviews}/>
      <Recommendations recommendations={data.recommendations} />
    </div>
  );
};

export default MediaInfo;
