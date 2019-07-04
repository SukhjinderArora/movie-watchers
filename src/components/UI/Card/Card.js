import React, { Component } from 'react'

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
    let placeHolderDiv = [classes.ImagePlaceHolder];
    if(this.state.imageLoaded) {
      placeHolderDiv.push(classes.ImageLoaded);
    }
    let releaseDate;

    if(this.props.data.release_date) {
      releaseDate = (
        <>
          <span>Release Date:</span>
          <span>{this.props.data.release_date}</span>
        </>
      );
    } else {
      releaseDate = (
        <>
          <span>First air date:</span>
          <span>{this.props.data.first_air_date}</span>
        </>
      );
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
          <h1 className={classes.Title}>{this.props.data.title ? this.props.data.title : this.props.data.name}</h1>
          <div>
            <p className={classes.Rating}>
              <span>Rating:</span>
              <span>
                <span>{this.props.data.vote_average}/10</span>
                <img src={starRatingIcon} alt="Rating icon" className={classes.RatingIcon} />
              </span>
            </p>
            <p className={classes.ReleaseDate}>
              {releaseDate}
            </p>
            <button className={classes.DetailBtn}>Details</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
