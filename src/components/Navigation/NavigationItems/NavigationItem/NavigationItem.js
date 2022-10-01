import React from "react";

import { NavLink } from "react-router-dom";
import classes from "./NavigationItem.module.css";

const NavigationItem = (props) => {
  return (
    <li
      className={classes.NavigationItem}
      onMouseEnter={props.mouseEnterHandler}
      onMouseLeave={props.mouseLeaveHandler}
      onClick={props.menuItemClickHandler}
    >
      <NavLink
        to={props.link}
        className={({ isActive }) =>
          isActive ? `${classes.NavLink} ${classes.active}` : classes.NavLink
        }
      >
        {props.linkName}
      </NavLink>
      {props.children}
    </li>
  );
};

export default NavigationItem;
