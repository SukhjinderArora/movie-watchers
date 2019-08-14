import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Image from '../Image/Image';
import starRatingIcon from '../../../assets/images/star.svg';

import classes from './Card.module.css';

const Card = (props) => {
  let releaseDate, path, title, regex = /[^a-zA-Z0-9-_.]/g;
  const { data } = props;
  
  const onCardClickHandler = () => {
    props.history.push(path);
  };
  
  if (data.hasOwnProperty('release_date')) {
    title = data.title;
    releaseDate = (
      <>
        <span>Release Date:</span>
        <span>{data.release_date}</span>
      </>
    );
    path = `/movies/${data.title.replace(regex, '-')}/${data.id}`;
  } else {
    title = data.name;
    releaseDate = (
      <>
        <span>First air date:</span>
        <span>{data.first_air_date}</span>
      </>
    );
    path = `/tv/${data.name.replace(regex, '-')}/${data.id}`;
  }

  return (
    <div className={classes.Card} onDragStart={props.onDragStart} onClick={onCardClickHandler}>
      <Image imgUrl={props.imgUrl} alt="Poster" />
      <div className={classes.Content}>
        <h1 className={classes.Title}>{title}</h1>
        <div>
          <p className={classes.Rating}>
            <span>Rating:</span>
            <span>
              <span>{data.vote_average}/10</span>
              <img src={starRatingIcon} alt="Rating icon" className={classes.RatingIcon} />
            </span>
          </p>
          <p className={classes.ReleaseDate}>
            {releaseDate}
          </p>
          <Link to={path} className={classes.DetailBtn}>Details</Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Card);
