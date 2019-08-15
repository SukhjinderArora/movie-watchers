import React from 'react';
import ReactMarkdown from 'react-markdown';

import user from '../../../assets/images/user.png';

import classes from './Review.module.css';

const Review = ({ review, children }) => {
  if(!review.content) return null;
  return (
    <div className={classes.review}>
      <div className={classes.author}>
        <img src={user} alt="user profile" className={classes.authorImage}/>
        <h2 className={classes.authorName}>{review.author}</h2>
      </div>
      <div className={classes.content}>
        <ReactMarkdown source={review.content} className={classes.paragraph} linkTarget={() => '_blank'}/>
        {children}
      </div>
    </div>
  );
};

export default Review;
