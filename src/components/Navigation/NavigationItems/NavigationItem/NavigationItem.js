import React from 'react';

import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.css';

const NavigationItem = (props) => {
  return (
    <li className={classes.NavigationItem} onMouseEnter={props.mouseEnterHandler} onMouseLeave={props.mouseLeaveHandler}>
      <NavLink 
        to={props.link} 
        className={classes.NavLink}
        activeClassName={classes.active}>
        {props.linkName}
      </NavLink>
      {props.children}
    </li>
  );
};

export default NavigationItem;
