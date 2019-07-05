import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import classes from './Card.module.css';
import starRatingIcon from '../../../assets/images/star.svg';

class Card extends Component {
  state = {
    imageLoaded: false
  };

  onImageLoad = () => {
    this.setState({
      imageLoaded: true
    })
  };

  render() {
    const { data } = this.props;
    let placeHolderDiv = [classes.ImagePlaceHolder];
    if(this.state.imageLoaded) {
      placeHolderDiv.push(classes.ImageLoaded);
    }
    let releaseDate, path, regex = /\s/g;

    if(data.release_date) {
      releaseDate = (
        <>
          <span>Release Date:</span>
          <span>{data.release_date}</span>
        </>
      );
      path = `/movie/${data.title.replace(regex, '-')}/${data.id}`;
    } else {
      releaseDate = (
        <>
          <span>First air date:</span>
          <span>{data.first_air_date}</span>
        </>
      );
      path = `/tv/${data.name.replace(regex, '-')}/${data.id}`;
    }
         
    return (
      <div className={classes.Card} onDragStart={this.props.onDragStart}>
        <img 
          src={this.props.imgUrl}
          alt="tv-movie" 
          className={classes.Poster}
          onLoad={this.onImageLoad} />
        <div className={placeHolderDiv.join(' ')}></div>
        <div className={classes.Content}>
          <h1 className={classes.Title}>{data.title ? data.title : data.name}</h1>
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
            {/* <button className={classes.DetailBtn}>Details</button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
