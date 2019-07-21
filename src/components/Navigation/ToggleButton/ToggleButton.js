import React from 'react';

import classes from './ToggleButton.module.css';

const ToggleButton = (props) => (
  <div className={classes.ToggleButton}
    onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default ToggleButton;