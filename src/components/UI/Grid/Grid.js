import React from 'react';

import Card from '../Card/Card';
import classes from './Grid.module.css';
import { base_img_url } from '../../../config';
import placeholderImg from '../../../assets/images/placeholder_img.png';

const Grid = (props) => {
  const cards = props.data.map(dataItem => {
    let imageUrl;
    if (!dataItem.poster_path) {
      imageUrl = placeholderImg;
    } else {
      imageUrl = `${base_img_url}w300${dataItem.poster_path}`;
    }
    return <Card imgUrl={imageUrl} key={dataItem.id} data={dataItem} onCardClickHandler={props.onClickHandler}/>
  });

  return (
    <div className={classes.GridContainer}>
      {cards}
    </div>
  );
};

export default Grid;