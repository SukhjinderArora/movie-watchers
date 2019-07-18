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
    let releaseDate, path, regex = /[^a-zA-Z0-9-_.]/g;
    const { data } = this.props;
    const placeHolderDiv = [classes.ImagePlaceHolder];

    if(this.state.imageLoaded) {
      placeHolderDiv.push(classes.ImageLoaded);
    }
    
    if (data.hasOwnProperty('release_date')) {
      releaseDate = (
        <>
          <span>Release Date:</span>
          <span>{data.release_date}</span>
        </>
      );
      // data.title.replace(regex, '-')
      path = `/movies/${data.title.replace(regex, '-')}/${data.id}`;
    } else {
      releaseDate = (
        <>
          <span>First air date:</span>
          <span>{data.first_air_date}</span>
        </>
      );
      // data.name.replace(regex, '-')
      path = `/tv/${data.name.replace(regex, '-')}/${data.id}`;
    }
         
    return (
      <div className={classes.Card} onDragStart={this.props.onDragStart}>
        <img 
          src={this.props.imgUrl}
          alt="Poster" 
          className={classes.Poster}
          onError={(e) => e.target.src = "https://via.placeholder.com/300x450?text=Image+not+available"}
          onLoad={this.onImageLoad} />
        {/* <div className={placeHolderDiv.join(' ')}></div> */}
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
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
