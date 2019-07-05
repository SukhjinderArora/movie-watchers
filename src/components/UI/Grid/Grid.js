import React, { Component } from 'react';

import Card from '../Card/Card';
import classes from './Grid.module.css';
import { base_img_url } from '../../../config';

class Grid extends Component {
  render() {
    const imageUrl = base_img_url + 'w300';
    const data = this.props.data.data.map(data => {
      return <Card imgUrl={imageUrl + data.poster_path} key={data.id} />
    });

    return (
      <div className={classes.GridContainer}>
        <h2 className={classes.title}>{this.props.data.title}</h2>
        <div className={classes.Grid}>
          {data}
        </div> 
      </div>
    );
  }
}

export default Grid;