import React from 'react';
import { Link } from 'react-router-dom';

import classes from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={classes.NotFound}>
      <h1>OOPS!</h1>
      <h2>Error 404: Page Not Found</h2>
      <Link to="/">Go To Home Page</Link>
    </div>
  );
};

export default NotFound;
