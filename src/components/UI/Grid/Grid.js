import React, { Component } from 'react';

import Card from '../Card/Card';
import classes from './Grid.module.css';
import { base_img_url } from '../../../config';
import placeholderImg from '../../../assets/images/placeholder_img.png';

class Grid extends Component {
  render() {
    let imageUrl = base_img_url + 'w300';
    const cards = this.props.data.map(dataItem => {
      if(!dataItem.poster_path) {
        return <Card imgUrl={placeholderImg} key={dataItem.id} data={dataItem} />
      }
      return <Card imgUrl={imageUrl + dataItem.poster_path} key={dataItem.id} data={dataItem}/>
    });

    return (
      <div className={classes.GridContainer}>
        <div className={classes.Grid}>
          {cards}
        </div> 
      </div>
    );
  }
}

export default Grid;