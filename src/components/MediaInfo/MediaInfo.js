import React, { Component } from 'react';

import { base_img_url } from '../../config';

import Card from '../UI/Card/Card';
import Carousel from '../UI/Carousel/Carousel';
import placeholderImage from '../../assets/images/placeholder_img.png'
import placeholderImage_154x231 from '../../assets/images/placeholder_154x231.png'

import classes from './MediaInfo.module.css';

class MediaInfo extends Component {

  renderCast() {
    const responsive = {
      0: { items: 2 },
      767: { items: 2 },
      1023: { items: 3 },
      1200: { items: 7 }
    };
    const castArray = this.props.data.cast.slice(0, 19).map(member => {
      let image;
      if (!member.profile_path) {
        image = <img src={placeholderImage_154x231} alt="Cast" className={classes.castImg} />
      } else {
        image = <img src={base_img_url + 'w154' + member.profile_path} alt="Cast" className={classes.castImg} />
      }
      return (
        <div className={classes.cast} key={member.profile_path} onDragStart={(e) => e.preventDefault()}>
          {image}
          <h3 className={classes.castName}>{member.name}</h3>
          <h3 className={classes.characterName}>{member.character.length > 17 ? member.character.substring(0, 16) + '...' : member.character}</h3>
        </div>
      );
    });
    let cast = null;
    if ((castArray.length <= 5 && window.innerWidth >= 500) || (castArray.length === 0 && window.innerWidth < 500)) {
      cast = (
        <div className={classes.castContainer}>
          <h2 className={classes.subHeading}>Cast</h2>
          {castArray}
        </div>
      );
    } else {
      cast = (
        <div className={classes.castContainer}>
          <h2 className={classes.subHeading}>Cast</h2>
          <Carousel
            title="Cast"
            data={castArray}
            responsive={responsive} />
        </div>
      );
    }
    return cast;
  }

  renderVideo() {
    let video = null;
    if (this.props.data.videoKey) {
      video = (
        <div className={classes.videoContainer}>
          <h2 className={classes.trailer}>Trailer</h2>
          <iframe className={classes.video}
            allowFullScreen
            frameBorder="0"
            title="Trailer"
            src={`https://www.youtube.com/embed/${this.props.data.videoKey}`}>
          </iframe>
        </div>
      );
    }
    return video;
  }

  renderRecommendations() {
    const responsive = {
      0: { items: 3 },
      767: { items: 2 },
      1023: { items: 3 },
      1200: { items: 4 }
    };
    let recommendationsCarousel = null;
    if (this.props.data.recommendations.length > 0) {
      const recommendations = this.props.data.recommendations.map(dataItem => {
        return <Card
          imgUrl={base_img_url + 'w300/' + dataItem.poster_path}
          key={dataItem.id}
          onDragStart={(e) => e.preventDefault()}
          onCardClickHandler={this.props.onCardClickHandler}
          data={dataItem} />;
      });
      recommendationsCarousel = (
        <div>
          <h2 className={classes.subHeading}>Recommendations</h2>
          <Carousel title="Recommendations" data={recommendations} responsive={responsive} />
        </div>
      );
    }
    return recommendationsCarousel;
  }

  renderImage() {
    let image;
    if (!this.props.data.posterPath) {
      image = <img src={placeholderImage} alt="Poster" className={classes.poster} />
    } else {
      image = <img src={base_img_url + 'w300/' + this.props.data.posterPath} alt="Poster" className={classes.poster} />;
    }
    return image;
  }

  render() {
  const { data } = this.props;
  return (
    <div className={classes.MediaInfo}>
      <div className={classes.FlexContainer}>
        {this.renderImage()}
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
      {this.renderCast()}
      {this.renderVideo()}
      {this.renderRecommendations()}
    </div>
  );
  }
}

export default MediaInfo;
