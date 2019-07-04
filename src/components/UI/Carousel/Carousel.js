import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import Card from '../Card/Card';
import { base_img_url } from '../../../config';
import classes from './Carousel.module.css';

import leftArrowIcon from '../../../assets/images/left-arrow.svg'
import rightArrowIcon from '../../../assets/images/right-arrow.svg'

class Carousel extends Component {
  handleOnDragStart = e => e.preventDefault();

  responsive = {
    0: { items: 1 },
    767: { items: 2},
    1023: { items: 3 },
    1200: { items: 4}
  };
  
  render() {
    const imageUrl = base_img_url + 'w300/';
    const data = this.props.data.data.map(data => {
      return <Card
      imgUrl={imageUrl + data.poster_path}
      key={data.id}
      onDragStart={this.handleOnDragStart}
      data={data} />
    });

    return (
      <div className={classes.Carousel}>
        <h2 className={classes.title}>{this.props.data.title}</h2>
        <AliceCarousel 
          dotsDisabled={true}
          buttonsDisabled={true}
          mouseDragEnabled 
          items={data}    
          responsive={this.responsive}
          infinite={true}
          disableAutoPlayOnAction={true}
          stopAutoPlayOnHover={true}
          ref={(el) => (this.Carousel = el)} />
        <button 
          onClick={() => this.Carousel._slidePrev()} 
          className={[classes.slideChangeBtn, classes.btnLeft].join(' ')}>
          <img src={leftArrowIcon} alt="arrow" className={classes.arrow}/>
        </button>
        <button 
          onClick={() => this.Carousel._slideNext()} 
          className={[classes.slideChangeBtn, classes.btnRight].join(' ')}>
          <img src={rightArrowIcon} alt="arrow" className={classes.arrow} />
        </button>
      </div>
  );
  }
}

export default Carousel;