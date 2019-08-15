import React from 'react';

import Review from './Review/Review';
import classes from './Reviews.module.css';

const Reviews = ({ reviewsList, showFullReview }) => {
  if(reviewsList.length === 0) return null;

  const reviews = reviewsList.map(review => {
    if(review.content.length > 500) {
      const preview = review.content.substring(0, 499) + '....';
      const shortReview = {
        id: review.id,
        author: review.author,
        content: preview
      }
      return (
        <Review review={shortReview} key={review.id}>
          <button className={classes.showMoreButton} onClick={() => showFullReview(review)}>Show More</button>
        </Review>
      );
    }
    return (
      <Review review={review} key={review.id}/>
    );
  });

  return (
    <div className={classes.reviewContainer}>
      <h2 className={classes.title}>Reviews</h2>
      {reviews}
    </div>
  );
};
    
export default Reviews;