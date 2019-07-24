import React, { Component } from 'react';

import classes from './Image.module.css';

class Image extends Component {
  state = {
    imageLoaded: false
  };

  onImageLoad = () => {
    this.setState({
      imageLoaded: true
    })
  };
  
  render() {
    const placeHolderDiv = [classes.ImagePlaceHolder];
    if (this.state.imageLoaded) {
      placeHolderDiv.push(classes.ImageLoaded);
    }
    return (
      <>
        <img
          src={this.props.imgUrl}
          alt={this.props.alt}
          className={classes.Image}
          onLoad={this.onImageLoad} />
        <div className={placeHolderDiv.join(' ')}></div>
      </>
    );
  }
}

export default Image;
