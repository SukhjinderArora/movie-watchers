import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./SubNavigationItem.module.css";

const SubNavigationItem = (props) => {
  return (
    <li
      className={classes.SubNavigationItem}
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
    </li>
  );
};

export default SubNavigationItem;
