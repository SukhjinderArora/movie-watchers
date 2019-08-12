import React from 'react';
import { Link } from 'react-router-dom';

import RightArrow from '../UI/Icons/RightArrow';
import classes from './HeaderWithLink.module.css';

const HeaderWithLink = ({ title, link }) => {
  return (
    <header className={classes.header}>
      <h2 className={classes.title}>{title}</h2>
      <Link to={link} className={classes.seeMoreLink}>
        <span className={classes.seeMoreText}>See More</span>
        <span className={classes.rightArrow}><RightArrow height="15" width="15" color="#55AA29" /></span>
      </Link>
    </header>
  );
};

export default HeaderWithLink;
