import React from 'react';
import { NavLink } from 'react-router-dom';

import * as classes from './SubNavigationItem.module.css';

const SubNavigationItem = (props) => {
  return (
    <li className={classes.SubNavigationItem} onClick={props.menuItemClickHandler}>
      <NavLink
        to={props.link}
        className={classes.NavLink}
        activeClassName={classes.active}>
        {props.linkName}
      </NavLink>
    </li>
  );
};

export default SubNavigationItem;
