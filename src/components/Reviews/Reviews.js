import React from 'react';

import user from '../../assets/images/user.png';
import classes from './Reviews.module.css';

const Reviews = ({ reviewsList }) => {
  if(reviewsList.length === 0) return null;

  const reviews = reviewsList.map(review => {

    const paragraphs = review.content.split(/\s\s/gi);
    const paragraphsJSX = paragraphs.map(paragraph => (
      <p className={classes.paragraph} key={paragraph.length + Math.random()}>
        {paragraph}
        <br />
      </p>
    ));

    return (
      <div className={classes.review} key={review.id}>
        <div className={classes.author}>
          <img src={user} alt="user profile" className={classes.authorImage}/>
          <h2 className={classes.authorName}>{review.author}</h2>
        </div>
        <div className={classes.content}>{paragraphsJSX}</div>
      </div>
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
