import React from 'react';

import user from '../../../assets/images/user.png';

import classes from './Review.module.css';

const Review = ({ review, children }) => {
  if(!review.content) return null;
  const paragraphs = review.content.split(/\s\s/gi);
  const paragraphsJSX = paragraphs.map(paragraph => (
    <p className={classes.paragraph} key={review.id + paragraph.length + Math.random()}>
      {paragraph}
      <br />
    </p>
    ));

  return (
    <div className={classes.review}>
      <div className={classes.author}>
        <img src={user} alt="user profile" className={classes.authorImage}/>
        <h2 className={classes.authorName}>{review.author}</h2>
      </div>
      <div className={classes.content}>
          {paragraphsJSX}
          {children}
      </div>
    </div>
  );
};

export default Review;
