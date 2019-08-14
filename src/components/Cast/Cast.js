import React from 'react';

import Carousel from '../UI/Carousel/Carousel';

import placeholderImage_154x231 from '../../assets/images/placeholder_154x231.png'
import { base_img_url } from '../../config';

import classes from './Cast.module.css';

const Cast = ({ castData }) => {
  const responsive = {
    0: { items: 2 },
    767: { items: 2 },
    1023: { items: 3 },
    1200: { items: 7 }
  };
  const castArray = castData.slice(0, 19).map(member => {
    const imageURL = member.profile_path ? `${base_img_url}w154${member.profile_path}` : placeholderImage_154x231;
    const characterName = (
      member.character.length > 17 ? member.character.substring(0, 16) + '...' : member.character
    );
    return (
      <div className={classes.cast} key={member.profile_path} onDragStart={(e) => e.preventDefault()}>
        <div className={classes.imageContainer}>
          <img src={imageURL} alt="Cast" className={classes.castImg} />
        </div>
        <div className={classes.castNameContainer}>
          <h3 className={classes.castName}>{member.name}</h3>
          <h3 className={classes.characterName}>{characterName}</h3>
        </div>
      </div>
    );
  });
  let cast = null;
  if (((castArray.length > 0 && castArray.length <= 5) && window.innerWidth >= 1000)) {
    cast = (
      <div className={classes.castContainer}>
        <h2 className={classes.title}>Cast</h2>
        {castArray}
      </div>
    );
  } else {
    cast = (
      <div className={classes.castContainer}>
        <h2 className={classes.title}>Cast</h2>
        <Carousel
          title="Cast"
          data={castArray}
          responsive={responsive} />
      </div>
    );
  }
  return cast;
};

export default Cast;
