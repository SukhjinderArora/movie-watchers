import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import classes from './Carousel.module.css';

import leftArrowIcon from '../../../assets/images/left-arrow.svg'
import rightArrowIcon from '../../../assets/images/right-arrow.svg'

class Carousel extends Component {
    
  render() {
    return (
      <div className={classes.Carousel}>
        <AliceCarousel 
          dotsDisabled={true}
          buttonsDisabled={true}
          mouseDragEnabled 
          items={this.props.data}    
          responsive={this.props.responsive}
          infinite={true}
          disableAutoPlayOnAction={true}
          stopAutoPlayOnHover={true}
          stagePadding={{ paddingLeft: 10, paddingRight: 15, }}
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