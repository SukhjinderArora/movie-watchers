import React from 'react';

import Card from '../UI/Card/Card';
import Carousel from '../UI/Carousel/Carousel';

import classes from './Recommendations.module.css';
import { base_img_url } from '../../config';

const Recommendations = ({ recommendations }) => {
  const responsive = {
    0: { items: 3 },
    767: { items: 2 },
    1023: { items: 3 },
    1200: { items: 4 }
  };
  let recommendationsArray, recommendationsCarousel = null;
  if (recommendations.length > 0) {
    recommendationsArray = recommendations.map(recommendation => {
      return <Card
        imgUrl={base_img_url + 'w300/' + recommendation.poster_path}
        key={recommendation.id}
        onDragStart={(e) => e.preventDefault()}
        data={recommendation} />;
    });
    recommendationsCarousel = (
      <div>
        <h2 className={classes.title}>Recommendations</h2>
        <Carousel title="Recommendations" data={recommendationsArray} responsive={responsive} />
      </div>
    );
  }
  return recommendationsCarousel;
};

export default Recommendations;
